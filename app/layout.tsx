import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import SkipLink from '@/components/layout/SkipLink';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import AxeReporter from '@/components/layout/AxeReporter'; // 1. Add the import

export const metadata: Metadata = {
  title: 'Accessible Developer Dashboard',
  description: 'A WCAG compliant data dashboard portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* 2. Drop it in right before the ThemeProvider */}
        <AxeReporter />
        <ThemeProvider>
          <SkipLink />
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
              <Header />
              <main 
                id="main-content" 
                className="flex-1 overflow-y-auto p-6 focus:outline-none"
                tabIndex={-1} 
              >
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}