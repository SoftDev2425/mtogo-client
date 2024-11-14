import { SiIfood } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import axios from "axios";
import { CiLocationOn } from "react-icons/ci";

const Home = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<any[]>([]); // Adjust the type accordingly
  const [selectedAddress, setSelectedAddress] = useState<any | null>(null); // Selected address
  const addressRef = useRef<string>("");

  const handleAddressSearch = async (text: string) => {
    if (text.trim() === "") {
      setSuggestions([]); // Clear suggestions if the input is empty
      return;
    }

    try {
      setLoading(true);
      addressRef.current = text.trim();

      // Call Dawa API
      const response = await axios.get("https://dawa.aws.dk/adresser/autocomplete", {
        params: {
          q: text,
          per_side: 5, // Limit to 10 suggestions for performance
        },
        headers: {
          "Accept-Encoding": "gzip, deflate",
        },
      });
      setSuggestions(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching address suggestions:", error);
      setLoading(false);
    }
  };

  const handleAddressSelection = (address: any) => {
    setSelectedAddress(address);
    console.log("Selected Address:", address);
    addressRef.current = address.tekst;
    // You can pass this address to a global state or perform further actions
    // cache the selected address for future use
    // clear the suggestions
    setSuggestions([]);
  };

  return (
    <div
      className="h-[650px]"
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
              className="h-[56px] rounded-full w-full px-4 pr-[100px] placeholder:font-light border-[1px] border-gray-300 bg-white focus:bg-blue-50 hover:bg-blue-50"
              onChange={(e) => handleAddressSearch(e.target.value)} // Update search on input change
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
            {/* Suggestions list */}
            {!loading && suggestions.length > 0 && (
              <div className="absolute w-full mt-2 bg-white shadow-md rounded-xl border p-2">
                <div className="p-2 text-xl font-semibold">Recent Search</div>
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => handleAddressSelection(suggestion)}
                    className="cursor-pointer px-2 py-4 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <CiLocationOn />
                    <p>{suggestion.tekst}</p> {/* You can adjust the suggestion display based on API response */}
                  </div>
                ))}
              </div>
            )}
            {loading && (
              <div className="absolute w-full mt-2 bg-white shadow-md rounded-lg border">
                <p className="p-2 text-gray-500">Loading...</p>
              </div>
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
