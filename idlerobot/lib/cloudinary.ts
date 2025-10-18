export type CloudinaryImage = {
  public_id: string;
  format: string;
  secure_url?: string;
};

type CloudinarySearchResponse = {
  resources?: Array<{
    public_id: string;
    format: string;
    secure_url?: string;
  }>;
};

const SEARCH_URL = (cloudName: string) => `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`;
const MAX_RESULTS = 30;

// Fetch assets by tag via the authenticated Search API to work on plans without public tag feeds.
export async function cloudinaryTagged(tag: string): Promise<CloudinaryImage[]> {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  if (!cloudName || !apiKey || !apiSecret) {
    console.error('cloudinaryTagged: missing env', {
      hasCloudName: Boolean(cloudName),
      hasApiKey: Boolean(apiKey),
      hasApiSecret: Boolean(apiSecret),
    });
    return [];
  }

  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
  const body = JSON.stringify({
    expression: `tags="${tag}"`,
    max_results: MAX_RESULTS,
    sort_by: [{ public_id: 'desc' }],
  });

  try {
    const res = await fetch(SEARCH_URL(cloudName), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${auth}`,
      },
      body,
      // Do not cache Search API responses; content updates should surface immediately post-revalidation.
      cache: 'no-store',
    });
    if (!res.ok) {
      let bodySnippet = '';
      try { bodySnippet = (await res.text()).slice(0, 300); } catch {}
      console.error('cloudinaryTagged: search failed', {
        status: res.status,
        statusText: res.statusText,
        body: bodySnippet,
      });
      return [];
    }
    const data = (await res.json()) as CloudinarySearchResponse;
    return (data.resources ?? []).map(asset => ({
      public_id: asset.public_id,
      format: asset.format,
      secure_url: asset.secure_url,
    }));
  } catch (error) {
    console.error('cloudinaryTagged: unexpected error', {
      message: error instanceof Error ? error.message : String(error),
    });
    return [];
  }
}
