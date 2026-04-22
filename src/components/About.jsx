import { useEffect, useRef, useState } from "react";
import { cardRContent } from "../assets";
import Img1 from "../assets/BannerBackground.png";
import Img2 from "../assets/Img2.png";
import Img3 from "../assets/Img3.png";

const About = () => {
  const [data] = useState(cardRContent);

  return (
    <>
      <section
        id="about"
        className="bg-white w-full py-16 relative z-0"
      >
        <div
          className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10 max-w-6xl"
        >
          {/* Safari-compatible grid structure */}
          <div className="safari-grid">
            {/* Left column - ABOUT US */}
            <div className="safari-col-left">
              <div className="mt-12 flex items-start">
                <div className="text-black font-manrope text-sm tracking-wider whitespace-nowrap bg-act  rounded-full px-3 py-1">
                  ABOUT US
                </div>
              </div>
            </div>

            {/* Right column - Main content */}
            <div className="safari-col-right">
              <div className="safari-content">
                <div className="text-left mb-8 w-full">
                  {/* <div className=""> */}
                  <h2 className="font-manrope font-medium md:text-[42px] text-4xl  text-black mb-6">
                    What is Racquet Connect?
                  </h2>
                  {/* max-w-full */}
                  {/* max-w-full overflow-hidden break-words */}
                  <p className="font-manrope font-medium text-base sm:text-lg md:text-xl  lg:text-[21px] text-gray-600 mb-4  tracking-tight leading-7  ">
                    {/* <div></div> */}A new way to build team spirit, challenge
                    your competitors, and boost workplace morale while enjoying
                    the fastest-growing sport in Europe.
                  </p>
                  <p className="font-manrope font-medium text-base sm:text-lg md:text-xl lg:text-[21px] text-gray-600 mb-10 tracking-tight leading-7">
                    Our league is open to all businesses in Jakarta, from
                    startups to corporate giants.
                  </p>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Card grid with Safari compatibility */}
          <div className="safari-cards">
            {data.map((card) => (
              <div key={card.id}>
                <div className="safari-card rounded-lg overflow-hidden h-[360px] relative group">
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={card.image}
                      alt=""
                      className={`w-full h-full object-cover ${
                        card.objectPosition || ""
                      } transition-transform duration-300`}
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-50 transition-opacity" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white ">
                    <h3 className="text-2xl font-manrope mb-2">{card.nama}</h3>
                    <p className="text-sm font-manrope opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {card.textTransform}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default About;
