import { RevealOnScroll } from "../RevealOnScroll"

export const Contact = () => {

    return (
        <section className="min-h-screen flex items-center justify-center realtive m-auto" id="contact">
            <RevealOnScroll>
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent text-center">Kontakt</h2>
                <a href="https://discord.com/users/1178347491507318804" target="_blank">
                    <div className="bg-gradient-to-r from-emerald-500 to-cyan-600 max-w-1/2 p-12 rounded m-auto cursor-pointer">
                        <h1 className="text-3xl font-bold max-w-[70%] mb-2 ">Możesz się ze mną skontaktować przez discorda!</h1>
                        <p className="text-lg">Kliknij w tego boxa, aby przejść do mojego profilu i móc się ze mną skontaktować. Możesz mnie również dodać do znajomych
                            przez aplikację discord. Mój nick do zaproszenia: <span>_wiktoreq_12</span>.
                        </p>
                    </div>
                </a>
            </RevealOnScroll>
        </section>
    )

}