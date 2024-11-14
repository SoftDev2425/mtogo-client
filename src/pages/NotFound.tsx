import { Link } from "react-router-dom";
import { SiIfood } from "react-icons/si";

const NotFound = () => {
  return (
    <div className="h-[600px] w-full flex flex-col items-center justify-center text-gray-800">
      <h2 className="text-8xl font-bold mb-4 text-[#FF8001]">Woops!</h2>
      <p className="text-lg mb-2">404 - The page you were looking for was not found.</p>
      <Link to="/" className="text-lg font-semibold text-blue-500 hover:underline">
        Click here to go back to the homepage
      </Link>

      <div>
        <SiIfood size={200} color="#FF8001" />
      </div>
    </div>
  );
};

export default NotFound;
