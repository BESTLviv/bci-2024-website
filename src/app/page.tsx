import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Why } from "@/components/Why/Why";
import Footer from "@/components/Footer";
import Statistics from "@/components/Statistics";
import Collaboration from "@/components/Collaboration";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Header/>
      <Hero />
      <Why />
      <Statistics />
      <Collaboration />
      <Footer />
    </main>
  );
}
