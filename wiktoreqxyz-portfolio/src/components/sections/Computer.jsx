import { motion } from "framer-motion";
import { FiCpu, FiHardDrive, FiHeadphones, FiMonitor, FiMousePointer } from "react-icons/fi";
import karta from "./assets/kartagraficzna.png";
import obudowa from "./assets/obudowa.png";
import cpu from "./assets/cpu.png";
import ram from "./assets/ram.png";
import dysk from "./assets/dysk.png";
import monitor from "./assets/monitor.png";
import mikrofon from "./assets/mikrofon.png";
import ramie from "./assets/ramie.png";
import interfejs from "./assets/interfejs.png";
import sluchawki from "./assets/sluchawki.png";
import zasilacz from "./assets/zasilacz.png";
import klawiatura from "./assets/klawiatura.png";
import podkladka from "./assets/podkladka.png";
import myszka from "./assets/myszka.png";
import plyta from "./assets/plyta.png";

export const Computer = () => {
    const components = [
        { img: plyta, name: "Płyta główna", spec: "Asus Rog STRIX B550-F", price: "950", icon: <FiCpu className="text-emerald-400" /> },
        { img: cpu, name: "Procesor", spec: "AMD RYZEN 5700X", price: "500", icon: <FiCpu className="text-cyan-400" /> },
        { img: obudowa, name: "Obudowa", spec: "Krux Leda (Midi Tower)", price: "350", icon: <FiCpu className="text-emerald-400" /> },
        { img: karta, name: "Karta Graficzna", spec: "MSI Geforce RTX 3070 Gaming X", price: "1300", icon: <FiMonitor className="text-cyan-400" /> },
        { img: ram, name: "RAM", spec: "Kingston Fury Beast DDR5 5600mhz (2x8GB)", price: "300", icon: <FiHardDrive className="text-emerald-400" /> },
        { img: dysk, name: "Dysk SSD", spec: "Samsung 870 EVO 1TB", price: "400", icon: <FiHardDrive className="text-cyan-400" /> },
        { img: zasilacz, name: "Zasilacz", spec: "Endorfy 1000W", price: "650", icon: <FiCpu className="text-emerald-400" /> },
        { img: monitor, name: "Monitor", spec: "MSI Optix MAG301CR2 UWHD 200Hz", price: "1100", icon: <FiMonitor className="text-cyan-400" /> },
        { img: mikrofon, name: "Mikrofon", spec: "Rode NT1", price: "700", icon: <FiHeadphones className="text-emerald-400" /> },
        { img: ramie, name: "Ramię mikrofonu", spec: "Rode PSA1", price: "350", icon: <FiHeadphones className="text-cyan-400" /> },
        { img: interfejs, name: "Interfejs audio", spec: "Rode AI 1", price: "500", icon: <FiHeadphones className="text-emerald-400" /> },
        { img: sluchawki, name: "Słuchawki", spec: "Steelseries Arctis Nova 7", price: "500", icon: <FiHeadphones className="text-cyan-400" /> },
        { img: klawiatura, name: "Klawiatura", spec: "MAD DOG GK600 Red Switches", price: "200", icon: <FiMousePointer className="text-emerald-400" /> },
        { img: podkladka, name: "Podkładka", spec: "MAD DOG GMPR502", price: "70", icon: <FiMousePointer className="text-cyan-400" /> },
        { img: myszka, name: "Myszka", spec: "A4TECH Bloody a70", price: "120", icon: <FiMousePointer className="text-emerald-400" /> }
    ];

    const totalPrice = components.reduce((sum, item) => sum + parseInt(item.price), 0);

    return (
        <section className="min-h-screen flex items-center justify-center relative px-4 py-16 md:py-24 bg-gray-950" id="computer">
            <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-cyan-500 blur-3xl animate-pulse mt-25"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-emerald-500 blur-3xl opacity-70 animate-pulse mb-25"></div>
            </div>

            <div className="w-full max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                        Moja Specyfikacja
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
                        Sprzęt, na którym pracuję i tworzę.
                    </p>
                </motion.div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    {components.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ 
                                y: -5,
                                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                            }}
                            className="bg-gray-900/80 border border-gray-800 rounded-xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 group"
                        >
                            <div className="relative h-48 p-6 flex items-center justify-center bg-gradient-to-b from-gray-900/50 to-gray-950/50">
                                <img 
                                    src={item.img} 
                                    className="h-full object-contain transition-transform duration-500 group-hover:scale-105" 
                                    alt={item.name}
                                    loading="lazy"
                                />
                                <div className="absolute top-4 left-4 p-2 bg-gray-800 rounded-lg border border-gray-700 group-hover:bg-gray-700/50 transition-colors">
                                    {item.icon}
                                </div>
                            </div>
                            
                            <div className="p-5 md:p-6 border-t border-gray-800/50 group-hover:border-emerald-500/30 transition-colors">
                                <h3 className="text-lg md:text-xl font-bold text-white mb-1">{item.name}</h3>
                                <p className="text-gray-400 text-sm mb-3 md:mb-4">{item.spec}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-emerald-400 font-medium text-sm md:text-base">
                                        Cena: {item.price} zł
                                    </span>
                                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded-full">
                                        #{index + 1}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: components.length * 0.1 + 0.3 }}
                    className="mt-12 md:mt-16 text-center"
                >
                    <p className="text-gray-500 mb-2 text-sm md:text-base">Łączna wartość sprzętu:</p>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                        {totalPrice.toLocaleString('pl-PL')} zł
                    </p>
                </motion.div>
            </div>
        </section>
    );
};