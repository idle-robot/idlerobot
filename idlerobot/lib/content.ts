import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  status: 'launched' | 'WIP' | 'archived';
  hero_image?: string;
  gallery_tags?: string[];
  video_ids?: string[];
  links?: Record<string, string>;
  body?: string;
};

const CONTENT_DIR = path.join(process.cwd(), 'content', 'projects');

export function getAllProjectSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs.readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
    .map(f => f.replace(/\.mdx?$/, ''));
}

export function getProjectBySlug(slug: string): Project {
  const file = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(file, 'utf-8');
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    summary: data.summary ?? '',
    tags: data.tags ?? [],
    status: data.status ?? 'WIP',
    hero_image: data.hero_image,
    gallery_tags: data.gallery_tags ?? [],
    video_ids: data.video_ids ?? [],
    links: data.links ?? {},
    body: content,
  };
}

export function getAllProjects(): Project[] {
  return getAllProjectSlugs().map(getProjectBySlug);
}
