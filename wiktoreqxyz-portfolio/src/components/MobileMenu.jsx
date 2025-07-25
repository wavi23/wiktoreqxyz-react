export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const menuItems = [
        { name: "Strona Główna", href: "#home" },
        { name: "O mnie", href: "#about" },
        { name: "Doświadczenie", href: "#experience" },
        { name: "Specyfikacja", href: "#computer" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Kontakt", href: "#contact" }
    ];

    return (
        <div className={`
            fixed inset-0 w-full h-screen bg-gray-950/95 backdrop-blur-lg z-50
            flex flex-col items-center justify-center
            transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible delay-300"}
        `}>
            <button 
                className="absolute top-6 right-6 text-white text-4xl p-2
                focus:outline-none cursor-pointer hover:text-cyan-400 
                transition-colors duration-300"
                aria-label="Zamknij menu" 
                onClick={() => setMenuOpen(false)}
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div className="w-full max-w-md px-6 space-y-2">
                {menuItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className={`
                            block text-2xl font-medium text-white py-4 px-6 rounded-xl
                            bg-gray-900/80 hover:bg-gray-800 border border-gray-800
                            hover:border-cyan-500/30 hover:text-cyan-400
                            transition-all duration-300 transform
                            ${menuOpen ? 
                                "opacity-100 translate-x-0" : 
                                "opacity-0 translate-x-8"
                            }
                        `}
                        style={{
                            transitionDelay: menuOpen ? `${index * 50 + 100}ms` : "0ms"
                        }}
                        onClick={() => setMenuOpen(false)}
                    >
                        <div className="flex items-center">
                            <span className="w-2 h-2 rounded-full bg-cyan-500 mr-4"></span>
                            {item.name}
                        </div>
                    </a>
                ))}
            </div>

            <div className={`mt-8 text-gray-400 text-sm transition-opacity duration-500 
                ${menuOpen ? "opacity-100 delay-500" : "opacity-0"}`}>
                © {new Date().getFullYear()} wiktoreq.xyz
            </div>
        </div>
    )
}