import { useEffect } from "react"

export const Navbar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])
    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/6 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        {" "}
                        wiktoreq<span className="text-cyan-600">.xyz</span>{" "}
                    </a>
 
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="" className="text-gray-300 hover:text-white transition-colors">Strona Główna</a>
                        <a href="" className="text-gray-300 hover:text-white transition-colors">O mnie</a>
                        <a href="" className="text-gray-300 hover:text-white transition-colors">Usługi</a>
                        <a href="" className="text-gray-300 hover:text-white transition-colors">Doświadczenie</a>
                        <a href="" className="text-gray-300 hover:text-white transition-colors">Kontakt</a>
                        <a href="" className="text-gray-300 hover:text-white transition-colors">Specyfikacja</a>
                        <a href="" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}