// import Image from "next/image";
import {
  Navbar,
  Hero,
  HowItWorks,
  GetStarted,
  Benefits,
  About,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="">
      <section className="">
        <Navbar />
        <div className="max-w-6xl px-5 mx-auto section-y bg-white">
          <Hero />
          <HowItWorks />
        </div>
        <GetStarted />
        <div className="max-w-6xl px-5 mx-auto section-y bg-white">
          <Benefits />
          <About />
          <Contact />
        </div>
      </section>

      <Footer />
    </main>
  );
}
