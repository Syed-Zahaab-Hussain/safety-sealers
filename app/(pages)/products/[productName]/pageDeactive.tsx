import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { productsArray } from "../productContact";

interface Params {
  productName: string;
}

import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { productName } = params;
  return {
    title: productName,
  };
}
export async function generateStaticParams() {
  const params = productsArray.map((product) => ({
    params: { productName: product.name.replace(" ", "-").toLowerCase() },
  }));

  return params;
}

const ProductDescription = ({ params }: { params: Params }) => {
  const { productName } = params;

  const foundProduct = productsArray.find(
    (item) => item.name === productName.replace("-", " ")
  );

  return (
    <>
      {/* Heading */}
      <div className="bg-red-600 h-52 flex items-center pl-12">
        {foundProduct ? (
          <h1 className="text-white text-4xl font-bold">{foundProduct.name}</h1>
        ) : (
          <h1 className="text-white text-4xl font-bold">Product not found</h1>
        )}
      </div>
      {/* Description */}
      <div className="w-full p-16">
        {foundProduct && (
          <Card className="border-none">
            <CardContent className="flex flex-col md:flex-row gap-16">
              <div className="w-full md:w-1/2">
                {foundProduct.properties &&
                  foundProduct.properties.map((property, index) => (
                    <div key={index} className="mb-8">
                      <div className="flex gap-4 items-center mb-4">
                        <h2 className="text-xl font-semibold">
                          {property.name}
                        </h2>
                        <div className="w-8 h-1 bg-background-main mt-1" />
                      </div>
                      <div className="pl-4">
                        {property.explanations.map((explain, subIndex) => (
                          <div
                            key={subIndex}
                            className="flex items-center mb-2"
                          >
                            <span className="mr-2">→</span>
                            <p>{explain}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-4">
                    {foundProduct.name}
                    <div className="w-8 h-1 bg-background-main mt-1" />
                  </h2>
                  <p>{foundProduct.description}</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-square">
                  <Image
                    src={foundProduct.image}
                    alt={foundProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default ProductDescription;
