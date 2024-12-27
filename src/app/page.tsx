
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-black text-white relative overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
