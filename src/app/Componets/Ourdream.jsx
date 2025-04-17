'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';


const projects = [
    {
        id: 1,
        title: 'Event Management Platform',
        tag: 'Business',
        image: '/project/Event Management Platform.png',
    },
    {
        id: 2,
        title: 'Rebranding Strategy for a Growing',
        tag: 'Business',
        image: '/project/Rebranding Strategy for a Growing.png',
        external: true,
    },
    {
        id: 3,
        title: 'Interactive Learning Platform',
        tag: 'Business',
        image: '/project/Interactive Learning Platform.png',
    },
    {
        id: 4,
        title: 'Environmental Impact Dashboard',
        tag: 'Business',
        image: '/project/Environmental Impact Dashboard.png',
    },
];

const ProudProjects = () => {
    const [activeCard, setActiveCard] = useState(null);

    const handleClick = (id) => {
        setActiveCard(id === activeCard ? null : id);
    };

    return (
        <section className="bg-[#071e1e] py-20 px-4 text-white">
            <div className="max-w-7xl mx-auto">
                <p className="text-teal-400 uppercase font-semibold mb-2 tracking-wider text-center">Proud Projects</p>
                <h2 className="text-4xl font-bold mb-10 text-center">
                    Breaking Boundaries,<br />Building Dreams.
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                    projects.map((project) => (
                        <div key={project.id} onClick={() => handleClick(project.id)} className={`rounded-xl overflow-hidden cursor-pointer transition-all shadow-lg ${activeCard === project.id ? 'ring-2 ring-teal-400' : ''  }`}>
                            
                            <div className='bg-[#008080a6]'>
                                <Image src={project.image} alt={project.title} width={100} height={100} className="w-full h-[250px] sm:h-[220px] lg:h-[267px] opacity-65" />
                            </div>
                            
                            <div className="bg-[#0f2b2a] p-5 h-36 flex flex-col justify-between">
                                <span className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-300 w-max">
                                    {project.tag}
                                </span>
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    {project.title}
                                    {project.external && <ArrowUpRight className="w-4 h-4 text-teal-400" />}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProudProjects;
