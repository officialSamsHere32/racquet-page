function Questions() {
    const faqs = [
        "What is Racquet Connect?",
        "Who can join the tournaments and leagues?",
        "How do I register for a tournament?",
        "How is networking facilitated during events?",
        "What do winners receive?",
    ];

    return (
        <section className="bg-[#F5F5F5] px-4 py-16 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-lg shadow-slate-200 sm:p-10">
                <h1 className="text-3xl font-light text-[#333333] sm:text-4xl">
                    Frequently asked question
                </h1>

                <div className="mt-8 grid gap-4">
                    {faqs.map((question, index) => (
                        <div key={index} className="flex flex-col gap-4 rounded-3xl border border-[#D4D4D4] bg-[#F9F9F9] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                            <h2 className="text-base font-light text-[#333333] sm:text-lg">
                                {question}
                            </h2>
                            <button className="h-10 w-10 rounded-full bg-[#174038] text-[22px] font-bold text-[#E1FFA0] transition hover:bg-slate-900">
                                +
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Questions;