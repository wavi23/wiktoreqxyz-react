export const MobileMenu = ({ menuOpen, setMenuOpen }) => {

    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300
                        ease-in-out
                        
                        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
                       `}
        >
        
            <button className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer bg-red-500 w-9 rounded-xl" aria-label="Close Menu" onClick={() => setMenuOpen(false)}>&times;</button>

            <a href="" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 bg-[rgba(10,10,10,0.8)] w-[75%] text-center  py-5 rounded-xl
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `} onClick={() => setMenuOpen(false)}>O mnie</a>
            <a href="" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 bg-[rgba(10,10,10,0.8)] w-[75%] text-center  py-5 rounded-xl
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `} onClick={() => setMenuOpen(false)}>Usługi</a>
            <a href="" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 bg-[rgba(10,10,10,0.8)] w-[75%] text-center  py-5 rounded-xl
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `} onClick={() => setMenuOpen(false)}>Doświadczenie</a>
            <a href="" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 bg-[rgba(10,10,10,0.8)] w-[75%] text-center  py-5 rounded-xl
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `} onClick={() => setMenuOpen(false)}>Kontakt</a>
            <a href="" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 bg-[rgba(10,10,10,0.8)] w-[75%] text-center  py-5 rounded-xl
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `} onClick={() => setMenuOpen(false)}>Komputer</a>
            <a href="" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 bg-[rgba(10,10,10,0.8)] w-[75%] text-center  py-5 rounded-xl
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `} onClick={() => setMenuOpen(false)}>Portfolio</a>
        </div>
    )
}