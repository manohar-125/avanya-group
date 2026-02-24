import type { Metadata } from "next";
import Link from "next/link";
import DepartmentsCarousel from "@/components/DepartmentsCarousel";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Avanya Pratap Service and Construction — a trusted government contractor delivering civil, infrastructure, and technical services across Uttar Pradesh.",
};

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-white px-8 py-28 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-secondary leading-tight">
          Government Tender & Infrastructure Services
        </h1>

        <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Avanya Pratap Service and Construction is a trusted execution
          partner delivering high-quality civil, infrastructure, and
          government contract works across multiple departments.
        </p>

        <div className="mt-10">
          <Link
            href="/contact"
            className="bg-primary text-white px-8 py-3 rounded-md text-lg font-medium hover:opacity-90 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h2 className="text-4xl font-bold text-primary">135</h2>
            <p className="mt-2 text-gray-600">Completed Projects</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-primary">5</h2>
            <p className="mt-2 text-gray-600">Ongoing Projects</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-primary">2024</h2>
            <p className="mt-2 text-gray-600">Established</p>
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <DepartmentsCarousel />

    </main>
  );
}