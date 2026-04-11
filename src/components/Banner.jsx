import { useState, useEffect, useRef } from "react";
import Background from "../assets/BannerBackground.png";
import Navbar from "./Navbar";

// Tambahkan prop noHeader
const Banner = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // hanya sekali load
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <>
      <div
        ref={ref}
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: isVisible
            ? `linear-gradient(rgba(23, 64, 56, 0.3), rgba(23, 64, 56, 0.4)), url(${Background})`
            : "none",
          backgroundAttachment: "fixed",
          backgroundColor: "#174038",
        }}
      >
        <div className="top-0 right-[10px] w-full p-4 z-10">
        <Navbar />
        </div>
        {/* Main Content Area */}
        <div className="absolute inset-0 flex items-center pointer-events-none w-full">
            <div className=" pl-3 md:pl-10 py-10 pointer-events-auto">
              {/* <div className="max-w-5xl pl-3 md:pl-10 py-10 pointer-events-auto"> */}
              <div className="mb-5 md:leading-tight">
                <h2 className="md:font-medium font-semibold font-manrope  text-white lg:text-[70px] sm:text-[40px] text-[30px]">
                  The first racquet sport hub <br /> for professional
                </h2>
              </div>

              <p className=" lg:text-[21px] text-lg sm:text-[16px] text-white font-medium opacity-90 max-w-2xl font-manrope">
                Racquet Connect is the premier inter-company padel league that
                transforms sports into meaningful professional connections
              </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default Banner;