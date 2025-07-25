import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center relative px-4 py-20">
            <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-cyan-500 blur-3xl animate-pulse mt-25"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-emerald-500 blur-3xl opacity-70 animate-pulse mb-25"></div>
            </div>

            <RevealOnScroll>
                <div className="w-full max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                            O Mnie
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Kilka słów o mnie i moich umiejętnościach.
                        </p>
                    </div>
                    
                    <div className="bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-8 md:p-12 overflow-hidden">
                        <div className="flex flex-col lg:flex-row gap-12 items-center">
                            <div className="relative shrink-0">
                                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center">
                                    <span className="text-6xl md:text-8xl font-bold text-white">W</span>
                                </div>
                                <div className="absolute -bottom-3 -right-3 bg-gray-900 px-4 py-2 rounded-full border border-gray-700">
                                    <span className="text-emerald-400 font-medium">2+ lata doświadczenia</span>
                                </div>
                            </div>
                            
                            <div className="flex-1">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                    Cześć, jestem <span className="text-emerald-400">Wiktor</span>
                                </h3>
                                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                    Od dwóch lat tworzę strony internetowe. W każdym projekcie, który tworzę za każdym razem uczę się czegoś nowego.
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10 transition-all">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20">
                                                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Frontend</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {['React', 'TypeScript', 'TailwindCSS', 'JavaScript', 'CSS', 'HTML'].map((tech) => (
                                                <span key={tech} className="px-3 py-1 bg-gray-900 rounded-full text-sm border border-gray-700 text-emerald-400 hover:bg-emerald-500/10 transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="bg-cyan-500/10 p-3 rounded-lg border border-cyan-500/20">
                                                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Backend</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {['Python', 'MongoDB', 'Node.js', 'REST API'].map((tech) => (
                                                <span key={tech} className="px-3 py-1 bg-gray-900 rounded-full text-sm border border-gray-700 text-cyan-400 hover:bg-cyan-500/10 transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}