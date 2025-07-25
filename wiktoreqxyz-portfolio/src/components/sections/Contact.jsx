import { RevealOnScroll } from "../RevealOnScroll"
import { FiMail, FiMessageSquare, FiArrowRight } from "react-icons/fi"

export const Contact = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative px-4 py-20 md:py-32" id="contact">
            <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-cyan-500 blur-3xl animate-pulse mt-25"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-emerald-500 blur-3xl opacity-70 animate-pulse mb-25"></div>
            </div>

            <RevealOnScroll>
                <div className="w-full max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                            Skontaktuj się ze mną
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Masz pytanie lub chcesz omówić projekt? Napisz do mnie, odpowiadam zwykle w ciągu 24 godzin.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                        {/* Discord Card */}
                        <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-emerald-500/20 transition-all duration-500 group overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0.5 border border-gray-800 rounded-xl group-hover:border-emerald-500/30 transition-all duration-500"></div>
                            
                            <a 
                                href="https://discord.com/users/1178347491507318804" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="relative z-10 h-full flex flex-col"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 mr-4">
                                        <FiMessageSquare className="text-emerald-400 text-2xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Discord</h3>
                                </div>
                                
                                <p className="text-gray-400 mb-8">
                                    Najszybszy sposób na kontakt. Możesz napisać do mnie bezpośrednio lub dodać do znajomych.
                                </p>
                                
                                <div className="mt-auto">
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono bg-gray-800 px-4 py-3 rounded-lg inline-block text-emerald-400 border border-gray-700">
                                            _wiktoreq_12
                                        </span>
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:translate-x-1 transition-all duration-300">
                                            <FiArrowRight />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Email Card */}
                        <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 group overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0.5 border border-gray-800 rounded-xl group-hover:border-cyan-500/30 transition-all duration-500"></div>
                            
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 mr-4">
                                        <FiMail className="text-cyan-400 text-2xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Email</h3>
                                </div>
                                
                                <p className="text-gray-400 mb-8">
                                    Idealny do formalnych zapytań i dłuższych wiadomości. Odpowiadam na wszystkie emaile.
                                </p>
                                
                                <div className="mt-auto">
                                    <a 
                                        href="mailto:wiktoreq12@op.pl" 
                                        className="flex items-center justify-between group"
                                    >
                                        <span className="font-mono bg-gray-800 px-4 py-3 rounded-lg inline-block text-cyan-400 border border-gray-700">
                                            wiktoreq12@op.pl
                                        </span>
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:translate-x-1 transition-all duration-300">
                                            <FiArrowRight />
                                        </div>
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