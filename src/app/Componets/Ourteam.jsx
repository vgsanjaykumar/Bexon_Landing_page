'use client';

import { useState } from 'react';
import { ArrowUpRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

const team = [
    {
        id: 1,
        name: 'Kabileshwarn V',
        title: 'Chief Executive',
        image: '/our team/1.png',
        socials: [
            { icon: <Facebook size={16} />, url: '#' },
            { icon: <Instagram size={16} />, url: '#' },
            { icon: <Twitter size={16} />, url: '#' },
            { icon: <Linkedin size={16} />, url: '#' },
        ],
    },
    {
        id: 2,
        name: 'Saravana Kumar',
        title: 'Operations Head',
        image: '/our team/2.png',
        socials: [
            { icon: <Facebook size={16} />, url: '#' },
            { icon: <Instagram size={16} />, url: '#' },
            { icon: <Twitter size={16} />, url: '#' },
            { icon: <Linkedin size={16} />, url: '#' },
        ],
    },
    {
        id: 3,
        name: 'Selvaganesh',
        title: 'Marketing Head',
        image: '/bussiness process bg.jpg',
        socials: [
            { icon: <Facebook size={16} />, url: '#' },
            { icon: <Instagram size={16} />, url: '#' },
            { icon: <Twitter size={16} />, url: '#' },
            { icon: <Linkedin size={16} />, url: '#' },
        ],
    },
    {
        id: 4,
        name: 'Roslin Richards',
        title: 'Business Director',
        image: '/our team/4.png',
        socials: [
            { icon: <Facebook size={16} />, url: '#' },
            { icon: <Instagram size={16} />, url: '#' },
            { icon: <Twitter size={16} />, url: '#' },
            { icon: <Linkedin size={16} />, url: '#' },
        ],
    },
];

export default function MeetOurTeam() {
    const [activeId, setActiveId] = useState(1);
    const activeMember = team.find((member) => member.id === activeId);

    return (
        <section className="bg-[#ecf0f0] py-20 px-4 duration-300">
            <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-8 items-start justify-between">
                <div className="flex-1">
                    <p className="text-sm text-teal-600 font-semibold mb-2">MEET OUR TEAM</p>
                    <h2 className="text-4xl font-bold mb-3">People Behind Bexon.</h2>

                    <div className="rounded-xl overflow-hidden bg-[#bccccc] max-w-md mx-auto lg:mx-0 duration-500">
                        {activeMember?.image && (
                            <Image
                                src={activeMember.image}
                                alt={activeMember.name}
                                width={600}
                                height={700}
                                className="object-cover w-full h-[500px] duration-300"
                            />
                        )}
                    </div>
                </div>

                <div className="flex-1 space-y-4 w-full">
                    {team.map((member) => (
                        <div
                            key={member.id}
                            onClick={() => setActiveId(member.id)}
                            className={`p-6 bg-white rounded-xl shadow-sm cursor-pointer transition-all flex justify-between items-center ${member.id === activeId ? 'border-2 border-teal-500' : 'hover:bg-gray-100'
                                }`}
                        >
                            <div>
                                <h3 className="text-lg font-semibold">{member.name}</h3>
                                <p className="text-sm text-gray-500">{member.title}</p>
                                {member.id === activeId && member.socials && (
                                    <div className="flex gap-3 mt-3 text-gray-600">
                                        {member.socials.map((social, index) => (
                                            <a key={index} href={social.url} target="_blank" rel="noreferrer">
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {member.id === activeId && (
                                <ArrowUpRight className="text-teal-600 w-5 h-5" />
                            )}
                        </div>
                    ))}

                    <div className="text-right mt-4">
                        <button className="inline-flex items-center px-5 py-2 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition">
                            More Members
                            <ArrowUpRight className="ml-2 bg-black rounded-full p-1 w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
