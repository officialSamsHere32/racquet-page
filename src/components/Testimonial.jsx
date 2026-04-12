import Img1 from '../assets/image21.png';
import Img2 from '../assets/image19.png';
import Img3 from '../assets/image20.png';

function Testimoni() {
    return (
    <>
        <div className="items-center bg-[#FFFFFF] w-full mt-20 mb-20">
            <h1 className="text-[11px] font-manrope text-[#333333] font-normal text-center">TESTIMONIAL</h1>
            <h2 className="text-[31px] font-manrope font-medium text-[#333333] text-center">What our players say</h2>
        </div>
        <div className="w-full mb-20">
            <div className="flex items-center justify-center gap-10">
                <div className="bg-[#0D2420] rounded-2xl items-center">
                    <img src={Img1} alt="Player 1" className="rounded-2xl w-[350px] h-[250px] object-cover mx-auto" />
                    <p className="text-[17px] font-manrope text-[#FFFFFF] pl-5 text-left mt-4">"Racquet Connect transformed <br /> how I network. It’s not just a sport<br />—it’s a business playground"</p>
                    <h3 className="text-[12px] font-manrope font-semibold pl-5 pb-5 text-[#9FA8A6] text-left mt-2">Anna Sarakov</h3>
                </div>
                <div className='sm:mt-32'>
                    <div className="bg-[#0D2420] rounded-2xl items-center">
                        <img src={Img2} alt="Player 1" className="rounded-2xl w-[350px] h-[250px] object-cover mx-auto mb-7" />
                        <p className="text-[17px] font-manrope text-[#FFFFFF] pl-5 text-left mt-4">“It's the most fun and natural <br /> networking I've ever experienced”</p>
                        <h3 className="text-[12px] font-manrope font-semibold pl-5 pt-6 pb-5 text-[#9FA8A6] text-left mt-2">Luke Brad</h3>
                    </div>
                </div>
                <div className="bg-[#0D2420] rounded-2xl items-center">
                    <img src={Img3} alt="Player 1" className="rounded-2xl w-[350px] h-[250px] object-cover mx-auto" />
                    <p className="text-[17px] font-manrope text-[#FFFFFF] pl-5 text-left mt-4">“Our staff connected with others<br /> in the industry while having a blast <br/> on the court!"</p>
                    <h3 className="text-[12px] font-manrope font-semibold pl-5 pb-5 text-[#9FA8A6] text-left mt-2">Clara Shaye</h3>
                </div>
            </div>
        </div>
        </>
    )
}

export default Testimoni;