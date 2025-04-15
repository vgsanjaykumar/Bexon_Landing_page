import BlogSection from "./Componets/Blog";
import Bussinesspage from "./Componets/Bussinesspage";
import Clients from "./Componets/Cilent";
import FAQSection from "./Componets/F&a";
import FeaturesSection from "./Componets/Features";
import Footer from "./Componets/Footer";
import Hero from "./Componets/Hero";
import Navbar from "./Componets/Navbar";
import ProudProjects from "./Componets/Ourdream";
import SolutionsSection from "./Componets/Oursolution";
import MeetOurTeam from "./Componets/Ourteam";
import Testimonials from "./Componets/Testmonial";
import Headertop from "./Componets/Topbar";


export default function Home() {
  return (
    <div className="">
      <Headertop />
      <div className=" ">
        <Navbar />
        <Hero />
      </div>
      <Clients />
      <FeaturesSection />
      <Bussinesspage />
      <SolutionsSection />
      <ProudProjects />
      <Testimonials />
      <MeetOurTeam />
      <BlogSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
