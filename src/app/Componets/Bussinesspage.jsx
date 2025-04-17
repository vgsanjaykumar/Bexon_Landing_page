import React from 'react';

const Bussinesspage = () => {
    return (
        <section className="bg-cover bg-center bg-no-repeat py-20" style={{ backgroundImage: "url('/backgroundpattern.png')" }}>
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className="relative w-full">


                    <div className='bg-[#06aeaeaf]'>
                        <img src="/bussiness process bg.jpg" alt="Team Working" className="rounded-xl shadow-lg w-full object-cover opacity-40" />

                    </div>


                    <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 bg-black/60 text-white p-4 sm:p-6 rounded-xl w-[90%] max-w-sm shadow-lg">
                        <h3 className="font-semibold mb-3 text-lg">Business Progress</h3>
                        <div className="mb-3">
                            <p className="text-sm">Revenue</p>
                            <div className="bg-gray-200 h-2 rounded">
                                <div className="bg-teal-500 h-2 rounded" style={{ width: '82%' }} />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm">Satisfaction</p>
                            <div className="bg-gray-200 h-2 rounded">
                                <div className="bg-teal-500 h-2 rounded" style={{ width: '90%' }} />
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <p className="text-teal-600 font-medium uppercase mb-2 tracking-wide">Get to Know Us</p>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 leading-snug">
                        Driving Innovation and Excellence for Sustainable Corporate Success{" "}
                        <span className="text-teal-600">Worldwide.</span>
                    </h2>


                    <div className="flex flex-col md:flex-row gap-4 mb-6">

                        <div className="bg-white p-6 rounded-xl shadow-md flex-1">
                            <h4 className="font-semibold text-lg mb-2">Our Mission</h4>
                            <p className="text-sm text-gray-600 mb-2">
                                our mission is empower businesses through innovate best solution, exceptional service.
                            </p>
                            <ul className="text-sm text-teal-700 list-disc pl-5">
                                <li>Innovation & Excellence</li>
                                <li>Exceptional Customer</li>
                                <li>Business Growth</li>
                            </ul>
                        </div>


                        <div className="bg-white p-6 rounded-xl shadow-md flex-1">
                            <h4 className="font-semibold text-lg mb-2">Our Vision</h4>
                            <p className="text-sm text-gray-600 mb-2">
                                Our vision is to become a global leader in providing transformative business solutions.
                            </p>
                            <ul className="text-sm text-teal-700 list-disc pl-5">
                                <li>Global Leadership</li>
                                <li>Transformative Impact</li>
                                <li>Sustainable Success</li>
                            </ul>
                        </div>
                    </div>


                    <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-500 transition">
                        Learn More About Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Bussinesspage;
