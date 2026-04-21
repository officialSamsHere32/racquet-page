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
    <div
      ref={ref}
      className="relative min-h-screen w-full bg-[#174038] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: isVisible
          ? `linear-gradient(rgba(23, 64, 56, 0.3), rgba(23, 64, 56, 0.4)), url(${Background})`
          : "none",
        backgroundAttachment: "fixed",
        width: "100%"
      }}
    >
      <Navbar />

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto flex w-full max-w-8xl flex-col gap-6 px-4 py-24 sm:px-6 md:px-10 lg:px-16">
          <div className="pointer-events-auto">
            <h2 className="font-manrope text-white font-semibold leading-tight sm:text-[40px] md:text-[52px] lg:text-[70px]">
              The first racquet sport hub
              <span className="block">for professional</span>
            </h2>
          </div>

          <p className="max-w-3xl text-lg font-medium text-white opacity-90 sm:text-base md:text-lg">
            Racquet Connect is the premier inter-company padel league that transforms sports into meaningful professional connections.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;