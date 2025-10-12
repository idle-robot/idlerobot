
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Idle Robot — Agents & Automations',
  description: 'We build delightful AI agents, tools, and automations.',
  metadataBase: new URL('https://idle-robot.com'),
  icons: { icon: '/icon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="wide-container py-3 flex items-center justify-between">
            <a href="/" className="brand">idle robot</a>
            <nav className="flex items-center gap-6">
              <a className="nav-link" href="#work">Work</a>
              <a className="nav-link" href="#about">About</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t border-white/10">
          <div className="wide-container py-10 text-sm subtle">
            © {new Date().getFullYear()} Idle Robot
          </div>
        </footer>
      </body>
    </html>
  );
}
