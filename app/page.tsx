import Hero from "@/components/home/Hero";
import CategorySection from "@/components/home/Category";
import LatestSection from "@/components/home/Latest";
import Partnership from "@/components/home/Partner";
import data from "../public/data.json";

export default function Home() {
  return (
    <>
      <main className="flex-1 flex flex-col overflow-x-hidden py-8 px-6 lg:px-10 gap-5 md:gap-10">
        <Hero slides={data} />
        <CategorySection />
        <LatestSection />
        <Partnership />
      </main>
    </>
  );
}
