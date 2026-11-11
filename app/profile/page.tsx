export default function ProfilePage() {
    return (
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Developer Profile</h2>
          <p className="text-gray-600 dark:text-gray-400 high-contrast:text-white">
            Manage your public portfolio information.
          </p>
        </header>
        <div className="bg-[var(--bg-primary)] p-6 rounded-lg border border-[var(--border-color)] shadow-sm">
          <p>Profile settings and bio information will go here.</p>
        </div>
      </div>
    );
  }