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
        <nav className="fixed top-0 w-full z-40 backdrop-blur-lg border-b border-white/6 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        wiktoreq<span className="text-cyan-600">.xyz</span>
                    </a>

                    <button 
                        className="md:hidden text-gray-300 hover:text-white transition-colors z-50"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menu"
                    >
                        <div className="w-6 flex flex-col items-center">
                            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`}></span>
                            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 my-1.5 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`}></span>
                        </div>
                    </button>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <a 
                                key={index}
                                href={link.href}
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}