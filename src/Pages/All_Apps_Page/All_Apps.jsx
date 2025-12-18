import { useEffect, useState } from "react";
import { Star, Download, Search } from "lucide-react";
import { Link } from "react-router";

export default function All_Apps() {
  const [apps, setApps] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  
  const searchedApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Our All Applications
        </h2>
        <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
          Explore all Apps on the Market developed by us. We code for Millions.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <p className="text-slate-700 font-medium">
          Total Apps:{" "}
          <span className="font-semibold">{searchedApps.length}</span>
        </p>

        <div className="relative w-full sm:w-64">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search apps..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg"
          />
        </div>
      </div>

      
      {searchedApps.length === 0 ? (
        <p className="text-center text-slate-500 text-lg">No App Found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {searchedApps.map((app) => (
            <Link key={app.id} to={`/all_apps/${app.id}`}>
              <div className="bg-white rounded-xl shadow-sm p-4 cursor-pointer">
                <div className="h-48 bg-gray-200 rounded-lg mb-4">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <h3 className="font-semibold text-slate-800 text-sm mb-3">
                  {app.title}
                </h3>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-green-600">
                    <Download size={14} />
                    <span>{app.downloads}</span>
                  </div>

                  <div className="flex items-center gap-1 text-orange-500">
                    <Star size={14} fill="currentColor" />
                    <span>{app.ratingAvg}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
