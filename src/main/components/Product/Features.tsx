import React from "react";
import styled from "styled-components";
import featureImage2 from "../../assets/home/feature_2.png";
import featureImage1 from "../../assets/home/feature_1.png";
import featureImage3 from "../../assets/home/feature_3.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import RoomIcon from "@mui/icons-material/Room";
import AlignVerticalCenterIcon from "@mui/icons-material/AlignVerticalCenter";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import ReplayIcon from "@mui/icons-material/Replay";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import { ImagesData } from "../Home/FeatureContainer";
function Features() {
  const featuresData = [
    {
      title: "Precise GPS Tracking. Worldwide Coverage.",
      featuresData: [
        {
          title: "Live location",
          subtitle: "Get location updates in real-time.",
          Icon: RoomIcon,
        },
        {
          title: "Virtual Fences with escape alerts",
          subtitle: "Set safe spaces with escape alerts.",
          Icon: AlignVerticalCenterIcon,
        },
        {
          title: "Location History",
          subtitle: "Discover their past routes and favorite spots.",
          Icon: AlignVerticalCenterIcon,
        },
      ],
    },
    {
      title: "Health Insights: Your Early Warning System",
      featuresData: [
        {
          title: "Sleep & Activity",
          subtitle:
            "See if your dog is getting enough movement and quality sleep.",
          Icon: PriorityHighIcon,
        },
        {
          title: "Bark Monitoring",
          subtitle:
            "We can detect if your dog is barking more or less than usual, which might point to a potential health issue.",
          Icon: ReplayIcon,
        },
        {
          title: "Health Alerts",
          subtitle:
            "Get alerts if there are changes in your dog's behavior you should be aware of.",
          Icon: NotificationsIcon,
        },
      ],
    },
  ];

  return (
    <ContainerDemo>
      <Container>
        <Content
          style={
            {
              /*  paddingLeft: "5rem", */
            }
          }
        >
          <Overview style={{}}>Features</Overview>
          <h1> {featuresData[0].title}</h1>

          <FeaturesContainer>
            {featuresData[0].featuresData.map((feature, index) => {
              return (
                <FeatureItem key={index}>
                  <FeatureItemIconLeft>
                    {/* <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <title>{feature.title}</title>{" "}
                      <rect width="48" height="48" rx="8" fill="#F5EDDE"></rect>{" "}
                      <path
                        d="M15.044 16.0347L20.7358 32.479C20.9787 33.188 21.9888 33.1686 22.2122 32.4498L24.5045 25.0096C24.5391 24.888 24.6048 24.7774 24.695 24.6889C24.7853 24.6003 24.8971 24.5368 25.0193 24.5045L32.4498 22.2122C33.1686 21.9888 33.188 20.9787 32.479 20.7358L16.0347 15.044C15.8965 14.9954 15.7475 14.9869 15.6047 15.0194C15.4619 15.0519 15.3311 15.124 15.2276 15.2276C15.124 15.3311 15.0519 15.4619 15.0194 15.6047C14.9869 15.7475 14.9954 15.8965 15.044 16.0347Z"
                        stroke="#262626"
                        stroke-width="2.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </svg> */}

                    <feature.Icon
                      style={{
                        color: "#262626",
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </FeatureItemIconLeft>
                  <FeatureItemContentRight>
                    <h1>{feature.title}</h1>
                    <p>{feature.subtitle}</p>
                  </FeatureItemContentRight>
                </FeatureItem>
              );
            })}
          </FeaturesContainer>
        </Content>
        <Content
          style={{
            flex: 1,
            paddingLeft: 0,
          }}
        >
          <PhoneFrame>
            <PhoneVideo autoPlay muted loop playsInline>
              <source
                src={
                  "https://assets.tractive.com/assets/static/videos/app-teaser-phone-video.mp4"
                }
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </PhoneVideo>
          </PhoneFrame>
        </Content>
        <Content
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            paddingTop: "200px",

            alignContent: "center",
            paddingLeft: 0,
          }}
        >
          <RigtSide style={{}}>
            <h1> {featuresData[1].title}</h1>
            <FeaturesContainer>
              {featuresData[1].featuresData.map((feature, index) => {
                return (
                  <FeatureItem key={index}>
                    <FeatureItemIconLeft>
                      {/* <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <title>{feature.title}</title>{" "}
                      <rect width="48" height="48" rx="8" fill="#F5EDDE"></rect>{" "}
                      <path
                        d="M15.044 16.0347L20.7358 32.479C20.9787 33.188 21.9888 33.1686 22.2122 32.4498L24.5045 25.0096C24.5391 24.888 24.6048 24.7774 24.695 24.6889C24.7853 24.6003 24.8971 24.5368 25.0193 24.5045L32.4498 22.2122C33.1686 21.9888 33.188 20.9787 32.479 20.7358L16.0347 15.044C15.8965 14.9954 15.7475 14.9869 15.6047 15.0194C15.4619 15.0519 15.3311 15.124 15.2276 15.2276C15.124 15.3311 15.0519 15.4619 15.0194 15.6047C14.9869 15.7475 14.9954 15.8965 15.044 16.0347Z"
                        stroke="#262626"
                        stroke-width="2.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </svg> */}

                      <feature.Icon
                        style={{
                          color: "#262626",
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    </FeatureItemIconLeft>
                    <FeatureItemContentRight>
                      <h1>{feature.title}</h1>
                      <p>{feature.subtitle}</p>
                    </FeatureItemContentRight>
                  </FeatureItem>
                );
              })}
            </FeaturesContainer>
          </RigtSide>
        </Content>
      </Container>
    </ContainerDemo>
  );
}

export default Features;

const ContainerDemo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0 0px 0;

  min-height: 420px;
  background: #fcf8f3;

  position: relative;
  align-items: center;
  align-content: center;

  border-radius: 0px 0px 32px 32px;

  @media (max-width: 1268px) {
    border-radius: 0px;
    padding: 0;
    min-height: 220px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  border-radius: 32px 32px 0px 0px;
  min-height: 420px;

  gap: 21px;

  width: 100%;

  @media (max-width: 1268px) {
    flex-direction: column;
  }
`;

const RigtSide = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  @media (max-width: 1268px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    align-content: center;
    margin-top: -10rem;
    margin-bottom: 0rem;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5rem;

  h1 {
    text-wrap: balance;
    text-align: left;
    font-weight: 600;
    font-size: 2rem;
    margin: 0;
    padding: 0;
    @media (max-width: 1268px) {
      text-align: center;
    }
  }

  h2 {
    text-wrap: balance;

    font-weight: 500;
    font-size: 1rem;
    padding: 0;
  }

  flex: 1;
  height: 100%;

  @media (max-width: 1268px) {
    text-align: center;
    margin-bottom: 24px;
    align-content: center;
    align-items: center;
    align-text: center;
    padding-left: 0;
  }
`;

// Phone-style container
const PhoneFrame = styled.div`
  width: 280px;
  height: 570px;
  border-radius: 40px;
  background: #111;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  @media (max-width: 1268px) {
    height: fit-content;
  }
`;

// Video inside the phone
const PhoneVideo = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 24px;
  object-fit: cover;
`;

const Hero_Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 7.5rem;
  @media (max-width: 1268px) {
    min-width: fit-content;
  }
  height: 2rem;
  padding: 0.75rem 2.5rem;
  font-size: 1rem;

  line-height: 1.5rem;

  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 9999px;
  transition: background 300ms ease-out, border 300ms ease-out;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  font-weight: 900;
  width: fit-content;
  cursor: pointer;

  border: 1px solid #fff;
`;

const NormalVideoContainer = styled.div`
  width: 100%;
  max-width: 900px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  position: absolute;
  bottom: -250px;

  @media (max-width: 1268px) {
    bottom: 0px;
    border-radius: 0px;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Overview = styled.div`
  justify-self: start;

  width: fit-content;
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

const FeaturesContainer = styled.div`
  gap: 1.5rem;
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  box-sizing: border-box;
`;

const FeatureItemIconLeft = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  background: #f5edde;
  width: 48px;
  height: 48px;
  border-radius: 8px;
`;

const FeatureItemContentRight = styled.div`
  width: 100%;
  max-width: 350px;
  text-align: start;
  h1 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #121623;
    text-wrap: pretty;
    padding: 0;
    margin: 0;
    padding-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #5c606e;
    text-wrap: pretty;
    font-weight: 550;
    padding: 0;
    margin: 0;
  }
`;
