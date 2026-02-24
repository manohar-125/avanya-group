import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-8 text-center">
      <h1 className="text-8xl font-bold text-primary">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-secondary">Page Not Found</h2>
      <p className="mt-4 text-gray-600 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 bg-primary text-white px-8 py-3 rounded-md text-lg font-medium hover:opacity-90 transition"
      >
        Back to Home
      </Link>
    </main>
  );
}
