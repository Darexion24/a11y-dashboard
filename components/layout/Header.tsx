import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="h-16 border-b border-[var(--border-color)] flex items-center justify-between px-6">
      <h1 className="text-xl font-bold">Developer Portfolio</h1>
      <ThemeToggle />
    </header>
  );
}