import { useState } from "react";
import { Download, Star, MessageSquare } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, Link } from "react-router";

export default function App_Details() {
  const app = useLoaderData(); 
  const [installed, setInstalled] = useState(false);

  const handleInstall = () => {
    setInstalled(true);
    toast.success("App installed successfully!");
  };


  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center mt-20">
        <h2 className="text-2xl font-bold mb-2">App is Not Found</h2>
        <p className="text-slate-500 mb-4 text-center">
          The App you are requesting is not found on your system. Please try
          another app.
        </p>
        <Link to="/all_apps">
          <button className="bg-[#814fe8] text-white font-medium px-6 py-2 rounded-md cursor-pointer">
            Go Back!
          </button>
        </Link>
      </div>
    );
  }

  const ratingData = [...app.ratings].reverse();

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <Toaster position="top-right" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center">
          <div className="h-60 w-60 bg-white rounded-xl shadow-inner overflow-hidden">
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-2">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            {app.title}
          </h1>
          <p className="text-slate-500 mt-1">
            Developed by{" "}
            <span className="text-indigo-600">{app.companyName}</span>
          </p>

          <div className="flex flex-wrap gap-8 mt-6">
            <Stat
              icon={<Download className="text-green-600" />}
              label="Downloads"
              value={app.downloads}
            />
            <Stat
              icon={<Star className="text-orange-500" />}
              label="Average Ratings"
              value={app.ratingAvg}
            />
            <Stat
              icon={<MessageSquare className="text-purple-600" />}
              label="Total Reviews"
              value={app.reviews}
            />
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-6 px-6 py-3 rounded-lg font-medium transition
              ${
                installed
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-green-500 text-white hover:bg-green-600"
              }`}
          >
            {installed ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">Ratings</h2>
        <div className="w-full h-72">
          <ResponsiveContainer width="80%" height="80%">
            <BarChart data={ratingData} layout="vertical">
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={80} />
              <Tooltip />
              <Bar dataKey="count" fill="#fb923c" radius={[6, 6, 6, 6]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">
          Description
        </h2>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>{app.description}</p>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-3 bg-gray-100 rounded-lg">{icon}</div>
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="font-semibold text-slate-800">{value}</p>
      </div>
    </div>
  );
}
