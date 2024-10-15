import Image from "next/image";

const ChooseUsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto min-w-full px-6">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="space-y-2">
              <li className="text-justify">
                {/* <span className="text-red-600 mr-2">•</span> */}
                Consult us for your requirements of water proofing, insulation,
                joint sealing & concrete admixtures
              </li>
              <li className="text-center font-semibold">and</li>
              <li className="text-justify">
                Services as specialist contractors. Over a billion sq ft of roof
                and basement area waterproofed
              </li>
              <li className="text-justify">
                Your contacting us for water proofing jobs will prove that you
                did the right thing & got the best service at right place
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/others/difference-section-image.jpg"
              alt="Coffee"
              width={600}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
