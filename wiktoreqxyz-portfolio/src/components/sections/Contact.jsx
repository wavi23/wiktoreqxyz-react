import { RevealOnScroll } from "../RevealOnScroll"

export const Contact = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative m-auto px-4 py-12 md:py-24" id="contact">
            <RevealOnScroll>
                <div className="w-full max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent text-center">Kontakt</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        <div className="bg-gradient-to-r from-emerald-500 to-cyan-600 p-6 md:p-8 rounded-xl shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 cursor-pointer group overflow-hidden relative">
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
                            <a 
                                href="https://discord.com/users/1178347491507318804" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="relative z-10 h-full flex flex-col justify-between"
                            >
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Discord</h3>
                                    <p className="text-sm md:text-base">
                                        Kliknij tutaj, aby przejść do mojego profilu. Możesz mnie również dodać do znajomych przez aplikację Discord.
                                    </p>
                                </div>
                                <div className="mt-4 md:mt-6">
                                    <p className="font-mono bg-black/20 px-3 py-2 rounded-md inline-block text-sm md:text-base">
                                        _wiktoreq_12
                                    </p>
                                </div>
                            </a>
                        </div>

                        <div className="bg-gradient-to-r from-cyan-500 to-emerald-600 p-6 md:p-8 rounded-xl shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 overflow-hidden relative">
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Email</h3>
                                    <p className="text-sm md:text-base">
                                        Możesz również skontaktować się ze mną przez email. Odpowiadam zwykle w ciągu 24 godzin.
                                    </p>
                                </div>
                                <div className="mt-4 md:mt-6">
                                    <a 
                                        href="wiktoreq12@op.pl" 
                                        className="font-mono bg-black/20 px-3 py-2 rounded-md inline-block text-sm md:text-base hover:bg-black/30 transition-colors duration-200"
                                    >
                                        wiktoreq12@op.pl
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}