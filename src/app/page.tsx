
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import { LampContainer } from "./components/ui/lamp";
import Grid from "./components/Grid";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-black text-white relative overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav 
          navItems={[
            {
              name: "Home",
              link: "/",
              icon: <FaHome />,
            },
            {
              name: "About",
              link: "/about",
              
            },
            {
              name: "Projects",
              link: "/projects",
            },
            {
              name: "Contact",
              link: "/contact",
            },
          ]}
        />
        
         <Hero />
        < Grid />
        
      </div>
    </main>
  );
}
