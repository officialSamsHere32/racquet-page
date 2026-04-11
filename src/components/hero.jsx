import Logo from '../assets/Presslogo.svg'
import Logo2 from '../assets/Presslogo(1).svg'
import Logo3 from '../assets/Presslogo(2).svg'
import Logo4 from '../assets/Presslogo(3).svg'
import Logo5 from '../assets/Presslogo(4).svg'



function Hero() {
  return (
    <>
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
    </>
    )
}

export default Hero