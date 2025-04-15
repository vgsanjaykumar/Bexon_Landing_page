import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaPaperPlane,
    FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
    return (
       
        
        <footer >
            <div className="bg-[#0b1d20] text-white pt-16 pb-6 relative">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {/* Logo & Social */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="bg-teal-500 w-5 h-5 rounded-sm" />
                        <h2 className="text-xl font-bold">Bexon</h2>
                    </div>
                    <p className="text-sm mb-4 text-gray-400">
                        Developing personalized customer journeys to increase satisfaction & loyalty.
                    </p>
                    <div className="flex gap-3 text-gray-300">
                        <FaFacebookF className="hover:text-teal-400 cursor-pointer" />
                        <FaInstagram className="hover:text-teal-400 cursor-pointer" />
                        <FaTwitter className="hover:text-teal-400 cursor-pointer" />
                        <FaLinkedin className="hover:text-teal-400 cursor-pointer" />
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h3 className="font-semibold mb-3">Services</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>Customer Experience</li>
                        <li>Training Programs</li>
                        <li>Business Strategy</li>
                        <li>Training Program</li>
                        <li>ESG Consulting</li>
                        <li>Development Hub</li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>Contact us</li>
                        <li>Team Member</li>
                        <li>Recognitions</li>
                        <li>
                            Careers{" "}
                            <span className="text-xs bg-teal-500 px-2 py-0.5 rounded-full ml-1">NEW</span>
                        </li>
                        <li>News</li>
                        <li>Feedback</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="font-semibold mb-3">Our Office</h3>
                    <p className="text-sm text-gray-400">
                        993 Renner Burg, West Rond, MT 94251-030, USA.
                    </p>
                    <p className="mt-2 text-sm">
                        <strong>P:</strong> +1 (009) 544-7818
                    </p>
                    <p className="text-sm">
                        <strong>M:</strong> support@bexon.com
                    </p>
                    <p className="text-sm mt-2 text-gray-400">🕒 Mon-Fri 10am–10pm</p>
                </div>
            </div>

            {/* Newsletter */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-12">
                <div className="bg-gray-800 p-6 rounded-xl grid gap-4 sm:grid-cols-2 items-center">
                    <h4 className="text-xl font-semibold leading-snug">
                        Subscribe to Our Newsletter.
                    </h4>
                    <div>
                        <div className="flex items-center bg-gray-700 p-2 rounded-lg">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="bg-transparent outline-none text-sm text-white w-full px-2"
                            />
                            <button className="text-teal-400 hover:text-teal-300">
                                <FaPaperPlane size={18} />
                            </button>
                        </div>
                        <div className="mt-2 flex items-center text-sm">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-gray-300">
                                agree to our <strong>Terms & Condition?</strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Awards */}
            <div className="text-center mt-10 text-sm text-gray-400">
                <div className="flex flex-col sm:flex-row justify-center gap-8 mb-4 text-white">
                    <div>
                        <p className="text-2xl font-bold">18</p>
                        <p>Clutch Awards</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">5</p>
                        <p>Awwwards</p>
                    </div>
                </div>
               
            </div>

            {/* Scroll to Top */}
            <a
                href="#"
                className="fixed bottom-6 right-6 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-500 transition"
                aria-label="Scroll to top"
            >
                <FaArrowUp />
            </a>
            </div>
            <div className="text-center">
                <div className="  p-4 text-white  bg-teal-600">
                    <p>© 2025 Bexon All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}
