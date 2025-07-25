import { RevealOnScroll } from "../RevealOnScroll"
import { FiArrowRight } from "react-icons/fi"

export const Home = () => {
    return (
        <header id="home" className="min-h-screen flex items-center justify-center relative px-4 py-20 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-cyan-500 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-emerald-500 blur-3xl opacity-70 animate-pulse mb-25"></div>
            </div>

            <RevealOnScroll>
                <div className="text-center relative z-10 max-w-7xl mx-auto">
                    <div className="reveal-content">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            <span className="text-gray-300">Cześć, jestem </span>
                            <span className="text-white">Wiktor</span>
                            <span className="block mt-4 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                                Tworzę nowoczesne rozwiązania webowe
                            </span>
                        </h1>

                        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
                            Specjalizuję się w budowaniu wydajnych i responsywnych aplikacji internetowych, 
                            które łączą innowacyjne technologie z intuicyjnym designem.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="#portfolio"
                                className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-cyan-600 text-white py-4 px-8 font-medium rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300"
                            >
                                <span className="relative z-10 flex items-center">
                                    Zobacz moje projekty
                                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </a>

                            <a
                                href="#contact"
                                className="group relative overflow-hidden bg-transparent border border-gray-700 text-white py-4 px-8 font-medium rounded-lg flex items-center justify-center hover:border-emerald-500/30 hover:scale-105 transition-all duration-300"
                            >
                                <span className="relative z-10 flex items-center">
                                    Porozmawiajmy
                                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <span className="absolute inset-0 bg-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </a>
                        </div>
                    </div>

                    <div className="mt-24 flex justify-center">
                        <a 
                            href="#about" 
                            className="text-gray-400 hover:text-white transition-colors animate-bounce"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </header>
    )
}