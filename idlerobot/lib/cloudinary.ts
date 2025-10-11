export type CloudinaryImage = {
  public_id: string;
  format: string;
  secure_url?: string;
};

// Simple unauthenticated tag list fetch; requires "image list by tag" to be enabled.
export async function cloudinaryTagged(tag: string): Promise<CloudinaryImage[]> {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  if (!cloudName) return [];
  // Public tag list JSON:
  const url = `https://res.cloudinary.com/${cloudName}/image/list/${encodeURIComponent(tag)}.json`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return [];
    // format: { resources: [{ public_id, format, ... }]}
    const data = await res.json();
    return (data?.resources ?? []) as CloudinaryImage[];
  } catch {
    return [];
  }
}
