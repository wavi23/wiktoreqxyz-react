import { RevealOnScroll } from "../RevealOnScroll"
import karta from "./assets/kartagraficzna.png"
import obudowa from "./assets/obudowa.png"
import cpu from "./assets/cpu.png"
import ram from "./assets/ram.png"
import dysk from "./assets/dysk.png"
import monitor from "./assets/monitor.png"
import mikrofon from "./assets/mikrofon.png"
import ramie from "./assets/ramie.png"
import interfejs from "./assets/interfejs.png"
import sluchawki from "./assets/sluchawki.png"
import zasilacz from "./assets/zasilacz.png"
import klawiatura from "./assets/klawiatura.png"
import podkladka from "./assets/podkladka.png"
import myszka from "./assets/myszka.png"
import plyta from "./assets/plyta.png"

export const Computer = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative m-auto px-4 py-8" id="computer">
          <RevealOnScroll>
            <div className="w-full max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent text-center">Specyfikacja</h2>
              <div className="p-2 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 w-full">
                  <div className="relative border border-gray-500/50 p-4 w-full aspect-square flex items-center justify-center overflow-hidden group">
                    <img src={plyta} className="object-contain w-full h-full transition-all duration-300 group-hover:blur-sm md:group-hover:blur-xl"/>
                    <div className="text-center absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm md:text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-2">
                      <p>Płyta główna: <br /> Asus Rog STRIX B550-F <br /> Cena: <span className="text-green-500">950 </span>zł.</p>
                    </div>
                  </div>
                  <div className="relative border border-gray-500/50 p-4 w-full aspect-square flex items-center justify-center overflow-hidden group">
                    <img src={cpu} className="object-contain w-full h-full transition-all duration-300 group-hover:blur-sm md:group-hover:blur-xl"/>
                    <div className="text-center absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm md:text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-2">
                      <p>Procesor: <br /> AMD RYZEN 5700X <br /> Cena: <span className="text-green-500">500 </span>zł.</p>
                    </div>
                  </div>
                  <div className="relative border border-gray-500/50 p-4 w-full aspect-square flex items-center justify-center overflow-hidden group">
                    <img src={obudowa} className="object-contain w-full h-full transition-all duration-300 group-hover:blur-sm md:group-hover:blur-xl"/>
                    <div className="text-center absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm md:text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-2">
                      <p>Obudowa: <br /> Krux Leda (Midi Tower) <br /> Cena: <span className="text-green-500">350 </span>zł.</p>
                    </div>
                  </div>
                  <div className="relative border border-gray-500/50 p-4 w-full aspect-square flex items-center justify-center overflow-hidden group">
                    <img src={karta} className="object-contain w-full h-full transition-all duration-300 group-hover:blur-sm md:group-hover:blur-xl"/>
                    <div className="text-center absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm md:text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-2">
                      <p>Karta Graficzna: <br /> MSI Geforce RTX 3070 Gaming X <br /> Cena: <span className="text-green-500">1300 </span>zł.</p>
                    </div>
                  </div>
                  <div className="relative border border-gray-500/50 p-4 w-full aspect-square flex items-center justify-center overflow-hidden group">
                    <img src={ram} className="object-contain w-full h-full transition-all duration-300 group-hover:blur-sm md:group-hover:blur-xl"/>
                    <div className="text-center absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm md:text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-2">
                      <p>2x8GB Kostki Ram: <br /> Kingston Fury Beast DDR5 5600mhz <br /> Cena: <span className="text-green-500">300 </span>zł.</p>
                    </div>
                  </div>
                  <div className="relative border border-gray-500/50 p-4 w-full aspect-square flex items-center justify-center overflow-hidden group">
                    <img src={dysk} className="object-contain w-full h-full transition-all duration-300 group-hover:blur-sm md:group-hover:blur-xl"/>
                    <div className="text-center absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm md:text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-2">
                      <p>Dysk SSD: <br /> Samsung 870 EVO 1TB <br /> Cena: <span className="text-green-500">400 </span>zł.</p>
                    </div>
                  </div>
                  <div className="relative border border-gray-500/50 p-4 w-full aspect-square flex items-center justify-center overflow-hidden group">
                    <img src={zasilacz} className="object-contain w-full h-full transition-all duration-300 group-hover:blur-sm md:group-hover:blur-xl"/>
                    <div className="text-center absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm md:text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-2">
                      <p>Zasilacz: <br /> Endorfy 1000W <br /> Cena: <span className="text-green-500">650 </span>zł.</p>
                    </div>
                  </div>
                  <div className="relative border border-gray-500/50 p-4 w-full aspect-square flex items-center justify-center overflow-hidden group">
                    <img src={monitor} className="object-contain w-full h-full transition-all duration-300 group-hover:blur-sm md:group-hover:blur-xl"/>
                    <div className="text-center absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm md:text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-2">
                      <p>Monitor: <br /> MSI Optix MAG301CR2 UWHD 200Hz <br /> Cena: <span className="text-green-500">1100 </span>zł.</p>
                    </div>
                  </div>
                  <div className="relative border border-gray-500/50 p-4 w-full aspect-square flex items-center justify-center overflow-hidden group">
                    <img src={mikrofon} className="object-contain w-full h-full transition-all duration-300 group-hover:blur-sm md:group-hover:blur-xl"/>
                    <div className="text-center absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm md:text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-2">
                      <p>Mikrofon: <br /> Rode NT1 <br /> Cena: <span className="text-green-500">700 </span>zł.</p>
                    </div>
                  </div>
                  <div className="relative border border-gray-500/50 p-4 w-full aspect-square flex items-center justify-center overflow-hidden group">
                    <img src={ramie} className="object-contain w-full h-full transition-all duration-300 group-hover:blur-sm md:group-hover:blur-xl"/>
                    <div className="text-center absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm md:text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-2">
                      <p>Ramię mikrofonu: <br /> Rode PSA1 <br /> Cena: <span className="text-green-500">350 </span>zł.</p>
                    </div>
                  </div>
                  <div className="relative border border-gray-500/50 p-4 w-full aspect-square flex items-center justify-center overflow-hidden group">
                    <img src={interfejs} className="object-contain w-full h-full transition-all duration-300 group-hover:blur-sm md:group-hover:blur-xl"/>
                    <div className="text-center absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm md:text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-2">
                      <p>Interfejs audio: <br /> Rode AI 1 <br /> Cena: <span className="text-green-500">500 </span>zł.</p>
                    </div>
                  </div>
                  <div className="relative border border-gray-500/50 p-4 w-full aspect-square flex items-center justify-center overflow-hidden group">
                    <img src={sluchawki} className="object-contain w-full h-full transition-all duration-300 group-hover:blur-sm md:group-hover:blur-xl"/>
                    <div className="text-center absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm md:text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-2">
                      <p>Słuchawki: <br /> Steelseries Arctis Nova 7 <br /> Cena: <span className="text-green-500">500 </span>zł.</p>
                    </div>
                  </div>
                  <div className="relative border border-gray-500/50 p-4 w-full aspect-square flex items-center justify-center overflow-hidden group">
                    <img src={klawiatura} className="object-contain w-full h-full transition-all duration-300 group-hover:blur-sm md:group-hover:blur-xl"/>
                    <div className="text-center absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm md:text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-2">
                      <p>Klawiatura: <br /> MAD DOG GK600 Red Switches <br /> Cena: <span className="text-green-500">200 </span>zł.</p>
                    </div>
                  </div>
                  <div className="relative border border-gray-500/50 p-4 w-full aspect-square flex items-center justify-center overflow-hidden group">
                    <img src={podkladka} className="object-contain w-full h-full transition-all duration-300 group-hover:blur-sm md:group-hover:blur-xl"/>
                    <div className="text-center absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm md:text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-2">
                      <p>Podkładka: <br /> MAD DOG GMPR502 <br /> Cena: <span className="text-green-500">70 </span>zł.</p>
                    </div>
                  </div>
                  <div className="relative border border-gray-500/50 p-4 w-full aspect-square flex items-center justify-center overflow-hidden group">
                    <img src={myszka} className="object-contain w-full h-full transition-all duration-300 group-hover:blur-sm md:group-hover:blur-xl"/>
                    <div className="text-center absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm md:text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none p-2">
                      <p>Myszka: <br /> A4TECH Bloody a70 <br /> Cena: <span className="text-green-500">120 </span>zł.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </section>
    )
}