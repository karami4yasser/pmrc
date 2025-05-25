import React, { useState } from "react";
import styled from "styled-components";
import catImage from "../../../assets/cat_30.png";
import i10 from "../../../assets/product/i10_white.jpeg";
import accent_black from "../../../assets/product/accent_black.jpeg";
import accent_gray from "../../../assets/product/accent_gray.jpeg";
import p208 from "../../../assets/product/208.jpeg";
import check from "../../../assets/check-mark.svg";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
type SelectedType = "dog" | "cat";
type SelectedColorType = "black" | "blue" | "gray";
function MainContainer() {
  const images = [accent_gray, i10, accent_black, p208];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const [selectedType, setSelectedType] = useState<SelectedType>("dog");

  const [selectedColor, setSelectedColor] =
    useState<SelectedColorType>("black");
  return (
    <Container>
      <LeftSideMainContainer>
        <Hero_Content>
          <Hero_ContentTitle>وكالة كراء سيارات</Hero_ContentTitle>
          <Hero_ContentSubTitle
            style={{
              textAlign: "center",
            }}
          >
            Puerto Marina Rent Car
          </Hero_ContentSubTitle>
        </Hero_Content>
        <Hero_Buttons>
          <a
            style={{
              textDecoration: "none",
            }}
            onClick={() => {
              document
                .getElementById("cars-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Hero_Button>سياراتنا</Hero_Button>
          </a>
          <a
            style={{
              textDecoration: "none",
            }}
            onClick={() => window.open("https://wa.me/212666655782", "_blank")}
          >
            <Hero_Button> اتصل بنا</Hero_Button>
          </a>
        </Hero_Buttons>
      </LeftSideMainContainer>

      <RightSideMainContainer>
        <CarouselWrapper>
          <ImageSlider $index={currentIndex}>
            {images.map((src, index) => (
              <CarouselImage key={index}>
                <img src={src} alt={`Image ${index + 1}`} />
              </CarouselImage>
            ))}
          </ImageSlider>

          <ChevronLeft onClick={goToPrev}>
            <svg
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <title>Previous</title>{" "}
              <path
                d="M28.5 20.666L13.8333 20.666"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M21.166 28L13.8327 20.6667L21.166 13.3333"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </svg>
          </ChevronLeft>

          <ChevronRight onClick={goToNext}>
            <svg
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <title>Next</title>{" "}
              <path
                d="M12.5 20.666L27.1667 20.666"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M19.834 28L27.1673 20.6667L19.834 13.3333"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </svg>
          </ChevronRight>
        </CarouselWrapper>
      </RightSideMainContainer>
    </Container>
  );
}

export default MainContainer;

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 96px 96px 96px 96px;
  gap: 100px;
  @media (max-width: 1268px) {
    flex-direction: column-reverse;
    gap: 0px;
    padding: 24px 0px;
  }
`;

const LeftSideMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  haight: 100%;

  gap: 48px;
  @media (max-width: 1268px) {
    padding: 48px 0px;
    gap: 12px;
    width: 100%;
  }
`;

const Hero_Content = styled.div`
  padding-right: 24px;

  @media (max-width: 1268px) {
    padding: 0px 24px;
  }
`;
const Hero_ContentTitle = styled.h1`
  font-size: 4rem;
  line-height: 4.5rem;
  margin: 0;
  padding: 0;

  @media (max-width: 1268px) {
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center;
  }
`;

const Hero_ContentSubTitle = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  margin: 0;
  padding: 0;
  margin-top: 28px;

  @media (max-width: 1268px) {
    font-size: 0.9rem;
    line-height: 1.6rem;
    margin-top: 12px;
    text-align: center;
  }
`;

const Hero_Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 24px;
  @media (max-width: 1268px) {
    padding: 0px 48px;
    justify-content: center;
  }
`;

const Hero_Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 7.5rem;

  height: 2rem;
  padding: 0.75rem 2.5rem;

  @media (max-width: 1268px) {
    min-width: fit-content;
    padding: 0.75rem 1.75rem;
  }

  font-size: 1rem;
  line-height: 1.5rem;
  @media (max-width: 1268px) {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }

  color: #fff;
  background: #1a73e8;
  border: none;
  border-radius: 9999px;
  transition: background 300ms ease-out, border 300ms ease-out;
  cursor: pointer;
  &:hover {
    background: rgba(26, 115, 232, 0.9);
  }
  font-weight: 900;
  white-space: nowrap;
`;

const RightSideMainContainer = styled.div`
  position: relative;

  height: 100%;
  width: 50%;
  @media (max-width: 1268px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;

  height: 100%;
  margin: 0 24px;
`;

const ImageSlider = styled.div<{ $index: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${({ $index }) => `-${$index * 100}%`});
  flex: 1;
`;

const CarouselImage = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  aspect-ratio: 3 / 2;
  background: #ddd;
  overflow: hidden;
  border-radius: 12px;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const ChevronLeft = styled.div`
  position: absolute;
  top: 90%;
  left: calc(5%);
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;
  z-index: 10;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #7d92a3;
  font-size: 35px;
  &:hover {
    color: black;
    background: rgba(255, 255, 255, 1);
  }
  @media (max-width: 1268px) {
    top: 85%;
  }
`;

const ChevronRight = styled.div`
  position: absolute;
  top: 90%;
  left: calc(5% + 64px);
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;
  z-index: 10;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #7d92a3;

  font-size: 35px;

  &:hover {
    color: black;
    background: rgba(255, 255, 255, 1);
  }
  @media (max-width: 1268px) {
    top: 85%;
  }
`;
