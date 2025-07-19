import { RevealOnScroll } from "../RevealOnScroll"

export const Experience = () => {
    return (
        <section id="experience" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-7xl mx-auto px-1">
                    <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent text-center">Doświadczenie</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                        <div className="p-8 border-1 border-gray-500/50 hover:bg-[rgba(255,255,255,0.04)]">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent">Html</h1>
                            <p className="mt-2 text-gray-300">Posiadam 2 letnie doświadczenie w htmlu. Był to pierwszy język jakiego się nauczyłem.</p>
                        </div>
                        <div className="p-8 border-1 border-gray-500/50 hover:bg-[rgba(255,255,255,0.04)]">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-200 bg-clip-text text-transparent">Css</h1>
                            <p className="mt-2 text-gray-300">Posiadam 2 letnie doświadczenie w cssie. Był to drugi język jakiego się nauczyłem.</p>
                        </div>
                        <div className="p-8 border-1 border-gray-500/50 hover:bg-[rgba(255,255,255,0.04)]">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">Javascript</h1>
                            <p className="mt-2 text-gray-300">Posiadam 1,5 letnie doświadczenie w  jsie. Był to trzeci język jakiego się nauczyłem.</p>
                        </div>
                        <div className="p-8 border-1 border-gray-500/50 hover:bg-[rgba(255,255,255,0.04)]">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">React.js</h1>
                            <p className="mt-2 text-gray-300">Posiadam prawie roczne doświadczenie w reacie. Był to piąty język jakiego się nauczyłem.</p>
                        </div>
                        <div className="p-8 border-1 border-gray-500/50 hover:bg-[rgba(255,255,255,0.04)]">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-sky-600 bg-clip-text text-transparent">Typescript</h1>
                            <p className="mt-2 text-gray-300">Posiadam pół roku doświadczenia w typescripcie. Był to szósty język jakiego się nauczyłem.</p>
                        </div>
                        <div className="p-8 border-1 border-gray-500/50 hover:bg-[rgba(255,255,255,0.04)]">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-amber-700 bg-clip-text text-transparent">Python</h1>
                            <p className="mt-2 text-gray-300">Posiadam 1,5 roku doświadczenia w pythonie. Był to czwarty język jakiego się nauczyłem.</p>
                        </div>
                        <div className="p-8 border-1 border-gray-500/50 hover:bg-[rgba(255,255,255,0.04)]">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">???</h1>
                            <p className="mt-2 text-gray-300">Aktualnie brak opisu.</p>
                        </div>
                        <div className="p-8 border-1 border-gray-500/50 hover:bg-[rgba(255,255,255,0.04)]">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">???</h1>
                            <p className="mt-2 text-gray-300">Aktualnie brak opisu.</p>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}