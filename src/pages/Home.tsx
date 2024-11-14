import { SiIfood } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Home = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <div
      className="h-[650px] "
      style={{
        background: "linear-gradient(100deg, #F5F3F1 55%, #FF8001 45%)",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px inset, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
      }}
    >
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-between p-6">
        {/* LEFT SIDE WITH SEARCH FOR RESTAURANTS */}
        <div className="flex-1 flex flex-col items-start justify-center pr-4 md:pr-8">
          <h1 className="text-4xl font-bold text-[#333] mb-2">Order food and more</h1>
          <h2 className="text-xl text-[#666] mb-4">Restaurants delivering near you</h2>
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Full address"
              className="h-[56px] rounded-full w-full px-4 pr-[100px] placeholder:font-light border-[1px] border-gray-300"
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
            />
            {!isInputFocused && (
              <Button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-[48px] bg-[#FF8001] text-white font-bold rounded-full px-4"
                onClick={() => setIsInputFocused(true)}
              >
                Search
              </Button>
            )}
          </div>
        </div>

        {/* RIGHT SIDE WITH AD */}
        <div className="flex-1 flex flex-col gap-2 items-center justify-center">
          <p className="text-white text-center mb-4 drop-shadow-lg">
            <span
              className="text-5xl font-bold block"
              style={{
                transform: "rotate(-10deg) translateY(-40px) translateX(103px)",
                display: "inline-block",
              }}
            >
              DID
            </span>
            <span
              className="text-6xl font-bold block"
              style={{
                transform: "rotate(2deg)",
                display: "inline-block",
              }}
            >
              SOMEBODY
            </span>
            <span
              className="text-5xl font-bold block"
              style={{
                transform: "rotate(10deg) translateY(60px) translateX(-70px)",
                display: "inline-block",
              }}
            >
              SAY
            </span>
          </p>

          <img src={"/falafel_salad_home.png"} alt="food" className="rounded-lg w-[300px] lg:w-[500px] xl:w-[600px]" />

          <div className="flex items-center gap-2">
            <SiIfood size={40} color="white" />
            <p className="text-white text-5xl font-semibold italic">MTOGO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
