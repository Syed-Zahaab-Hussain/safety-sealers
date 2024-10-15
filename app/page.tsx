import BeforeAfterSection from "@/components/BeforeAfterSection";
import ServiceCard from "@/components/ServiceCard";
import ChooseUsSection from "@/components/ChooseUsSection";
import { beforeAfterImages, serviceArray } from "./homeContent";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="flex justify-center items-center bg-red-600 text-white py-20 h-[63vh]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center bg-red-500 p-7 rounded-md">
              <h1 className="sm:text-6xl text-4xl font-bold mb-4 uppercase">
                Safety Sealers
              </h1>
              <p className="sm:text-xl text-md">
                Waterproofing Consultants, Engineers & Contractors
                Ruberiods&#39;s Contract Agent
              </p>
              <p className="sm:text-xl text-md font-bold mt-2">
                The Poineers of Roofing Business in Pakistan
              </p>
            </div>
          </div>
        </section>
        <div className="container mx-auto">
          <ServiceCard serviceArray={serviceArray} />
          <ChooseUsSection />
          <BeforeAfterSection images={beforeAfterImages} />
        </div>
      </main>
    </div>
  );
}
