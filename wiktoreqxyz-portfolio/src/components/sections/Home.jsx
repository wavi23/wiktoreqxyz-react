export const Home = () => {
    return (
        <header id="home" className="min-h-screen flex items-center justify-center realtive">
            <div className="text-center z-10 px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-right max-w-3xl">Jestem Wiktor i pomogę ci z <span className="bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent">rozwojem twojego wymarzonego</span> projektu!</h1>

                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">Boże kurwa nie wiem co tu dać, doda się tutej coś później. Pozdrawiam _wiktoreq_12 ~ 19.07.2025 20:11</p>

                <div className="flex justify-center space-x-4">
                    <a href="" className="bg-cyan-500 text-white py-3 px-6 font-medium transition relative overflow-hidden hover:bg-cyan-600">Zobacz portfolio</a>
                    <a href="" className="bg-transparent border-1 border-gray-700/50 text-white py-3 px-6 font-medium transition relative overflow-hidden hover:bg-[rgba(255,255,255,0.04)]">Skontaktuj się ze mną</a>
                </div>
            </div>
        </header>
    )
}