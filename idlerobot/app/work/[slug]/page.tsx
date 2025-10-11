import { getAllProjectSlugs, getProjectBySlug } from '@/lib/content';
import Gallery from '@/components/Gallery';

export const revalidate = 60;

export async function generateStaticParams() {
  return getAllProjectSlugs().map(slug => ({ slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  return (
    <div className="container">
      <a href="/work" className="text-sm text-gray-500 hover:underline">← Back to Work</a>
      <h1 className="text-4xl font-bold mt-2 mb-3">{project.title}</h1>
      <p className="text-gray-600 mb-6">{project.summary}</p>
      {project.gallery_tags?.length ? (<>
        <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
        <Gallery tags={project.gallery_tags} />
      </>) : null}
      {project.video_ids?.length ? (<>
        <h2 className="text-2xl font-semibold mt-10 mb-4">Video</h2>
        {project.video_ids.map(id => (
          <div key={id} className="aspect-video mb-6">
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${id}`} title="Demo" allowFullScreen />
          </div>
        ))}
      </>) : null}
    </div>
  );
}
