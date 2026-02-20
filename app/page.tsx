import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Hero from "@/components/home/Hero";
import CategorySection from "@/components/home/Category";
import LatestSection from "@/components/home/Latest";
import Partnership from "@/components/home/Partner";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="mx-auto flex max-w-screen-2xl">
        <Sidebar />

        <main className="flex-1 overflow-x-hidden py-8 px-6 lg:px-10">
          <Hero />
          <CategorySection />
          <LatestSection />
          <Partnership />
        </main>
      </div>

      <Footer />
    </>
  );
}