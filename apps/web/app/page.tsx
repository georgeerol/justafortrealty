export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-realty-navy text-center">
        Justafort Realty
      </h1>
      <p className="font-body text-lg text-slate-600 mt-4 text-center max-w-md">
        Your Trusted Real Estate Expert in Eastern North Carolina
      </p>
      <div className="mt-8 flex gap-4">
        <button className="btn-primary">Get Free Analysis</button>
        <button className="btn-secondary">View Listings</button>
      </div>
      <p className="mt-12 text-sm text-slate-400">Phase 1 — Setup Complete</p>
    </main>
  )
}
