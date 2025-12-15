import { Star, Download } from "lucide-react";

const apps = [
  {
    id: 1,
    title: "Forest: Focus For Productivity",
  },
  {
    id: 2,
    title: "SmPlan: ToDo List With Reminder",
  },
  {
    id: 3,
    title: "FLIP - Focus Timer For Study",
  },
  {
    id: 4,
    title: "Pomocat - Cute Pomodoro Timer",
  },
  {
    id: 5,
    title: "Forest: Focus For Productivity",
  },
  {
    id: 6,
    title: "SmPlan: ToDo List With Reminder",
  },
  {
    id: 7,
    title: "FLIP - Focus Timer For Study",
  },
  {
    id: 8,
    title: "Pomocat - Cute Pomodoro Timer",
  },
];

export default function Top_Apps() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Trending Apps
        </h2>
        <p className="mt-3 text-slate-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {apps.map((app) => (
          <div key={app.id} className="bg-white rounded-xl shadow-sm p-4">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>

            <h3 className="font-semibold text-slate-800 text-sm mb-3">
              {app.title}
            </h3>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-md">
                <Download size={14} />
                <span>9M</span>
              </div>

              <div className="flex items-center gap-1 text-orange-500 bg-orange-50 px-2 py-1 rounded-md">
                <Star size={14} fill="currentColor" />
                <span>5</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-8 py-3 rounded-lg bg-[#814fe8] text-white cursor-pointer font-bold">
          Show All
        </button>
      </div>
    </section>
  );
}
