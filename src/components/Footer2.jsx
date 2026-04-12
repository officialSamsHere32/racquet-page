import Logo from '../assets/logo.png';

function Footer2() {
    return (
        <footer className="bg-[#174038] text-white">
            <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 md:flex-row md:items-start md:justify-between">
                <div className="flex-shrink-0">
                    <img src={Logo} alt="Racquet Connect logo" className="h-[110px] w-auto object-contain" />
                </div>

                <div className="grid w-full gap-10 sm:grid-cols-3 md:max-w-3xl">
                    <div>
                        <h3 className="text-xl font-semibold">Sitemap</h3>
                        <ul className="mt-5 space-y-3 text-sm text-[#D9E4D2]">
                            <li>Tournament Overview</li>
                            <li>League</li>
                            <li>Rules</li>
                            <li>Become a Sponsor</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">Follow us</h3>
                        <ul className="mt-5 space-y-3 text-sm text-[#D9E4D2]">
                            <li>Instagram</li>
                            <li>Youtube</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">Get in touch</h3>
                        <div className="mt-5 space-y-3 text-sm text-[#D9E4D2]">
                            <p>Jl. Mawar no 25 Kemang</p>
                            <p>+62812345678</p>
                            <p>info@racquetconnect.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer2;