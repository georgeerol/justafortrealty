import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="font-heading text-6xl font-bold text-realty-navy">404</h1>
      <p className="font-body text-xl text-slate-600 mt-4 text-center">
        Page not found
      </p>
      <p className="font-body text-slate-500 mt-2 text-center max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </main>
  )
}
