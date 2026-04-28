import { Logo, Logo2, Logo3, Logo4, Logo5 } from "../assets";

const Hero = () => {
  const logos = [Logo4, Logo2, Logo5, Logo, Logo3];

  return (
    <section className="bg-[#0D2420] w-full py-10 sm:py-14">
      <div className="flex flex-col w-full items-center">
        <h1 className="text-center text-[#FFFFFF] font-manrope font-semibold text-[24px]">
          As featured in
        </h1>

        <div className="mt-8 w-full overflow-hidden">

          <div className="flex flex-wrap w-full justify-center md:gap-36 sm:gap-12 gap-5 sm:px-6">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Logo"
                className="h-12 w-auto max-w-[120px] object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
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
