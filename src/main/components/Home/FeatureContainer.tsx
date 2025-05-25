import React from "react";
import styled from "styled-components";
import cardImage from "../../../assets/card1.png";
import cardLeft from "../../../assets/cardLeft.png";
import cardRight from "../../../assets/cardRight.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

type FeatureContainerProps = {
  imagesData: ImagesData[];
};
export type ImagesData = {
  image: string;
  title: string;
  subTitle: string;
  featuresData: FeatureData[];
  leftImage?: string;
  rightImage?: string;
};
export type FeatureData = {
  title: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
};
function FeatureContainer({ imagesData }: FeatureContainerProps) {
  return (
    <Container>
      <Overview>Overview</Overview>
      <OverviewSubTitle>
        Over 1 million pet owners trust Tractive
      </OverviewSubTitle>
      <Cards>
        {imagesData.map((imageData, index) => (
          <Card key={index}>
            <CardImage>
              <img src={imageData.image} alt="Dog in a field"></img>
              <div
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "-70px",
                }}
              >
                <img
                  style={{
                    height: "100px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                  src={imageData.leftImage ? imageData.leftImage : cardLeft}
                  alt="Dog in a field"
                ></img>
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: "5%",
                  right: "-70px",
                }}
              >
                <img
                  style={{
                    height: "100px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                  src={imageData.rightImage ? imageData.rightImage : cardRight}
                  alt="Dog in a field"
                ></img>
              </div>
            </CardImage>
            <>
              <h1>{imageData.title}</h1>
              <h2>{imageData.subTitle}</h2>
            </>
            <div
              style={{
                display: "flex",
                flexDirection: "column",

                padding: 0,
                gap: 0,
                marginTop: 0,
              }}
            >
              {imageData.featuresData.map((featureData, index) => {
                return (
                  <CardFeature key={index}>
                    <CardFeatureIcon>
                      {/* <NotificationsIcon
                        style={{
                          color: "#262626",
                          width: "20px",
                          height: "20px",
                        }}
                      /> */}
                      {
                        <featureData.Icon
                          style={{
                            color: "#262626",
                            width: "20px",
                            height: "20px",
                          }}
                        />
                      }
                    </CardFeatureIcon>
                    <p>{featureData.title}</p>
                  </CardFeature>
                );
              })}
            </div>
          </Card>
        ))}
      </Cards>
    </Container>
  );
}

export default FeatureContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fcf8f3;

  padding: 52px 96px;
  border-radius: 32px;

  @media (max-width: 1268px) {
    border-radius: 0px;
    padding: 24px 70px;
  }
`;

const Overview = styled.div`
  justify-self: start;

  width: fit-content;
  margin: auto;
  margin-bottom: 1.5rem;
  color: #155cba;
  background: #d1e3fa;
  border-radius: 0.75rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-weight: 800;
  font-size: 1rem;
  line-height: 1.5rm;
`;

const OverviewSubTitle = styled.div`
  justify-self: start;

  margin-inline: auto;
  margin-bottom: 2rem;
  color: #121623;
  text-align: center;
  text-wrap: balance;

  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rm;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 86px;

  @media (max-width: 1268px) {
    flex-direction: column;
    padding: 0px 0px;
  }
`;

const Card = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 1268px) {
    flex-direction: column;
  }
  gap: 0px;
  h1 {
    color: #121623;
    text-align: left;
    text-wrap: balance;

    font-weight: 600;
    font-size: 1.5rem;
  }

  h2 {
    color: #5c606e;
    text-align: left;
    text-wrap: balance;
    font-size: 1rem;
  }
  img {
    height: auto;
    width: 100%;
    aspect-ratio: 1.6;
    object-fit: cover;
    object-position: top;
    border-radius: 0.75rem;
  }
`;
const CardImage = styled.div`
  img {
    height: auto;
    width: 100%;
    aspect-ratio: 1.6;
    object-fit: cover;
    object-position: top;
    border-radius: 0.75rem;
  }
  position: relative;
`;


const CardImageSides = styled.img`
  height: 60px;
  width: auto;
  aspect-ratio: 1.6;
  object-fit: cover;
`;

const CardFeature = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin: 0;

  padding: 0;
  height: fit-content;

  p {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const CardFeatureIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f1e7d4;
  width: 32px;
  height: 32px;
  border-radius: 8px;
`;
