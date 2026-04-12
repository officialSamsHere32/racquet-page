import Logo from "../assets/logo.png";

function Navbar() {
    const navItems = [
        "Tournament Overview", 
        "League", 
        "Rules", 
        "Become a Sponsor", 
    ];
    const navItems2 = [
        "Join Now"
    ]   


    return (
        <>
            <div className="flex items-center fixed top-0 right-0 w-full p-4 z-10">
                <img src={Logo} alt="Logo" className="h-6 ml-4 mr-40 bg-slate-500 rounded-md" />
                <div className="w-[50%] h-10 bg-[#ffffffb2] flex items-center justify-between px-10 rounded-full ml-auto">
                    <div className="flex space-x-12 items-center">
                        {navItems.map((item, index) => (
                            <a key={index} href="#" className="text-[#333333] font-manrope text-center text-[10px] hover:text-green-400 transition-colors duration-300">
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className="flex space-x-4">
                        {navItems2.map((item, index) => (
                            <a key={index} href="#" className="text-[#E1FFA0] font-manrope bg-[#174038] px-4 py-2 rounded-full text-center text-[10px] hover:text-black transition-colors duration-300">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Navbar