import React from "react";
import Nav from "../components/Nav";
import FeatureContainer, {
  ImagesData,
} from "../components/Home/FeatureContainer";
import DemoContainer from "../components/Home/DemoContainer";
import Testimonials from "../components/Home/Testimonials";
import ShopNow from "../components/Home/ShopNow";
import Faq from "../components/Home/Faq";
import Footer from "../components/Home/Footer";
import MainContainer from "../components/Home/MainContainer";
import MainContainerProduct from "../components/Product/MainContainerProduct";
import Features from "../components/Product/Features";
import featureImageDog2 from "../../assets/product/dog/overviewSection/2.png";
import featureImageDog1 from "../../assets/product/dog/overviewSection/1.png";
import featureImageDog3 from "../../assets/product/dog/overviewSection/3.png";

import featureImageCat2 from "../../assets/product/cat/overviewSection/2.png";
import featureImageCat1 from "../../assets/product/cat/overviewSection/1.png";
import featureImageCat3 from "../../assets/product/cat/overviewSection/3.png";
import Reviews from "../components/Product/Reviews";

import featureImage1_2 from "../../assets/home/feature_1-2.png";
import featureImage1_1 from "../../assets/home/feature_1-1.png";
import featureImage2_1 from "../../assets/home/feature_2-1.png";
import featureImage2_2 from "../../assets/home/feature_2-2.png";

import featureImage3_1 from "../../assets/home/feature_3-1.png";
import featureImage3_2 from "../../assets/home/feature_3-2.png";

type GpsTrackerProduct = {
  type: "dog" | "cat";
};
function GpsTrackerProduct({ type }: GpsTrackerProduct) {
  const imagesDataDog: ImagesData[] = [
    {
      image: featureImageDog1,
      title: "GPS Tracking",
      subTitle:
        "Track your dog's real-time location. Create Virtual Fences to keep them safe.",
      featuresData: [],
      leftImage: featureImage1_1,
      rightImage: featureImage1_2,
    },
    {
      image: featureImageDog2,
      title: "Health Alerts",
      subTitle:
        "Get alerts for changes in their sleep or activity. These act as an early warning system for indications of pain.",
      featuresData: [],
      leftImage: featureImage2_1,
      rightImage: featureImage2_2,
    },
    {
      image: featureImageDog3,
      title: "Activity Monitoring",
      subTitle:
        "Make sure your dog gets enough rest and exercise. Track walks and set goals.",
      featuresData: [],
      leftImage: featureImage3_1,
      rightImage: featureImage3_2,
    },
  ];
  const imagesDataCat: ImagesData[] = [
    {
      image: featureImageCat1,
      title: "GPS Tracking",
      subTitle:
        "Track your cat live with no distance limit. Set virtual fences to keep them safe.",
      featuresData: [],
      leftImage: featureImage1_1,
      rightImage: featureImage1_2,
    },
    {
      image: featureImageCat2,
      title: "Health Alerts",
      subTitle:
        "Get email alerts if there are changes in activity. Spot potential health issues early.",
      featuresData: [],
      leftImage: featureImage2_1,
      rightImage: featureImage2_2,
    },
    {
      image: featureImageCat3,
      title: "Activity Monitoring",
      subTitle: "Make sure your cat gets enough rest and exercises.",
      featuresData: [],
      leftImage: featureImage3_1,
      rightImage: featureImage3_2,
    },
  ];

  const imagesData = type == "dog" ? imagesDataDog : imagesDataCat;
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        margin: 0,
      }}
    >
      <Nav />
      <MainContainerProduct type={type} />
      <FeatureContainer imagesData={imagesData} />
      <Testimonials />
      <Features />
      <Reviews />
      <Faq />
      <Footer />
    </div>
  );
}

export default GpsTrackerProduct;
