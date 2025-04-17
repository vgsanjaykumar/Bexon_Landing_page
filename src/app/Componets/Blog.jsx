'use client';

import Image from 'next/image';

const blogs = [
    {
        id: 1,
        title: 'Harnessing Digital Transform a Roadmap Businesses.',
        author: 'Ellinien Loma',
        date: '8 Dec',
        category: 'Business',
        image: '/project/Event Management Platform.png',
    },
    {
        id: 2,
        title: 'Harnessing Digital Transform a Roadmap Businesses.',
        author: 'Ellinien Loma',
        date: '8 Mar',
        category: 'Business',
        image: '/solution/development.png',
    },
    {
        id: 3,
        title: 'Mastering Change Management Lessons for Businesses.',
        author: 'Ellinien Loma',
        date: '28 Jan',
        category: 'Business',
        image: '/bussiness process bg.jpg',
    },
];

export default function BlogSection() {
    return (
        <section className="py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/backgroundpattern.png')", }} >
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-sm text-teal-600 font-semibold text-center mb-2">READ BLOGS</p>
                <h2 className="text-4xl font-bold text-center mb-12">Strategies and Insights.</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="relative rounded-xl overflow-hidden shadow-md group">
                            <Image src={blog.image} alt={blog.title} width={400} height={500} className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-300" />
                            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm font-medium">
                                <span className="block leading-none text-lg">{blog.date.split(' ')[0]}</span>
                                <span className="text-xs">{blog.date.split(' ')[1]}</span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                                <p className="text-xs opacity-80 mb-1">
                                    <span className="bg-white/10 px-2 py-0.5 rounded mr-2">{blog.category}</span>
                                    By {blog.author}
                                </p>
                                <h3 className="text-base font-semibold leading-snug">{blog.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
