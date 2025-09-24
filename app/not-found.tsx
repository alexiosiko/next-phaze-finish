export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <a 
          href="/" 
          className="bg-[#CD9B6A] hover:bg-[#B88756] text-white px-6 py-3 rounded-lg transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}