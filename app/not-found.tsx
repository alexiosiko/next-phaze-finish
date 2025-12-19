export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
          Hmm — we couldn't find that page. Try heading back home and we'll get you back on track.
        </p>
        <a 
          href="/" 
          className="bg-[color:var(--accent)] hover:bg-[color:var(--primary)] text-[color:var(--accent-foreground)] px-6 py-3 rounded-lg transition-colors shadow"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}