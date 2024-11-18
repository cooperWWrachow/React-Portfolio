import Intro from "@/components/intro";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Intro/>
      <About/>
    </div>
  );
}
