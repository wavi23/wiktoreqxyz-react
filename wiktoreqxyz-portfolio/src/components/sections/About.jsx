import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-15">
            <RevealOnScroll>
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent text-center">O mnie</h2>
                    <div className="p-8">
                        Jestem Wiktor, zajmuję się stronami internetowymi od 2 lat. W moich projektach stawiam na wygodę oraz na wygląd, aby wszystko co robię wyglądało jak najlepiej
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-w-25 max-w-screen mt-4">
                            <div className="p-8 border-1 border-gray-500/50 hover:bg-[rgba(255,255,255,0.04)]">
                                <h1 className="text-2xl font-bold">Frontend</h1>
                                <p>React, Typescript, TailwindCSS, Javascript, Css, Html</p>
                            </div>
                            <div className="p-8 border-1 bg-transparent border-gray-500/50 hover:bg-[rgba(255,255,255,0.04)]">
                                <h1 className="text-2xl font-bold">Backend</h1>
                                <p className="mt-2 text-gray-300">Python, MongoDB, Node.js</p>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}