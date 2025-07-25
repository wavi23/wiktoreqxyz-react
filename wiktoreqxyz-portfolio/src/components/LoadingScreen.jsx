import { useEffect, useState } from "react"

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("")
    const fullText = "wiktoreq.xyz"

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index))
            index++;

            if (index > fullText.length) {
                clearInterval(interval)
                setTimeout(() => {
                    onComplete()
                }, 500)
            }
        }, 150)

        return () => clearInterval(interval)        
    }, [onComplete])

    return (
        <div className="fixed inset-0 z-50 bg-gray-950/90 backdrop-blur-md flex flex-col items-center justify-center">
            <div className="mb-8 text-4xl md:text-5xl font-mono font-bold">
                <span className="text-gray-300">Ładowanie </span>
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">
                    {text}
                </span>
                <span className="animate-pulse">_</span>
            </div>

            <div className="w-64 md:w-80 h-1 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-emerald-600 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-emerald-500/30 animate-loading-bar"></div>
                </div>
            </div>

            <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-cyan-500/10 blur-xl animate-pulse-slow -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-emerald-500/10 blur-xl animate-pulse-slow -z-10" />
        </div>
    )
}