import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
  const p = req.nextUrl.searchParams.get('p') || '/';
  try {
    revalidatePath(p);
    return NextResponse.json({ ok: true, path: p });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
