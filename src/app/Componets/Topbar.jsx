import {FaMapMarkerAlt,FaPhoneAlt,FaFacebookF,FaInstagram, FaTwitter,FaLinkedinIn,} from "react-icons/fa";

export default function Headertop() {
    return (
        <div className="bg-[#1e8a8a] text-white text-sm py-2 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">

               
                <div className="flex flex-wrap items-center gap-1 text-center md:text-left">
                    <span className="mr-1">⚙️</span>
                    <span>Recognized for Excellence</span>
                    <a href="#" className="ml-2 font-bold underline hover:opacity-90 whitespace-nowrap">
                        Join us Now <span className="ml-1">➤</span>
                    </a>
                </div>

               
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-1">
                        <FaMapMarkerAlt />
                        <span>Find a Location!</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaPhoneAlt />
                        <span>808-909-1313</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <a href="#"><FaFacebookF className="hover:opacity-70" /></a>
                        <a href="#"><FaInstagram className="hover:opacity-70" /></a>
                        <a href="#"><FaTwitter className="hover:opacity-70" /></a>
                        <a href="#"><FaLinkedinIn className="hover:opacity-70" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
