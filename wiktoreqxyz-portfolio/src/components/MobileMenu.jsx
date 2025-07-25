export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const menuItems = [
        { name: "Strona Główna", href: "#home" },
        { name: "O mnie", href: "#about" },
        { name: "Usługi", href: "#services" },
        { name: "Doświadczenie", href: "#experience" },
        { name: "Kontakt", href: "#contact" },
        { name: "Komputer", href: "#computer" },
        { name: "Portfolio", href: "#portfolio" }
    ];

    return (
        <div className={`
            fixed inset-0 w-full h-screen bg-[rgba(10,10,10,0.95)] backdrop-blur-lg z-40
            flex flex-col items-center justify-center
            transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none delay-300"}
        `}>
            <button 
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer hover:text-cyan-400 transition-colors duration-300"
                aria-label="Close Menu" 
                onClick={() => setMenuOpen(false)}
            >
                &times;
            </button>

            <div className="w-full px-6 space-y-4">
                {menuItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className={`
                            block text-2xl font-semibold text-white py-4 px-6 rounded-xl
                            bg-[rgba(20,20,20,0.8)] hover:bg-[rgba(30,30,30,0.9)]
                            transition-all duration-500 transform
                            ${menuOpen ? 
                                "opacity-100 translate-y-0" : 
                                "opacity-0 translate-y-8"
                            }
                        `}
                        style={{
                            transitionDelay: menuOpen ? `${index * 75 + 150}ms` : "0ms"
                        }}
                        onClick={() => setMenuOpen(false)}
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </div>
    )
}