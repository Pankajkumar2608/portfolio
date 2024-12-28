import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function Hero() {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="top-40 +left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[80vw] "
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      
        <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.3] bg-grid-small-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
        <div className="flex justify-center relative z-10 my-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] flex flex-col items-center justify-center">
                <h1 className="uppercase tracking-widest  text-xs text-center text-yellow-200 max-w-80">
                Not A Particular language devloper but a software Developer
                </h1>
                <TextGenerateEffect
                    words="Transforming Concept Into seamless Experience" 
                    className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    
                />
                <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
                  Hey I&apos;m Pankaj, a softwere devloper
                  based in INDIA
                </p>
                <a href="#about"><MagicButton
                
                />
                  </a>

            </div>
        </div>

    </div>
  );
}
