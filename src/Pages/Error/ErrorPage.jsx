import { Link } from "react-router";
import errorPage from "../../assets/error-404.png";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Image */}
      <img src={errorPage} alt="Page Not Found" className="w-72 mb-6" />

      <h1 className="text-3xl font-bold text-slate-800 mb-2">
        Oops, page not found!
      </h1>

      <p className="text-slate-500 mb-6">
        The page you are looking for is not available.
      </p>

      <Link to="/">
        <button className="px-6 py-3 bg-[#814fe8] text-white rounded-lg font-medium cursor-pointer">
          Go Back!
        </button>
      </Link>
    </div>
  );
}
