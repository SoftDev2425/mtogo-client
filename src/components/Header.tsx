import { SiIfood } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { TfiHelpAlt } from "react-icons/tfi";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { LuHeartHandshake } from "react-icons/lu";
import { useState } from "react";
import { IoMdRestaurant } from "react-icons/io";

const Header = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="w-full h-[70px] flex items-center justify-between px-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <SiIfood size={30} color="#FF8001" />
        <Link to="/" className="text-2xl italic font-semibold text-[#FF8001] cursor-pointer">
          MTOGO
        </Link>
      </div>
      <div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger>
            <div className="hover:bg-gray-50 p-3 hover:rounded-full cursor-pointer">
              <RxHamburgerMenu className="" size={26} />
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">My account</DialogTitle>

              {/* sign in and create account buttons */}
              <div className="w-full flex items-center justify-around">
                <Link
                  to="/signin"
                  onClick={() => setIsDialogOpen(false)}
                  className="text-lg font-semibold text-gray-800 hover:text-gray-900 py-[5px] px-[16px] bg-[#f5f3f1] hover:bg-gray-200 w-[268px] h-[40px] text-center rounded-full"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="text-lg font-semibold py-[5px] px-[16px] bg-[#FF8001] w-[268px] h-[40px] text-center rounded-full text-white"
                >
                  Create account
                </Link>
              </div>
            </DialogHeader>

            <div>
              {/* FOR RESTAURANTS */}
              <div className="flex gap-2 items-center border-gray-200 py-3 hover:bg-gray-50 px-4 cursor-pointer my-2">
                <IoMdRestaurant />
                <p className="text-md font-light">For restaurants</p>
              </div>

              {/* NEED HELP? */}
              <div className="flex gap-2 items-center border-gray-200 py-3 hover:bg-gray-50 px-4 cursor-pointer my-2">
                <TfiHelpAlt />
                <p className="text-md font-light">Need help?</p>
              </div>

              <hr className="border-gray-200" />

              {/* BECOME A DELIVERY AGENT */}
              <div className="flex gap-2 items-center  border-gray-200 py-3 hover:bg-gray-50 px-4 cursor-pointer my-2">
                <MdOutlineDeliveryDining />
                <p className="text-md font-light">Become a delivery agent</p>
              </div>

              {/* PARTNER WITH US */}
              <div className="flex gap-2 items-center border-gray-200 py-3 hover:bg-gray-50 px-4 cursor-pointer my-2">
                <LuHeartHandshake />
                <p className="text-md font-light">Partner with us</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Header;
