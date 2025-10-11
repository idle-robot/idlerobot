import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-webhook-secret');
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }
  const { type, slug, paths = [], tags = [] } = await req.json() || {};
  const revalidated: Record<string, string[]> = { paths: [], tags: [] };

  if (type === 'project' && slug) {
    try { revalidateTag(`project-${slug}`); revalidated.tags.push(`project-${slug}`); } catch {}
    try { revalidatePath(`/work/${slug}`); revalidated.paths.push(`/work/${slug}`); } catch {}
    try { revalidatePath(`/work`); revalidated.paths.push(`/work`); } catch {}
    try { revalidatePath(`/`); revalidated.paths.push(`/`); } catch {}
  }

  for (const p of paths) { try { revalidatePath(p); revalidated.paths.push(p); } catch {} }
  for (const t of tags) { try { revalidateTag(t); revalidated.tags.push(t); } catch {} }

  return NextResponse.json({ ok: true, revalidated });
}
