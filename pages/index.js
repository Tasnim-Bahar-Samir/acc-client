import Head from "next/head";
import FeatureWashingMachines from "../components/home/FeatureWashingMachines";
import ProductSection from "../components/home/ProductSection";
import Slider from "../components/home/Slider";
import LandingLayout from "../components/layout/LandingLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Acc Walton</title>
      </Head>
      <main>
        <Slider />
        <div className="bg-[#000B35]">
          <div className="w-5/6 mx-auto">
            <ProductSection />
            <FeatureWashingMachines />
          </div>
        </div>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};
