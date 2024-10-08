import Head from "next/head";
import { Inter } from "@next/font/google";
import HomeMain from "@/src/components/home";
// category
const inter = Inter({ subsets: ["latin"] });

export default function Home({ result }) {
  return (
    <>
      <Head>
        <title>Shopify|Making shopping easy</title>
        <meta name="description" content="Shopping for better experiennce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeMain result={result} />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(`https://fakestoreapi.com/products`);
  const result = await response.json();
  console.log(result);

  return {
    props: { result },
  };
}
