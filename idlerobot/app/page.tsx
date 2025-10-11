import { getAllProjects } from '@/lib/content';
import Image from 'next/image';

export const revalidate = 60;

export default function Home() {
  const projects = getAllProjects().slice(0, 6);
  return (
    <div className="container">
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-3">We build agents, tools, and automations.</h1>
        <p className="text-lg text-gray-600">Recent work updates automatically—drop a screenshot or publish a demo video and the site refreshes itself.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Latest projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(p => (
            <a key={p.slug} href={`/work/${p.slug}`} className="card p-4 hover:shadow-md transition">
              <div className="text-sm text-gray-500 mb-2">{p.tags.join(' • ')}</div>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600">{p.summary}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
