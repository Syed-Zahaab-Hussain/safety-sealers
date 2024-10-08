import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { productsArray } from "./productContact";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Waterproofing Solutions",
    // description: introductionText,
  };
}
const ProductPage = () => {
  return (
    <>
      {/* Heading */}
      <div className="bg-red-600 h-52 flex items-center pl-12">
        <h1 className="text-white text-4xl font-bold">
          Waterproofing Solutions
        </h1>
      </div>
      {/* Show a list of products */}

      <div className="p-8 mb-8">
        <h2 className="text-2xl font-bold">Latest News and Events</h2>
        <div className="mt-6 grid grid-cols-3 gap-4">
          {productsArray.map((item, index) => (
            <Link key={index} href={`/products/${item.name.replace(" ", "-")}`}>
              <Card className="max-w-[350px]">
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full h-[250px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="250px"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
