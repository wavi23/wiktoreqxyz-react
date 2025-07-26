import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import { FiArrowRight } from "react-icons/fi";

export const Home = () => {
    return (
        <header id="home" className="min-h-screen flex items-center justify-center relative px-4 py-16 md:py-24 overflow-hidden bg-gray-950 mt-12">
            <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                <motion.div 
                    className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-cyan-500 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 0.9, 0.6]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-emerald-500 blur-3xl opacity-70"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </div>

            <RevealOnScroll>
                <div className="text-center relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
                            <span className="text-gray-300">Cześć, jestem </span>
                            <span className="text-white">Wiktor</span>
                            <motion.span 
                                className="block mt-3 md:mt-4 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                Tworzę nowoczesne strony www
                            </motion.span>
                        </h1>

                        <motion.p 
                            className="text-gray-400 text-base sm:text-lg md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            Specjalizuję się w budowaniu wydajnych i responsywnych aplikacji internetowych, 
                            które łączą innowacyjne technologie z intuicyjnym designem.
                        </motion.p>

                        <motion.div 
                            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                        >
                            <motion.a
                                href="#portfolio"
                                className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-cyan-600 text-white py-3 px-6 sm:py-4 sm:px-8 font-medium rounded-lg flex items-center justify-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10 flex items-center">
                                    Zobacz moje projekty
                                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <motion.span 
                                    className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-700 opacity-0 group-hover:opacity-100"
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.a>

                            <motion.a
                                href="#contact"
                                className="group relative overflow-hidden bg-transparent border border-gray-700 text-white py-3 px-6 sm:py-4 sm:px-8 font-medium rounded-lg flex items-center justify-center"
                                whileHover={{ 
                                    scale: 1.05,
                                    borderColor: "rgba(16, 185, 129, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10 flex items-center">
                                    Porozmawiajmy
                                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <motion.span 
                                    className="absolute inset-0 bg-gray-800/50 opacity-0 group-hover:opacity-100"
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className="mt-20 md:mt-24 flex justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        <a 
                            href="#about" 
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <motion.svg 
                                className="w-8 h-8"
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                animate={{
                                    y: [0, 10, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </motion.svg>
                        </a>
                    </motion.div>
                </div>
            </RevealOnScroll>
        </header>
    )
}