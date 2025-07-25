import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center relative py-12 md:py-24 px-4">
            <RevealOnScroll>
                <div className="w-full max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent text-center">O mnie</h2>
                    
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-10 mx-4 md:mx-0">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-600 flex items-center justify-center shrink-0">
                                <span className="text-4xl md:text-6xl font-bold">W</span>
                            </div>
                            
                            <div>
                                <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                                    Cześć, jestem <span className="text-white font-medium">Wiktor</span>. Od 2 lat zajmuję się tworzeniem stron internetowych, skupiając się zarówno na funkcjonalności jak i estetyce. W każdym projekcie staram się łączyć nowoczesny design z intuicyjną obsługą.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 group">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-emerald-500/10 p-3 rounded-lg group-hover:bg-emerald-500/20 transition-colors duration-300">
                                        <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Frontend</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'TypeScript', 'TailwindCSS', 'JavaScript', 'CSS', 'HTML'].map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-colors duration-200">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-cyan-500/10 p-3 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-300">
                                        <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">Backend</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['Python', 'MongoDB', 'Node.js', 'REST API'].map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-colors duration-200">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}