function Footer() {
    return (
        <div className="bg-[#174038] w-full px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
                <p className="text-3xl font-medium text-white sm:text-4xl md:text-5xl font-manrope">
                    Ready to expand your network?
                </p>
                <button className="rounded-full bg-[#E1FFA0] px-6 py-3 text-[10px] font-manrope font-semibold uppercase tracking-[0.2em] text-[#174038] transition-colors duration-300 hover:bg-slate-200 hover:text-black">
                    Join Now
                </button>
            </div>
        </div>
    )
}

export default Footer;