import { MetadataRoute } from "next";
// import { productsArray } from "./(pages)/products/productContact";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const params = productsArray.map((product) => ({
  //   params: { productName: product.name.replace(" ", "-").toLowerCase() },
  // }));

  //   console.log(params);
  // const postEntries: MetadataRoute.Sitemap = params.map(
  //   ({ params: { productName } }) => ({
  //     url: `${
  //       process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_LOCAL_URL
  //     }/products/${productName}`,
  //   })
  // );

  return [
    {
      url: `${
        process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_LOCAL_URL
      }/about-us/the-group`,
    },
    {
      url: `${
        process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_LOCAL_URL
      }/about-us/company-profile`,
    },
    {
      url: `${
        process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_LOCAL_URL
      }/products`,
    },
    // ...postEntries,
    {
      url: `${
        process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_LOCAL_URL
      }/blog`,
    },
    {
      url: `${
        process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_LOCAL_URL
      }/contact-us`,
    },
  ];
}
