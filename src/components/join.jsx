import Img1 from '../assets/BannerBackground.png';
import Img2 from '../assets/Img2.png';
import Img3 from '../assets/Img4.png';
import vector from '../assets/Vector8.png';
import vector2 from '../assets/Vector7.png';
import { useEffect, useRef, useState } from 'react';


function Join() {
    return (
        <div className="lg:grid lg:grid-rows-2 lg:grid-cols-2 flex flex-col bg-[#174038] justify-center h-full">
            <div className="lg:mr-auto mt-5 lg:px-6 lg:pl-8 pt-10 h-full">
                <h1 className="text-[11px] font-manrope text-[#9FA8A6] text-center font-medium lg:text-left">HOW TO JOIN?</h1>
                <h2 className="lg:text-[40px] font-semibold text-center lg:text-left text-[#FFFFFF]">You’re only 3 steps away<br/>
                    from expanding<br /> 
                    your network
                </h2>
                <img src={vector} className='lg:ml-[250px] lg:z-0 w-0 h-0 lg:w-[455px] lg:h-[547px]'></img>
            </div>
            <div className="mx-auto mt-5 lg:px-6 lg:pr-8 pt-10 h-full">
                <img src={Img1} alt="Logo" className="relative rounded-lg z-10 lg:h-[400px] mx-auto h-[300px] sm:w-[540px] w-[300px] lg:w-[395px] object-cover"/>
                <div className="flex flex-col lg:flex-row lg:items-start items-center mt-5">
                    <h1 className='lg:text-[20px] text-[30px] lg:z-10 mt-2 lg:mr-3 mr-0 font-normal border border-spacing-10 lg:h-[31px] h-[50px] w-[50px] border-[#E1FFA0] rounded-full lg:w-[31px] text-[#E1FFA0] text-center'>1</h1>
                    <div className='lg:text-center text-center'>
                        <h1 className='lg:text-[26px] md:text-[25px] text-[20px] font-normal text-[#E1FFA0] text-center lg:text-center'>Register your company</h1>
                        <p className='lg:text-[16px] text-[10px] font-manrope lg:text-center text-center font-normal text-[#FFFFFF] mt-2 mb-3'>Build meaningful professional relationships 
                            <br/>while enjoying competitive padel matches.
                        </p>
                    </div>
                </div>
            </div> 
            <div className="lg:relative lg:-top-[350px] mx-auto mt-5 lg:px-6 lg:pr-8 lg:h-full">
                <img src={Img2} alt="Logo" className="relative rounded-lg z-10 lg:h-[400px] mx-auto h-[300px] sm:w-[540px] w-[300px] lg:w-[395px] object-cover"/>
                <img src={vector2} alt="Connector line" className="lg:absolute lg:right-[-350px] lg:top-[180px] lg:h-[541px] lg:w-[450px] w-0 h-0 lg:z-0 lg:pointer-events-none" />
                <div className="flex flex-col lg:flex-row lg:items-start items-center mt-5">
                    <h1 className='lg:text-[20px] text-[30px] lg:z-10 mt-2 lg:mr-3 mr-0 font-normal border border-spacing-10 lg:h-[31px] h-[50px] w-[50px] border-[#E1FFA0] rounded-full lg:w-[31px] text-[#E1FFA0] text-center'>2</h1>
                    <div className='lg:text-center text-center'>
                        <h1 className='lg:text-[26px] md:text-[25px] text-[20px] font-normal text-[#E1FFA0] text-center lg:text-center'>Form your team</h1>
                        <p className='lg:text-[16px] md:text-[14px] text-[10px] font-manrope lg:text-center text-center font-normal text-[#FFFFFF] mt-2 mb-3'>Build meaningful professional relationships 
                            <br/>while enjoying competitive padel matches.
                        </p>
                    </div>
                </div>
            </div>
            <div className='mx-auto lg:mt-36 mt-5 lg:px-6 lg:pr-8 h-full'>
                <img src={Img3} alt="Logo" className="relative rounded-lg z-10 lg:h-[400px] mx-auto h-[300px] sm:w-[540px] w-[300px] lg:w-[395px] object-cover"/>
                <div className="flex flex-col lg:flex-row lg:items-start items-center mt-5">
                    <h1 className='lg:text-[20px] text-[30px] mt-2 lg:mr-3 mr-0 font-normal border border-spacing-10 lg:h-[31px] h-[50px] w-[50px] border-[#E1FFA0] rounded-full lg:w-[31px] text-[#E1FFA0] text-center'>3</h1>
                    <div className='lg:text-center text-center'>
                        <h1 className='lg:text-[30px] md:text-[25px] text-[20px] font-normal text-[#E1FFA0] text-center lg:text-center'>Join a league</h1>
                        <p className='lg:text-[16px] md:text-[14px] text-[10px] font-manrope pb-10 lg:text-center text-center font-normal text-[#FFFFFF] mt-2'>Build meaningful professional relationships 
                            <br/>while enjoying competitive padel matches.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Join