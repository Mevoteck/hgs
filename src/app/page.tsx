import Contact from "@/components/home/Contact";
import PropertyManagement from "@/components/home/PropertyManagement";
import Properties from "@/components/home/Properties";
import Services from "@/components/home/Services";
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Properties />
        <PropertyManagement />
        <Contact />
      </main>
      
    </>
  );
}