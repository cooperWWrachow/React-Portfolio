import Intro from "@/components/intro";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Intro/>
      <div className="flex flex-col space-y-10 items-center justify-center">
        <Navbar/>
        <About/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}
