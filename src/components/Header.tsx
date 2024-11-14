import { SiIfood } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-[70px] flex items-center justify-between px-5 shadow-lg">
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <SiIfood size={30} color="#FF8001" />
        <Link to="/" className="text-2xl italic font-semibold text-[#FF8001] cursor-pointer">
          MTOGO
        </Link>
      </div>
      <div>
        <div className="hover:bg-gray-50 p-3 hover:rounded-full cursor-pointer">
          <RxHamburgerMenu className="" size={26} />
        </div>
      </div>
    </div>
  );
};

export default Header;
