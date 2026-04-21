import Img1 from '../assets/BannerBackground.png';
import Img2 from '../assets/Img2.png';
import Img3 from '../assets/Img4.png';
import vector from '../assets/Vector8.png';
import vector2 from '../assets/Vector7.png';
import { useEffect, useRef, useState } from 'react';


function Join() {
    return (
        <div className="sm:grid sm:grid-rows-2 sm:grid-cols-2 flex flex-col bg-[#174038] justify-center h-full">
            <div className="sm:mr-auto mt-5 sm:px-6 lg:pl-8 pt-10 h-full">
                <h1 className="text-[11px] font-manrope text-[#9FA8A6] text-center font-medium sm:text-left">HOW TO JOIN?</h1>
                <h2 className="sm:text-[40px] font-semibold text-center sm:text-left text-[#FFFFFF]">You’re only 3 steps away<br/>
                    from expanding<br /> 
                    your network
                </h2>
                <img src={vector} className='sm:ml-[200px] sm:z-0 w-0 h-0 sm:w-[455px] sm:h-[547px]'></img>
            </div>
            <div className="mx-auto mt-5 sm:px-6 lg:pr-8 pt-10 h-full">
                <img src={Img1} alt="Logo" className="relative rounded-lg z-10 sm:h-[400px] mx-auto h-[300px] w-[300px] sm:w-[395px] object-cover"/>
                <div className="flex mt-5">
                    <h1 className='sm:text-[20px] text-[15px] sm:z-10 mt-2 mr-3 font-normal border border-spacing-10 sm:h-[31px] h-[25px] w-[25px] border-[#E1FFA0] rounded-full sm:w-[31px] text-[#E1FFA0] text-center'>1</h1>
                    <div>
                        <h1 className='sm:text-[30px] text-[20px] font-normal text-[#E1FFA0] w-[270px] text-justify sm:text-left'>Register your company</h1>
                        <p className='sm:text-[16px] text-[10px] font-manrope sm:text-left text-justify font-normal text-[#FFFFFF] mt-2 mb-3'>Build meaningful professional relationships 
                            <br/>while enjoying competitive padel matches.
                        </p>
                    </div>
                </div>
            </div> 
            <div className="sm:relative sm:-top-[350px] mx-auto mt-5 sm:px-6 lg:pr-8 sm:h-full">
                <img src={Img2} alt="Logo" className="relative rounded-lg z-10 sm:h-[400px] mx-auto h-[300px] w-[300px] sm:w-[395px] object-cover"/>
                <img src={vector2} alt="Connector line" className="sm:absolute sm:right-[-350px] sm:top-[180px] sm:h-[541px] sm:w-[450px] w-0 h-0 sm:z-0 sm:pointer-events-none" />
                <div className="flex mt-5 relative z-10">
                    <h1 className='sm:text-[20px] text-[15px] mt-2 mr-3 font-normal border border-spacing-10 sm:h-[31px] h-[25px] w-[25px] border-[#E1FFA0] rounded-full sm:w-[31px] text-[#E1FFA0] text-center'>2</h1>
                    <div>
                        <h1 className='sm:text-[30px] text-[20px] font-normal text-[#E1FFA0] text-left'>Form your team</h1>
                        <p className='sm:text-[16px] text-[10px] font-manrope sm:text-left text-center font-normal text-[#FFFFFF] mt-2'>Build meaningful professional relationships 
                            <br/>while enjoying competitive padel matches.
                        </p>
                    </div>
                </div>
            </div>
            <div className='mx-auto sm:mt-36 mt-5 sm:px-6 lg:pr-8 h-full'>
                <img src={Img3} alt="Logo" className="relative rounded-lg z-10 sm:h-[400px] mx-auto h-[300px] w-[300px] sm:w-[395px] object-cover"/>
                <div className="flex mt-5">
                    <h1 className='sm:text-[20px] text-[15px] mt-2 mr-3 font-normal border border-spacing-10 sm:h-[31px] h-[25px] w-[25px] border-[#E1FFA0] rounded-full sm:w-[31px] text-[#E1FFA0] text-center'>3</h1>
                    <div>
                        <h1 className='sm:text-[30px] text-[20px] font-normal text-[#E1FFA0] text-left'>Join a league</h1>
                        <p className='sm:text-[16px] text-[10px] font-manrope sm:text-left text-center font-normal text-[#FFFFFF] mt-2'>Build meaningful professional relationships 
                            <br/>while enjoying competitive padel matches.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Join