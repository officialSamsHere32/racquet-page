import Img1 from '../assets/BannerBackground.png';
import Img2 from '../assets/Img2.png';
import Img3 from '../assets/Img4.png';
import vector from '../assets/Vector8.png';
import vector2 from '../assets/Vector7.png';
import { useEffect, useRef, useState } from 'react';


function Join() {
    return (
        <div className="grid grid-rows-2 grid-cols-2 bg-[#174038] justify-center h-full">
            <div className="mr-auto mt-5 sm:px-6 lg:pl-8 pt-10 h-full">
                <h1 className="text-[11px] font-manrope text-[#9FA8A6] font-medium text-left">HOW TO JOIN?</h1>
                <h2 className="text-[40px] font-semibold text-[#FFFFFF]">You’re only 3 steps away<br/>
                    from expanding<br /> 
                    your network
                </h2>
                <img src={vector} className='ml-[200px] z-0'></img>
            </div>
            <div className="mx-auto mt-5 sm:px-6 lg:pr-8 pt-10 h-full">
                <img src={Img1} alt="Logo" className="rounded-lg h-[400px] w-[395px] object-cover"/>
                <div className="flex mt-5">
                    <h1 className='text-[20px] z-10 mt-2 mr-3 font-normal border border-spacing-10 h-[31px] border-[#E1FFA0] rounded-full w-[31px] text-[#E1FFA0] text-center'>1</h1>
                    <div>
                        <h1 className='text-[30px] font-normal text-[#E1FFA0] text-left'>Register your company</h1>
                        <p className='text-[16px] font-manrope text-left font-normal text-[#FFFFFF] mt-2'>Build meaningful professional relationships 
                            <br/>while enjoying competitive padel matches.
                        </p>
                        {/* <img src={vector2} className='mr-[200px] mt-5 z-0'></img>  */}
                    </div>
                </div>
            </div> 
            <div className="relative -top-[350px] mx-auto sm:px-6 lg:pr-8 h-full">
                <img src={Img2} alt="Logo" className="relative z-10 rounded-lg h-[400px] w-[395px] object-cover"/>
                <img src={vector2} alt="Connector line" className="absolute right-[-300px] top-[180px] h-auto z-0 pointer-events-none" />
                <div className="flex mt-5 relative z-10">
                    <h1 className='text-[20px] mt-2 mr-3 font-normal border border-spacing-10 h-[31px] border-[#E1FFA0] rounded-full w-[31px] text-[#E1FFA0] text-center'>2</h1>
                    <div>
                        <h1 className='text-[30px] font-normal text-[#E1FFA0] text-left'>Form your team</h1>
                        <p className='text-[16px] font-manrope text-left font-normal text-[#FFFFFF] mt-2'>Build meaningful professional relationships 
                            <br/>while enjoying competitive padel matches.
                        </p>
                    </div>
                </div>
            </div>
            <div className='mx-auto mt-36 sm:px-6 lg:pr-8 h-full'>
                <img src={Img3} alt="Logo" className="rounded-lg z-10 relative h-[400px] w-[395px] object-cover"/>
                <div className="flex mt-5">
                    <h1 className='text-[20px] z-10 mt-2 mr-3 font-normal border border-spacing-10 h-[31px] border-[#E1FFA0] rounded-full w-[31px] text-[#E1FFA0] text-center'>3</h1>
                    <div>
                        <h1 className='text-[30px] font-normal text-[#E1FFA0] text-left'>Join a league</h1>
                        <p className='text-[16px] font-manrope text-left font-normal text-[#FFFFFF] mt-2'>Build meaningful professional relationships 
                            <br/>while enjoying competitive padel matches.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Join