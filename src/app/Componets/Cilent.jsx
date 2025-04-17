
import Image from 'next/image'

const clients = [
    { src: '/logo/influence 4you.png', alt: 'Influence4You' },
    { src: '/logo/tse.png', alt: 'TSE' },
    { src: '/logo/monceau.png', alt: 'Monceau' },
    { src: '/logo/coudac.png', alt: 'Coudac' },
    { src: '/logo/flomodia.png', alt: 'Flomodia' },
    { src: '/logo/weglot.png', alt: 'Weglot' }
]

export default function Clients() {
    return (
        <section className="bg-[#178c8d] py-10 rounded-xl mx-4 md:mx-10 my-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
                    {
                    clients.map((client, index) => (
                        <div key={index} className="flex items-center justify-center border border-white/20 rounded-lg p-4 bg-[#178c8d] hover:bg-[#127272] transition">
                            <Image src={client.src} alt={client.alt} width={100} height={100} className="object-contain  transition "/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
