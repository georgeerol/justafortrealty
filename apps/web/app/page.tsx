import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-realty-navy text-center">
        Justafort Realty
      </h1>
      <p className="font-body text-lg text-slate-600 mt-4 text-center max-w-md">
        Your Trusted Real Estate Expert in Eastern North Carolina
      </p>
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Link href="/#cma" className="btn-primary">Get Free Analysis</Link>
        <Link href="/listings" className="btn-secondary">View Listings</Link>
      </div>
      <p className="mt-12 text-sm text-slate-400">Phase 2 — Layout Shell Complete</p>
    </div>
  )
}
