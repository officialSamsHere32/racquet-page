import { useState } from "react";

import Logo from "../assets/logo-RC.svg";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        "Tournament Overview",
        "League",
        "Rules",
        "Become a Sponsor",
    ];

    return (
        <header className="fixed top-0 right-0 left-0 z-20 w-full bg-white/80 backdrop-blur-sm shadow-sm">

            <div className="flex max-w-[2800px] items-center justify-between px-4 py-4 md:px-6">
                <img src={Logo} alt="Logo" className="md:h-8 h-5 w-auto rounded-md" />

                <button
                    type="button"
                    className="inline-flex items-center justify-between rounded-full border border-slate-300 bg-white p-2 text-slate-700 hover:bg-slate-50 md:hidden"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    <span className="text-xl font-bold">{isOpen ? "×" : "☰"}</span>
                </button>

                <nav className="hidden flex-1 items-center justify-end space-x-6 md:flex">
                    <div className="flex flex-wrap items-center gap-4">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href="#"
                                className="text-slate-800 text-xs font-medium uppercase tracking-[0.08em] transition duration-300 hover:text-green-500"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                    <a
                        href="#"
                        className="rounded-full bg-[#174038] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E1FFA0] transition duration-300 hover:bg-slate-900 hover:text-white"
                    >
                        Join Now
                    </a>
                </nav>
            </div>

            <div className={`${isOpen ? "block" : "hidden"} md:hidden border-t border-slate-200 bg-white/95 px-4 py-4`}>
                <div className="space-y-3">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="#"
                        className="block rounded-full bg-[#174038] px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.16em] text-[#E1FFA0] transition hover:bg-slate-900 hover:text-white"
                    >
                        Join Now
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
