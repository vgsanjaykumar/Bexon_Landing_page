import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-[#d9e7e7] py-12 px-6 md:px-20 relative overflow-hidden rounded-b-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Left content */}
                <div className="max-w-xl space-y-6">
                    <p className="text-teal-700 font-semibold flex items-center gap-2 uppercase tracking-wide">
                        <img src="/logo.png" alt="logo" 
                        className="h-8 w-8" /> Get to Know Us
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold ">
                        Driving <br />
                        Excellence <br />
                        Through <br />
                        Evolution & <br />
                        Trust.
                    </h1>

                    <div className="flex items-center space-x-4">
                        <a href="#" className="flex items-center gap-2 bg-[#1e8a8a] text-white px-6 py-3 rounded-full shadow-md hover:bg-teal-800 transition">
                            Get Started <FaArrowRight />
                        </a>
                        <a href="tel:1-888-452-1505" className="flex items-center text-black font-semibold gap-2 hover:underline">
                            <FaPhoneAlt /> 1-888-452-1505
                        </a>
                    </div>
                </div>

                {/* Right image + CEO */}
                <div className="relative mt-10 md:mt-0">
                    <div className="rounded-2xl overflow-hidden shadow-xl relative">
                        <Image
                            src="/ceoimg.png" 
                            alt="CEO"
                            width={400}
                            height={500}
                            className="rounded-2xl object-cover"
                        />
                       
                    </div>

                    {/* Vertical text */}
                    <div className="absolute left-[-95px] top-1/2 transform -translate-y-1/2 rotate-[-90deg] text-center">
                        
                        <p className="text-black font-semibold"> <span className="text-[#1e8a8a] text-lg">•</span> Eade Marren</p>
                        <p className="text-xs text-gray-600">CEO & Founder</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
