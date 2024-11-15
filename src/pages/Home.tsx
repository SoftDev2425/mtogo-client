import { SiIfood } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { CiLocationOn } from "react-icons/ci";

const Home = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState<any | null>(null);
  const suggestionsRef = useRef<HTMLDivElement | null>(null);
  const addressRef = useRef<string>("");

  const handleAddressSearch = async (text: string) => {
    if (text.trim() === "") {
      setSuggestions([]);
      return;
    }

    try {
      setLoading(true);
      addressRef.current = text.trim();
      const response = await axios.get("https://dawa.aws.dk/adresser/autocomplete", {
        params: { q: text, per_side: 10 },
        headers: { "Accept-Encoding": "gzip, deflate" },
      });

      setSuggestions(response.data);
      setActiveSuggestionIndex(0); // Reset to the first suggestion
      setLoading(false);
    } catch (error) {
      console.error("Error fetching address suggestions:", error);
      setLoading(false);
    }
  };

  const handleAddressSelection = (address: any) => {
    setSelectedAddress(address);
    addressRef.current = address.tekst;
    setSuggestions([]);
    setIsInputFocused(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (suggestions.length > 0) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveSuggestionIndex((prevIndex) => Math.min(prevIndex + 1, suggestions.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveSuggestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        handleAddressSelection(suggestions[activeSuggestionIndex]);
      }
    }
  };

  useEffect(() => {
    // Scroll the active suggestion into view
    if (suggestionsRef.current) {
      if (activeSuggestionIndex === 0) {
        // Scroll to the top when the first suggestion is active
        suggestionsRef.current.scrollTop = 0;
      } else if (activeSuggestionIndex === suggestions.length - 1) {
        // Scroll to the bottom when the last suggestion is active
        suggestionsRef.current.scrollTop = suggestionsRef.current.scrollHeight;
      } else {
        // Scroll the active suggestion into view
        const activeElement = document.querySelector(`.suggestion-${activeSuggestionIndex}`);
        if (activeElement) {
          activeElement.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
      }
    }
  }, [activeSuggestionIndex, suggestions.length]);

  const handleBlur = () => {
    setIsInputFocused(false);
    setSuggestions([]);
  };

  return (
    <div
      className="h-[650px]"
      style={{
        background: "linear-gradient(100deg, #F5F3F1 55%, #FF8001 45%)",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px inset, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
      }}
      onClick={handleBlur}
    >
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-between p-6">
        <div className="flex-1 flex flex-col items-start justify-center pr-4 md:pr-8">
          <h1 className="text-4xl font-bold text-[#333] mb-2">Order food and more</h1>
          <h2 className="text-xl text-[#666] mb-4">Restaurants delivering near you</h2>
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Full address"
              className="h-[56px] rounded-full w-full px-4 pr-[100px] placeholder:font-light border-[1px] border-gray-300 bg-white focus:bg-blue-50 hover:bg-blue-50"
              onChange={(e) => handleAddressSearch(e.target.value)}
              onFocus={() => setIsInputFocused(true)}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              value={addressRef.current}
            />
            {!isInputFocused && (
              <Button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-[48px] bg-[#FF8001] text-white font-bold rounded-full px-4"
                onClick={() => setIsInputFocused(true)}
              >
                Search
              </Button>
            )}
            {!loading && suggestions.length > 0 && (
              <div
                className="absolute w-full mt-2 bg-white shadow-md rounded-xl border p-2 h-[300px] overflow-y-auto"
                ref={suggestionsRef}
              >
                <div className="p-2 text-xl font-semibold">Recent Search</div>
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => handleAddressSelection(suggestion)}
                    className={`cursor-pointer px-2 py-4 flex items-center gap-2 suggestion-${index} ${
                      index === activeSuggestionIndex ? "bg-gray-100" : ""
                    }`}
                  >
                    <CiLocationOn />
                    <p>{suggestion.tekst}</p>
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

        <div className="flex-1 flex flex-col gap-2 items-center justify-center">
          <p className="text-white text-center mb-4 drop-shadow-lg">
            <span
              className="text-5xl font-bold block"
              style={{ transform: "rotate(-10deg) translateY(-40px) translateX(103px)", display: "inline-block" }}
            >
              DID
            </span>
            <span className="text-6xl font-bold block" style={{ transform: "rotate(2deg)", display: "inline-block" }}>
              SOMEBODY
            </span>
            <span
              className="text-5xl font-bold block"
              style={{ transform: "rotate(10deg) translateY(60px) translateX(-70px)", display: "inline-block" }}
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
