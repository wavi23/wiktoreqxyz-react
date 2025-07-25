import { useEffect } from "react"

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    const navLinks = [
        { name: "Strona Główna", href: "#home" },
        { name: "O mnie", href: "#about" },
        { name: "Doświadczenie", href: "#experience" },
        { name: "Specyfikacja", href: "#computer" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Kontakt", href: "#contact" }
    ];

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])

    return (
        <nav className="fixed top-0 w-full z-40 backdrop-blur-md border-b border-gray-500/20 shadow-xl">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    <a 
                        href="#home" 
                        className="font-mono text-2xl font-bold text-white hover:text-cyan-500 transition-colors duration-300"
                    >
                        <span className="text-cyan-500">&lt;</span>
                        wiktoreq
                        <span className="text-cyan-500">.xyz /&gt;</span>
                    </a>

                    <button 
                        className="md:hidden text-gray-400 hover:text-cyan-500 transition-all duration-300 z-50 p-2 rounded-md hover:bg-gray-800"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menu"
                    >
                        <div className="w-6 flex flex-col items-center">
                            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`}></span>
                            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 my-1.5 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`}></span>
                        </div>
                    </button>

                    <div className="hidden md:flex items-center space-x-4">
                        {navLinks.map((link, index) => (
                            <a 
                                key={index}
                                href={link.href}
                                className="relative text-gray-300 hover:text-white px-4 py-2 rounded-md transition-all duration-300 group"
                            >
                                <span className="relative z-10">{link.name}</span>
                                <span className="absolute inset-0 bg-cyan-500/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                                <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}