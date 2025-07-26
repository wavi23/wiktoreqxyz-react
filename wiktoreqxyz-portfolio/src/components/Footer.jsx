import { FiArrowRight, FiMail, FiGithub, FiMessageSquare } from "react-icons/fi";
import { SiReact, SiTailwindcss, SiVite, SiFramer, SiNodedotjs, SiJavascript } from "react-icons/si";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        {
            name: "GitHub",
            icon: <FiGithub className="h-5 w-5" />,
            url: "https://github.com/wiktoreq12",
            color: "hover:text-gray-400"
        },
        {
            name: "Discord",
            icon: <FiMessageSquare className="h-5 w-5" />,
            url: "https://discord.com/users/1178347491507318804",
            color: "hover:text-indigo-400"
        },
        {
            name: "Email",
            icon: <FiMail className="h-5 w-5" />,
            url: "mailto:wiktoreq12@op.pl",
            color: "hover:text-cyan-400"
        }
    ];

    const footerLinks = [
        { name: "Strona główna", href: "#home" },
        { name: "O mnie", href: "#about" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Kontakt", href: "#contact" }
    ];

    const techStack = [
        { 
            name: "React", 
            icon: <SiReact className="h-5 w-5 text-cyan-400" />,
            url: "https://reactjs.org"
        },
        { 
            name: "Tailwind CSS", 
            icon: <SiTailwindcss className="h-5 w-5 text-cyan-500" />,
            url: "https://tailwindcss.com"
        },
        { 
            name: "Vite", 
            icon: <SiVite className="h-5 w-5 text-yellow-400" />,
            url: "https://vitejs.dev"
        },
        { 
            name: "Framer Motion", 
            icon: <SiFramer className="h-5 w-5 text-purple-400" />,
            url: "https://www.framer.com/motion/"
        },
        { 
            name: "Node.js", 
            icon: <SiNodedotjs className="h-5 w-5 text-green-500" />,
            url: "https://nodejs.org"
        },
        { 
            name: "JavaScript", 
            icon: <SiJavascript className="h-5 w-5 text-yellow-300" />,
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        }
    ];

    return (
        <footer className="bg-gray-900/80 border-t border-gray-800/50 py-8 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="space-y-4">
                        <a 
                            href="#home" 
                            className="font-mono text-xl font-bold text-white hover:text-cyan-400 transition-colors inline-flex items-center"
                        >
                            <span className="text-cyan-400">&lt;</span>
                            wiktoreq
                            <span className="text-cyan-400">.xyz /&gt;</span>
                        </a>
                        <p className="text-gray-400 text-sm">
                            Tworzę nowoczesne strony internetowe i aplikacje webowe, łącząc funkcjonalność z estetyką.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-gray-500 ${link.color} transition-colors`}
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-white font-medium text-left">Nawigacja</h3>
                        <ul className="space-y-3 text-left">
                            {footerLinks.map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.href} 
                                        className="text-gray-400 hover:text-cyan-400 text-sm transition-colors flex items-center"
                                    >
                                        <FiArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-white font-medium">Kontakt</h3>
                        <div className="space-y-2">
                            <p className="text-gray-400 text-sm flex items-center">
                                <FiMail className="mr-2 text-cyan-400" />
                                wiktoreq12@op.pl
                            </p>
                            <p className="text-gray-400 text-sm flex items-center">
                                <FiMessageSquare className="mr-2 text-indigo-400" />
                                Discord: _wiktoreq_12
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-white font-medium">Technologie</h3>
                        <p className="text-gray-400 text-sm mb-2">
                            Strona zbudowana przy użyciu:
                        </p>
                        <div className="grid grid-cols-3 sm:grid-cols-2 gap-4">
                            {techStack.map((tech, index) => (
                                <a
                                    key={index}
                                    href={tech.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 group"
                                >
                                    {tech.icon}
                                    <span className="text-gray-300 text-sm group-hover:text-cyan-400 transition-colors">
                                        {tech.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-gray-500 text-xs md:text-sm text-center md:text-left">
                        &copy; {currentYear} _wiktoreq_12. Wszelkie prawa zastrzeżone.
                    </div>
                    <div className="text-gray-600 text-xs">
                        Strona stworzona z ❤️ przez _wiktoreq_12
                    </div>
                </div>
            </div>
        </footer>
    )
}