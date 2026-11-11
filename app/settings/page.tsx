export default function SettingsPage() {
    return (
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Dashboard Settings</h2>
          <p className="text-gray-600 dark:text-gray-400 high-contrast:text-white">
            Configure your data sources and preferences.
          </p>
        </header>
        <div className="bg-[var(--bg-primary)] p-6 rounded-lg border border-[var(--border-color)] shadow-sm">
          <p>GitHub integration and API configuration will go here.</p>
        </div>
      </div>
    );
  }