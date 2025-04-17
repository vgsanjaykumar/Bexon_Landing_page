'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Mevon Lane',
        title: 'Co. Founder',
        avatar: '/bussiness process bg.jpg',
        quote:
            "Working with Bexon has been a game-changer for our business. Their team's professionalism, attention to detail, and innovative solutions have helped us streamline operations and achieve our goals faster than we imagined. We truly feel like a valued partner. The results we’ve seen after partnering.",
    }, {
        id: 2,
        name: 'Mevon Lane',
        title: 'Co. Founder',
        avatar: '/bussiness process bg.jpg',
        quote:
            "Working with Bexon has been a game-changer for our business. Their team's professionalism, attention to detail, and innovative solutions have helped us streamline operations and achieve our goals faster than we imagined. We truly feel like a valued partner. The results we’ve seen after partnering.",
    },
    {
        id: 3,
        name: 'Mevon Lane',
        title: 'Co. Founder',
        avatar: '/bussiness process bg.jpg',
        quote:
            "Working with Bexon has been a game-changer for our business. Their team's professionalism, attention to detail, and innovative solutions have helped us streamline operations and achieve our goals faster than we imagined. We truly feel like a valued partner. The results we’ve seen after partnering.",
    },
   
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="bg-[#eef1f1] py-20 px-4 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <span className="inline-block mb-4 px-5 py-1 text-sm font-semibold text-gray-700 border border-gray-300 rounded-full shadow-sm">
                    Our Clients Love <span className="text-teal-500">Feedback</span>
                </span>

                <div className="flex justify-center mb-6 gap-4 items-center">
                    {
                    testimonials.map((t, index) => (
                        <div key={t.id} className={`w-14 h-14 rounded-full overflow-hidden border-2 transition-all duration-300 ${index === current ? 'border-teal-500 scale-110' : 'border-gray-300 opacity-50' }`}>
                            <Image  src={t.avatar} alt={t.name} width={56} height={56}   className="object-cover w-full h-full" />
                        </div>
                    ))}
                </div>

                <h3 className="font-semibold text-lg">{testimonials[current].name}</h3>
                <p className="text-gray-500 text-sm mb-6">{testimonials[current].title}</p>

                <div className="relative max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md text-gray-800 text-lg leading-relaxed">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 z-0 shadow-md" />
                    {testimonials[current].quote}
                </div>

               
                <div className="mt-8 flex justify-center gap-2">
                    {
                    testimonials.map((_, i) => (
                        <span
                            key={i}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? 'bg-teal-500' : 'bg-gray-300'
                                }`}
                        ></span>
                    ))}
                </div>
            </div>

          
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-20"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-teal-500 text-white p-2 rounded-full shadow-md hover:bg-teal-600 z-20"
            >
                <ChevronRight size={20} />
            </button>

           
           
        </section>
    );
}
