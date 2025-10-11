import { getAllProjects } from '@/lib/content';

export const revalidate = 60;

export default function WorkList() {
  const projects = getAllProjects();
  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-6">Work</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <a key={p.slug} href={`/work/${p.slug}`} className="card p-4 hover:shadow-md transition">
            <div className="text-sm text-gray-500 mb-2">{p.tags.join(' • ')}</div>
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600">{p.summary}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
