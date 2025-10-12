
import AnimatedIdleRobot from '@/components/AnimatedIdleRobot';

export const revalidate = 60;

export default function Home() {
  return (
    <main>
      <section className="section" id="home">
        <div className="wide-container grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="text-xs tracking-widest uppercase subtle">Idle Robot</span>
            <h1 className="hero">
              Agents & automations<br/>for real work <span className="accent">— beautifully</span>.
            </h1>
            <p className="text-lg subtle max-w-prose">
              We design, ship, and operate AI-powered tools that actually help teams move faster.
              Drop a screenshot or publish a demo—your site updates itself.
            </p>
            <div className="flex gap-3">
              <a className="btn" href="#work">See our work</a>
              <a className="btn" href="#about">About us</a>
            </div>
          </div>
          <div><AnimatedIdleRobot /></div>
        </div>
      </section>

      <div className="sep" />

      <section className="section" id="work">
        <div className="wide-container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected work</h2>
            <p className="subtle mb-6">
              This section can auto-populate from your content folder and Cloudinary tags.
              For now, here’s placeholder copy and a couple of example highlights.
            </p>
            <ul className="space-y-3 subtle">
              <li>• MCP-enabled agent with Confluence + internal tools</li>
              <li>• Customer-automation workflows with Gateway + auth</li>
              <li>• Realtime browser automation and DOM intelligence</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 p-4 bg-white/5">Screenshot slot</div>
            <div className="rounded-2xl border border-white/10 p-4 bg-white/5">Video embed slot</div>
            <div className="rounded-2xl border border-white/10 p-4 bg-white/5 col-span-2">Auto-gallery by tag</div>
          </div>
        </div>
      </section>

      <div className="sep" />

      <section className="section" id="about">
        <div className="wide-container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Idle Robot</h2>
            <p className="subtle mb-4">
              We’re a small, senior team shipping pragmatic AI systems. Infra on AWS, clean UX on the front,
              and production observability everywhere.
            </p>
            <p className="subtle">
              This site uses Next.js ISR + on‑demand revalidation. Cloudinary tags and YouTube playlists can
              trigger immediate updates—no manual edits required.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="text-sm subtle">Roadmap</div>
            <ul className="mt-3 space-y-2">
              <li>• Case studies with auto galleries</li>
              <li>• Live demos & gated previews</li>
              <li>• OG image generator for shareable cards</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
