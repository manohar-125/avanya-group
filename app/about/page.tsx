import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Avanya Pratap Service and Construction — a registered government contractor delivering civil and infrastructure projects across Uttar Pradesh.",
};

export default function About() {
  return (
    <main className="py-28 bg-gray-50 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary">About Us</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Avanya Pratap Service and Construction is a registered government
            contractor based in Ghazipur, Uttar Pradesh.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 space-y-10">
          <div className="bg-white rounded-2xl p-10 shadow-xl border">
            <h2 className="text-2xl font-bold text-secondary mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              Established in 2024, Avanya Pratap Service and Construction delivers
              high-quality civil, infrastructure, and government contract works
              across multiple departments in Uttar Pradesh. We are a compliant,
              process-driven organization with a strong track record of on-time
              execution.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-xl border">
            <h2 className="text-2xl font-bold text-secondary mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To be Uttar Pradesh&apos;s most reliable government execution partner
              — delivering projects with quality, transparency, and commitment to
              public service outcomes.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-xl border">
            <h2 className="text-2xl font-bold text-secondary mb-4">Why Choose Us</h2>
            <ul className="space-y-3 text-gray-600 list-disc list-inside">
              <li>Registered and compliant with all government procurement norms</li>
              <li>Experienced across rural development, commercial tax, military, and engineering departments</li>
              <li>Transparent reporting and quality-assured execution</li>
              <li>Proven track record of 13+ completed projects since 2024</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
