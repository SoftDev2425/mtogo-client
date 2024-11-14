import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // remove it when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-5 right-5 p-3 rounded-full bg-white hover:bg-gray-50 duration-100 text-[#23AD6A] hover:text-white shadow-lg md:shadow-sm z-[9999]"
          onClick={scrollToTop}
          name="Scroll til toppen"
          aria-label="Scroll til toppen knap"
        >
          <IoIosArrowUp color="#FF8001" size={30}/>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
