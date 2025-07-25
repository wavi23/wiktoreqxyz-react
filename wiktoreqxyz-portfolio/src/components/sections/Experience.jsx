import { RevealOnScroll } from "../RevealOnScroll"

export const Experience = () => {
    const skills = [
        {
            name: "HTML",
            description: "2 lata doświadczenia. Był to pierwszy język jakiego się nauczyłem.",
            gradient: "from-orange-600 to-red-700",
            icon: "M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
            level: 100
        },
        {
            name: "CSS",
            description: "2 lata doświadczenia. Był to drugi język jakiego się nauczyłem.",
            gradient: "from-blue-400 to-cyan-200",
            icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
            level: 85
        },
        {
            name: "JavaScript",
            description: "1.5 roku doświadczenia. Był to trzeci język jakiego się nauczyłem.",
            gradient: "from-yellow-300 to-amber-400",
            icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
            level: 70
        },
        {
            name: "React.js",
            description: "Prawie rok doświadczenia. Był to piąty język jakiego się nauczyłem.",
            gradient: "from-cyan-400 to-blue-500",
            icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
            level: 60
        },
        {
            name: "TypeScript",
            description: "Pół roku doświadczenia. Był to szósty język jakiego się nauczyłem.",
            gradient: "from-blue-500 to-sky-600",
            icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
            level: 70
        },
        {
            name: "Python",
            description: "1.5 roku doświadczenia. Był to czwarty język jakiego się nauczyłem.",
            gradient: "from-yellow-500 to-amber-700",
            icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
            level: 60
        },
        {
            name: "Next.js",
            description: "W trakcie nauki. Kolejna technologia w moim stacku.",
            gradient: "from-gray-700 to-gray-500",
            icon: "M13 10V3L4 14h7v7l9-11h-7z",
            level: 10
        },
        {
            name: "Node.js",
            description: "W trakcie nauki. Rozwijam umiejętności backendowe.",
            gradient: "from-green-600 to-emerald-400",
            icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
            level: 50
        }
    ];

    return (
        <section id="experience" className="min-h-screen flex items-center justify-center relative px-4 py-20">
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-cyan-500 blur-3xl animate-pulse mt-25"></div>
              <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-emerald-500 blur-3xl opacity-70 animate-pulse mb-25"></div>
            </div>

            <RevealOnScroll>
                <div className="w-full max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                            Moje Umiejętności
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Technologie, które znam i stale rozwijam.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <div 
                                key={index}
                                className={`bg-gray-900/80 border border-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-${skill.gradient.split(' ')[1]}/10 transition-all duration-300`}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`bg-gradient-to-br ${skill.gradient} p-3 rounded-lg`}>
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={skill.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        {skill.name}
                                    </h3>
                                </div>
                                <p className="text-gray-300 text-sm mb-4">
                                    {skill.description}
                                </p>
                                <div className="mt-4">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-xs text-gray-400">Poziom zaawansowania</span>
                                        <span className="text-xs font-medium text-gray-300">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-2">
                                        <div 
                                            className={`bg-gradient-to-r ${skill.gradient} h-2 rounded-full`} 
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}