import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Idle Robot — Software & AI',
  description: 'Idle Robot builds useful software and AI tools.',
  metadataBase: new URL('https://idle-robot.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b">
          <div className="container py-4 flex items-center justify-between">
            <a href="/" className="font-semibold text-xl">Idle Robot</a>
            <nav className="space-x-6 text-sm">
              <a href="/work">Work</a>
              <a href="/about">About</a>
            </nav>
          </div>
        </header>
        <main className="py-10">{children}</main>
        <footer className="border-t">
          <div className="container py-8 text-sm text-gray-500">
            © {new Date().getFullYear()} Idle Robot
          </div>
        </footer>
      </body>
    </html>
  );
}
