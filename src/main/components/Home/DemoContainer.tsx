import React from "react";
import styled from "styled-components";
/* import demoVideo from "../../../assets/demo"; */
function DemoContainer() {
  return (
    <ContainerDemo>
      <div
        style={{
          height: "220px",
          background: "#121623",
          position: "absolute",
          top: "-220px",
          zIndex: -1,
          width: "100%",
          borderRadius: "32px 32px 0 0",
        }}
      ></div>
      <Container>
        <Content
          style={{
            paddingTop: "45px",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <h1>
            {" "}
            Get the Tractive GPS app.
            <br /> Rated with4.7/5 on iOS and Android.
          </h1>
        </Content>
        <Content
          style={{
            flex: 1,
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
            minHeight: "610px",

            alignContent: "center",
          }}
        >
          <RigtSide style={{}}>
            <h1> Easy to use and intuitive</h1>
            <h2
              style={{
                marginTop: -5,
              }}
            >
              That's what customers love about the Tractive GPS app.
            </h2>
            <Hero_Button>Get Your Tracker</Hero_Button>
          </RigtSide>
        </Content>
      </Container>

      <NormalVideoContainer>
        <StyledVideo controls>
          <source
            src={
              "https://assets.tractive.com/assets/static/videos/tractive-dog-6/trdog6_preview.mp4"
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </StyledVideo>
      </NormalVideoContainer>
    </ContainerDemo>
  );
}

export default DemoContainer;

const ContainerDemo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 110px 0 100px 0;

  min-height: 420px;
  background: #121623;

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
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  @media (max-width: 1268px) {
    align-text: center;
  }

  h1 {
    color: white;
    text-wrap: balance;

    font-weight: 600;
    font-size: 1.2rem;
  }

  h2 {
    color: white;
    text-wrap: balance;

    font-weight: 500;
    font-size: 1rem;
  }

  flex: 1;
  height: 100%;
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
  color: #fff;
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

  color: #fff;

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
    bottom: 120px;
    border-radius: 0px;
    background: red;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
