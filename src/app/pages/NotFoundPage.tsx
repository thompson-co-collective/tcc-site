import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main id="main-content" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm tracking-[0.12em] uppercase text-[#117C92] mb-4">404</p>
        <h1 className="mb-5" style={{ fontFamily: "var(--font-serif)", color: "#0A1220" }}>
          Page not found
        </h1>
        <p className="text-gray-600 mb-10" style={{ fontFamily: "var(--font-sans)" }}>
          The page you requested may have moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="px-6 py-3 rounded bg-[#117C92] text-white">
            Home
          </Link>
          <Link to="/capabilities" className="px-6 py-3 rounded border border-gray-300 text-[#0A1220]">
            Capabilities
          </Link>
          <Link to="/contact" className="px-6 py-3 rounded border border-gray-300 text-[#0A1220]">
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}

