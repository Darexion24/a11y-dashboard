export default function ChartSkeleton() {
    return (
      <div className="w-full h-80 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg border border-[var(--border-color)] flex items-center justify-center">
        <span className="sr-only">Loading chart data...</span>
      </div>
    );
  }