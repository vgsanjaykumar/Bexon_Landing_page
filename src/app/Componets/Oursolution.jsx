'use client';

import React, { useState } from 'react';
import { Briefcase,Headphones,Leaf,Presentation,} from 'lucide-react';
import { FaMousePointer } from 'react-icons/fa';

const initialServices = [
    {
        title: 'Business Strategies Development',
        description:
            'Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized.',
        icon: Briefcase,
        image: '/solution/development.png',
    },
    {
        title: 'Customer Experience Solutions',
        description:
            'Customer Experience Solutions are designed to enhance every touchpoint of your customer journey, from first interaction.',
        icon: Headphones,
        image: '/solution/customer.png',
    },
    {
        title: 'Sustainability and ESG Consulting',
        description:
            'Provide tailored strategies that not only drive long-term value but also build trust with stakeholders, investors.',
        icon: Leaf,
        image: '/solution/Sustainability.png',
    },
    {
        title: 'Training and Development Programs',
        description:
            'Training and Development Programs are designed to empower employees with the skills, knowledge, and tools they need.',
        icon: Presentation,
        image: '/solution/trainning.png',
    },
];

const SolutionsSection = () => {
    const [activeIndex, setActiveIndex] = useState(1); 

    return (
        <section className="bg-[#e6f0ef] py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-teal-600 font-medium uppercase mb-2 tracking-wide">
                    Our Solutions
                </p>
                <h2 className="text-3xl sm:text-4xl font-semibold mb-12">
                    Tailor Business Solutions for Corporates.
                </h2>

                <div className="relative grid md:grid-cols-3 gap-6 items-center">
                   
                    <div className="flex flex-col gap-6">
                        {
                        initialServices.slice(0, 2).map((service, idx) => {
                            const actualIndex = idx;
                            const Icon = service.icon;
                            const isActive = activeIndex === actualIndex;

                            return (
                                <div
                                    key={idx}
                                    onClick={() => setActiveIndex(actualIndex)}
                                    className={`flex items-start gap-4 p-6 rounded-xl shadow-md cursor-pointer transition ${isActive ? 'bg-teal-600 text-white' : 'bg-white text-black'
                                        }`}
                                >
                                    <Icon className={`w-10 h-10 ${isActive ? 'text-white' : 'text-teal-600'}`} />
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg mb-1">{service.title}</h4>
                                        <p className="text-sm">{service.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                   
                    <div className="hidden md:flex justify-center items-center">
                        <img
                            src={initialServices[activeIndex].image}
                            alt="Service"
                            className="w-64 h-80 object-cover rounded-xl shadow-lg transition-all duration-300"
                        />
                    </div>

                   
                    <div className="flex flex-col gap-6">
                        {initialServices.slice(2).map((service, idx) => {
                            const actualIndex = idx + 2;
                            const Icon = service.icon;
                            const isActive = activeIndex === actualIndex;

                            return (
                                <div
                                    key={idx}
                                    onClick={() => setActiveIndex(actualIndex)}
                                    className={`flex items-start gap-4 p-6 rounded-xl shadow-md cursor-pointer transition ${isActive ? 'bg-teal-600 text-white' : 'bg-white text-black'
                                        }`}
                                >
                                    <Icon className={`w-10 h-10 ${isActive ? 'text-white' : 'text-teal-600'}`} />
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg mb-1">{service.title}</h4>
                                        <p className="text-sm">{service.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

               
                <div className="mt-10">
                    <button className="bg-teal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-500 transition">
                        More Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;
