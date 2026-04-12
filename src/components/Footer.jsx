function Footer() {
    return (
        <div className="bg-[#174038] h-[400px] w-full flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center gap-6">
                <p className="text-[#FFFFFF] text-[40px] font-medium text-center font-manrope">Ready to <br/>
                    expand your network?
                </p>
                <button className="text-[#174038] bg-[#E1FFA0] px-4 py-2 font-manrope rounded-full text-[10px] hover:text-black transition-colors duration-300">
                    Join Now
                </button>
            </div>
        </div>
    )
}

export default Footer;