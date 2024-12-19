import { Leaf } from "lucide-react";
import { Link } from "react-router";

const header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Leaf className="h-8 w-8 text-green-600 mr-2" />
          <span className="text-2xl font-bold text-gray-900">NutriScan</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#features" className="text-gray-600 hover:text-gray-900">
                Features
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-gray-900"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#try-it-now"
                className="text-gray-600 hover:text-gray-900"
              >
                Try It Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default header;
