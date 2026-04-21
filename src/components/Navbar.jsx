import { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const navItems = [
        "Tournament Overview",
        "League",
        "Rules",
        "Become a Sponsor",
    ];

    // Close menu saat resize ke desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Close menu saat klik di luar
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header
            ref={menuRef}
            className="fixed top-0 inset-x-0 z-50 overflow-x-hidden bg-white/80 backdrop-blur-md shadow-sm"
        >
            <div className="mx-auto flex items-center justify-between px-4 py-4 sm:px-6">
                
                {/* Logo */}
                <img src={Logo} alt="Logo" className="h-8 w-auto" />

                {/* Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="sm:hidden flex flex-col justify-center items-center w-10 h-10 gap-1"
                >
                    <span className={`block h-0.5 w-6 bg-black transition ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                    <span className={`block h-0.5 w-6 bg-black transition ${isOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block h-0.5 w-6 bg-black transition ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                </button>

                {/* Desktop */}
                <nav className="hidden sm:flex flex-1 justify-end items-center gap-6">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className="text-xs font-medium uppercase tracking-wider text-slate-700 hover:text-green-500 transition"
                        >
                            {item}
                        </a>
                    ))}

                    <a
                        href="#"
                        className="bg-[#174038] text-[#E1FFA0] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition"
                    >
                        Join Now
                    </a>
                </nav>
            </div>

            {/* Mobile Menu */}
            <div
                className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                } bg-white border-t`}
            >
                <div className="flex flex-col gap-2 px-4 py-4">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            onClick={() => setIsOpen(false)}
                            className="block w-full px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
                        >
                            {item}
                        </a>
                    ))}

                    <a
                        href="#"
                        onClick={() => setIsOpen(false)}
                        className="mt-2 block w-full text-center px-4 py-3 rounded-full bg-[#174038] text-[#E1FFA0] text-sm font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition"
                    >
                        Join Now
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Navbar;