import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore completed and ongoing infrastructure projects delivered by Avanya Pratap Service and Construction across government departments in Uttar Pradesh.",
};

const completedProjects = [
  {
    title: "Rural Road Construction",
    department: "Rural Development Department, Uttar Pradesh",
    year: "2024",
    description:
      "Construction of rural connectivity roads under the Pradhan Mantri Gram Sadak Yojana scheme.",
  },
  {
    title: "Commercial Tax Office Renovation",
    department: "Commercial Tax Department, Uttar Pradesh",
    year: "2024",
    description:
      "Civil renovation and electrical works for district commercial tax office premises.",
  },
  {
    title: "Military Welfare Infrastructure",
    department: "Department of Military Affairs",
    year: "2024",
    description:
      "Infrastructure maintenance and upgradation works for military welfare facilities.",
  },
  {
    title: "Consumer Commission Building Works",
    department: "State Consumer Disputes Redressal Commission",
    year: "2025",
    description:
      "Civil and interior finishing works for the commission's district-level office.",
  },
];

const ongoingProjects = [
  {
    title: "Rural Engineering Infrastructure",
    department: "Rural Engineering Department",
    year: "2025–Present",
    description:
      "Ongoing execution of rural drainage and road infrastructure under the state engineering program.",
  },
];

export default function Projects() {
  return (
    <main className="py-28 bg-gray-50 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary">Our Projects</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A track record of successful government project execution across
            multiple departments in Uttar Pradesh.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-14 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border">
            <p className="text-4xl font-bold text-primary">13+</p>
            <p className="mt-2 text-gray-600">Completed Projects</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl border">
            <p className="text-4xl font-bold text-primary">5</p>
            <p className="mt-2 text-gray-600">Ongoing Projects</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl border">
            <p className="text-4xl font-bold text-primary">5</p>
            <p className="mt-2 text-gray-600">Departments Served</p>
          </div>
        </div>

        {/* Ongoing Projects */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-secondary mb-8">
            Ongoing Projects
          </h2>
          <div className="space-y-4">
            {ongoingProjects.map((project, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-primary"
              >
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-secondary">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary mt-1">
                      {project.department}
                    </p>
                    <p className="text-gray-600 mt-3 text-sm">
                      {project.description}
                    </p>
                  </div>
                  <span className="text-sm bg-primary/10 text-primary px-4 py-1 rounded-full font-medium whitespace-nowrap">
                    {project.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Projects */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-secondary mb-8">
            Completed Projects
          </h2>
          <div className="space-y-4">
            {completedProjects.map((project, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-xl border"
              >
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-secondary">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary mt-1">
                      {project.department}
                    </p>
                    <p className="text-gray-600 mt-3 text-sm">
                      {project.description}
                    </p>
                  </div>
                  <span className="text-sm bg-gray-100 text-gray-600 px-4 py-1 rounded-full font-medium whitespace-nowrap">
                    {project.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
