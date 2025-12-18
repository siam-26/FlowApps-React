import { Star, Download } from "lucide-react";
import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function Top_Apps() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data.slice(0, 8));
      });
  }, []);

  console.log(apps);

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
          <Link to={`/all_apps/${app.id}`} key={app.id}>
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-semibold text-slate-800 text-sm mb-3">
                {app.title}
              </h3>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-md">
                  <Download size={14} />
                  <span>{app.downloads}</span>
                </div>

                <div className="flex items-center gap-1 text-orange-500 bg-orange-50 px-2 py-1 rounded-md">
                  <Star size={14} fill="currentColor" />
                  <span>{app.ratingAvg}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/all_apps">
          <button className="px-8 py-3 rounded-lg bg-[#814fe8] text-white cursor-pointer font-bold">
            Show All
          </button>
        </Link>
      </div>
    </section>
  );
}
