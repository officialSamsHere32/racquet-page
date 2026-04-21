import Img1 from '../assets/image21.png';
import Img2 from '../assets/image19.png';
import Img3 from '../assets/image20.png';

function Testimoni() {
    const testimonials = [
        {
            id: 1,
            image: Img1,
            quote: "Racquet Connect transformed how I network. It’s not just a sport — it’s a business playground",
            author: "Anna Sarakov",
        },
        {
            id: 2,
            image: Img2,
            quote: "It's the most fun and natural networking I've ever experienced",
            author: "Luke Brad",
        },
        {
            id: 3,
            image: Img3,
            quote: "Our staff connected with others in the industry while having a blast on the court!",
            author: "Clara Shaye",
        },
    ];

    return (
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-6xl text-center">
                <p className="text-[11px] font-manrope text-[#333333] uppercase tracking-[0.28em]">
                    Testimonial
                </p>
                <h2 className="mt-4 text-3xl font-medium text-[#333333] sm:text-4xl">
                    What our players say
                </h2>
            </div>

            <div className="mx-auto mt-12 grid gap-8 px-2 sm:px-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((item) => (
                    <div key={item.id} className="rounded-3xl bg-[#0D2420] p-6 text-white shadow-xl shadow-black/10 transition-transform duration-300 hover:-translate-y-1">
                        <img src={item.image} alt={item.author} className="mx-auto mb-6 h-[250px] w-full rounded-3xl object-cover" />
                        <p className="text-base leading-8 text-white">
                            “{item.quote}”
                        </p>
                        <h3 className="mt-6 text-sm font-semibold text-[#9FA8A6]">
                            {item.author}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Testimoni;