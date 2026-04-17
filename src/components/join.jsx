import Img1 from '../assets/BannerBackground.png';
import Img2 from '../assets/Img2.png';
import Img3 from '../assets/Img4.png';
import vector from '../assets/Vector8.png';
import vector2 from '../assets/Vector7.png';

function Join() {
    const steps = [
        {
            id: 1,
            title: 'Register your company',
            description: 'Build meaningful professional relationships while enjoying competitive padel matches.',
            image: Img1,
        },
        {
            id: 2,
            title: 'Form your team',
            description: 'Gather your colleagues to compete in a fun and structured league experience.',
            image: Img2,
        },
        {
            id: 3,
            title: 'Join a league',
            description: 'Connect with other businesses and elevate your network through sport.',
            image: Img3,
        },
    ];

    return (
        <section className="bg-[#174038] px-4 py-16 sm:px-6 lg:px-10">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
                <div className="space-y-6">
                    <p className="text-[11px] font-manrope uppercase tracking-[0.24em] text-[#9FA8A6]">
                        How to join?
                    </p>
                    <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                        You’re only 3 steps away from expanding your network
                    </h2>
                    <img src={vector} alt="Vector accent" className="hidden sm:block w-44 opacity-70" />
                </div>

                <div className="space-y-8">
                    {steps.map((step) => (
                        <div key={step.id} className="rounded-[32px] border border-[#E1FFA0]/20 bg-white/5 p-6 shadow-lg shadow-black/10 sm:p-8">
                            <img src={step.image} alt={step.title} className="mb-6 h-auto w-full rounded-3xl object-cover" />

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E1FFA0] text-lg font-semibold text-[#E1FFA0]">
                                    {step.id}
                                </span>

                                <div>
                                    <h3 className="text-2xl font-semibold text-[#E1FFA0]">
                                        {step.title}
                                    </h3>
                                    <p className="mt-3 text-base leading-7 text-[#F3F7F1]">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <img src={vector2} alt="Connector line" className="mx-auto hidden w-36 opacity-60 sm:block" />
                </div>
            </div>
        </section>
    )
}

export default Join