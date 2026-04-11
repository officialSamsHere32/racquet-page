import { useEffect, useRef, useState } from 'react';
import Img1 from '../assets/BannerBackground.png';
import Img2 from '../assets/Img2.png';
import Img3 from '../assets/Img3.png';



const About = () => {
  const ref = useRef(null);
  const cards = [
    { src: Img1, alt: 'Networking through sport', text: 'Networking through sport' },
    { src: Img2, alt: 'Inter-company leagues', text: 'Inter-company leagues' },
    { src: Img3, alt: 'Competitive tournaments', text: 'Competitive tournaments' },
  ];
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
    <div className="grid grid-cols-2 bg-[#FFFFFF] w-full h-screen justify-center">
      <div className=" mr-auto sm:px-6 lg:pl-8 pt-10 h-full">
        <h1 className="text-left font-manrope font-semibold text-[#333333] text-[10px] mb-4">ABOUT US</h1></div>
      <div className=" mx-auto sm:px-6 lg:pr-8 pt-10 h-full">
        <h1 className="text-left font-manrope font-semibold text-[#333333] text-[30px]">What is Racquet Connect?</h1>
        <p className="text-left font-manrope text-[#333333] text-[16px] mt-4 max-w-lg">A new way to build team spirit, challenge your competitors, and boost workplace morale while enjoying the fastest-growing sport in Europe.</p>
        <p className="text-left font-manrope text-[#333333] text-[16px] mt-4 max-w-lg">Our league is open to all businesses in Jakarta, from startups to corporate giants.</p>
      </div>
      <div ref={ref} className="col-span-2 flex flex-row flex-wrap gap-10 items-center justify-center sm:px-6 lg:pl-8 pt-10 h-full">
        {cards.map((card, index) => (
          <div key={index} className="relative w-[350px] h-[250px] overflow-hidden rounded-2xl shadow-sm">
            <img
              src={card.src}
              alt={card.alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-colors duration-300" />
            <p className="absolute inset-x-4 bottom-4 text-left font-manrope text-white text-[16px] leading-6">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default About