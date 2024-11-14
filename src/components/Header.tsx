import { SiIfood } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
        <Dialog>
          <DialogTrigger>
            <div className="hover:bg-gray-50 p-3 hover:rounded-full cursor-pointer">
              <RxHamburgerMenu className="" size={26} />
            </div>
          </DialogTrigger>
          <DialogContent className="h-full md:h-fit">
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold">My account</DialogTitle>

              {/* sign in and create account buttons */}
              <div className="flex gap-2 w-full items-center justify-center">
                <Link to="/signin" className="text-lg font-semibold text-gray-800 hover:text-gray-900">
                  Sign in
                </Link>
                <Link to="/signup" className="text-lg font-semibold text-gray-800 hover:text-gray-900">
                  Create account
                </Link>
              </div>

              <DialogDescription>
                This action cannot be undone. This will permanently delete your account and remove your data from our
                servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Header;
