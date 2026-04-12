import { Logo, Logo2, Logo3, Logo4, Logo5 } from "../assets";


import Marquee from "react-fast-marquee";

const Hero = () => {
  const logos = [Logo, Logo2, Logo3, Logo4, Logo5];

  return (
    <>
      <div className="bg-[#0D2420] w-full h-[260px]">
        <h1 className="text-center text-[#FFFFFF] font-manrope font-semibold text-[24px] pt-10">
          As featured in
        </h1>

        {/* PERHATIKAN PENGGUNAAN METHOD MAP */}
        <div className="w-full max-w-full overflow-hidden relative">
          {/* <Marquee */}
            // speed={40}
            // gradientWidth={0}
            // pauseOnHover={true}
            // className="py-2"
          {/* > */}
            <div className="flex space-x-20 mt-8 w-full">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="Logo"
                  className="h-12 w-full"
                />
              ))}
            </div>
          {/* </Marquee> */}
        </div>
      </div>
    </>
  );
};

export default Hero;

/* 
 <div className="bg-[#0D2420] w-full h-[220px]">
            <h1 className="text-center text-[#FFFFFF] font-manrope font-semibold text-[24px] pt-10">As featured in</h1>
            <div className="flex items-center justify-center space-x-20 mt-8 w-full">
                <img src={Logo4} alt="Logo" className="h-6" />
                <img src={Logo2} alt="Logo" className="h-6" />
                <img src={Logo} alt="Logo" className="h-6" />
                <img src={Logo5} alt="Logo" className="h-6" />
                <img src={Logo3} alt="Logo" className="h-6" />
            </div>
        </div>
*/
