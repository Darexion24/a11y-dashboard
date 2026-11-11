export default function SkipLink() {
    return (
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-blue-600 focus:text-white focus:font-bold focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Skip to Main Content
      </a>
    );
  }