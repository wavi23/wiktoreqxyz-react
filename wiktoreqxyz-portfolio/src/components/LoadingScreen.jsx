import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("")
    const [progress, setProgress] = useState(0)
    const fullText = "wiktoreq.xyz"

    useEffect(() => {
        let index = 0
        const textInterval = setInterval(() => {
            if (index <= fullText.length) {
                setText(fullText.substring(0, index))
                index++
            } else {
                clearInterval(textInterval)
            }
        }, 150)

        const progressInterval = setInterval(() => {
            setProgress(prev => {
                const newProgress = prev + 2
                if (newProgress >= 100) {
                    clearInterval(progressInterval)
                    setTimeout(() => {
                        onComplete()
                    }, 300)
                    return 100
                }
                return newProgress
            })
        }, 60)

        return () => {
            clearInterval(textInterval)
            clearInterval(progressInterval)
        }        
    }, [onComplete])

    return (
        <AnimatePresence>
            <motion.div 
                className="fixed inset-0 z-50 bg-gray-950/95 backdrop-blur-lg flex flex-col items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="relative max-w-2xl w-full px-4">
                    <motion.div 
                        className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.4, 0.7, 0.4]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div 
                        className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-xl"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    />

                    <div className="relative z-10 text-center">
                        <motion.div
                            className="mb-8 text-4xl md:text-5xl font-bold"
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                        >
                            <span className="text-gray-300 font-mono">Ładowanie</span>
                            {text && (
                                <>
                                    <span className="text-gray-300 font-mono"> </span>
                                    <motion.span 
                                        className="bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent font-mono"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        {text}
                                    </motion.span>
                                </>
                            )}
                            <motion.span 
                                className="inline-block w-2 h-8 bg-emerald-500 ml-1 align-middle"
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ 
                                    duration: 1, 
                                    repeat: Infinity,
                                    repeatDelay: 0.3
                                }}
                            />
                        </motion.div>

                        <div className="w-full max-w-xs mx-auto h-1.5 bg-gray-800 rounded-full overflow-hidden relative">
                            <motion.div 
                                className="h-full bg-gradient-to-r from-cyan-500 to-emerald-600 rounded-full absolute top-0 left-0"
                                style={{ width: `${progress}%` }}
                                initial={{ width: 0 }}
                                transition={{ duration: 0.1 }}
                            />
                            {progress > 0 && progress < 100 && (
                                <motion.div 
                                    className="absolute top-0 left-0 h-full w-10 bg-white/30 rounded-full"
                                    animate={{
                                        x: [`-${10}px`, `${Math.min(progress/100 * 320, 310)}px`]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    key={progress}
                                />
                            )}
                        </div>

                        <motion.div 
                            className="mt-3 text-xs text-gray-400 font-mono"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            {progress}%
                        </motion.div>
                    </div>
                </div>

                <motion.div 
                    className="absolute bottom-8 flex space-x-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 rounded-full bg-emerald-400/80"
                            animate={{
                                y: [0, -6, 0],
                                opacity: [0.6, 1, 0.6]
                            }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                delay: i * 0.15
                            }}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}