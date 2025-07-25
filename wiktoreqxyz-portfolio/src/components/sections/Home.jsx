import { RevealOnScroll } from "../RevealOnScroll"

export const Home = () => {
    return (
        <header id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4 max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
                        Cześć, jestem <span className="text-white">Wiktor</span> i pomogę Ci z <br />
                        <span className="bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent">
                            rozwojem Twojego projektu
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                        Specjalizuję się w tworzeniu nowoczesnych stron internetowych i aplikacji, 
                        łącząc funkcjonalność z estetycznym designem.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a 
                            href="#portfolio" 
                            className="bg-gradient-to-r from-cyan-500 to-emerald-600 text-white py-3 px-8 font-medium rounded-lg transition-all hover:from-cyan-600 hover:to-emerald-700 hover:shadow-lg hover:shadow-cyan-500/20"
                        >
                            Zobacz portfolio
                        </a>
                        <a 
                            href="#contact" 
                            className="bg-transparent border border-white/20 text-white py-3 px-8 font-medium rounded-lg transition-all hover:bg-white/10 hover:border-white/30"
                        >
                            Skontaktuj się ze mną
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </header>
    )
}