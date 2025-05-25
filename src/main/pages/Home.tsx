import React from "react";
import Nav from "../components/Nav";
import styled from "styled-components";

import MainContainer from "../components/Home/MainContainer";
import FeatureContainer, {
  ImagesData,
} from "../components/Home/FeatureContainer";
import NewProduct from "../components/Home/NewProduct";
import DemoContainer from "../components/Home/DemoContainer";
import BuyNowOptions from "../components/Home/BuyNowOptions";
import Testimonials from "../components/Home/Testimonials";
import ShopNow from "../components/Home/ShopNow";
import Faq from "../components/Home/Faq";
import Footer from "../components/Home/Footer";
import featureImage2 from "../../assets/home/feature_2.png";
import featureImage1 from "../../assets/home/feature_1.png";
import featureImage3 from "../../assets/home/feature_3.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import RoomIcon from "@mui/icons-material/Room";
import AlignVerticalCenterIcon from "@mui/icons-material/AlignVerticalCenter";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import ReplayIcon from "@mui/icons-material/Replay";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

import featureImage1_2 from "../../assets/home/feature_1-2.png";
import featureImage1_1 from "../../assets/home/feature_1-1.png";
import featureImage2_1 from "../../assets/home/feature_2-1.png";
import featureImage2_2 from "../../assets/home/feature_2-2.png";

import featureImage3_1 from "../../assets/home/feature_3-1.png";
import featureImage3_2 from "../../assets/home/feature_3-2.png";

function Home() {
  const imagesData: ImagesData[] = [
    {
      image: featureImage1,
      title: "Precise GPS Tracking",
      subTitle:
        "Follow your pet's every step in real-time. Never lose track thanks to reliable GPS technology.",
      featuresData: [
        {
          title: "Live location",
          Icon: RoomIcon,
        },
        {
          title: "Virtual Fences with escape alerts",
          Icon: AlignVerticalCenterIcon,
        },
      ],
      leftImage: featureImage1_1,
      rightImage: featureImage1_2,
    },
    {
      image: featureImage2,
      title: "Smart Health Alerts",
      subTitle:
        "Get alerts for changes in their sleep or activity. These act as an early warning system for potential health issues.",
      featuresData: [
        {
          title: "Get activity & sleep alerts",
          Icon: NotificationsIcon,
        },
        {
          title: "Detect potential issues early",
          Icon: PriorityHighIcon,
        },
      ],
      leftImage: featureImage2_1,
      rightImage: featureImage2_2,
    },
    {
      image: featureImage3,
      title: "Activity Monitoring",
      subTitle:
        "Set goals. Spot patterns. Compare to furry friends like them. Make sure they get enough rest and exercise.",
      featuresData: [
        {
          title: "Activity & Sleep Tracking",
          Icon: ReplayIcon,
        },
        {
          title: "Goals & Leaderboards",
          Icon: SignalCellularAltIcon,
        },
      ],
      leftImage: featureImage3_1,
      rightImage: featureImage3_2,
    },
  ];
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
      <MainContainer />
      {/* <FeatureContainer imagesData={imagesData} /> */}
      <BuyNowOptions />
     {/*  <Testimonials /> */}
      <Faq />
      <Footer />
    </div>
  );
}

export default Home;
