import React, { useState } from "react";
import styled from "styled-components";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import cat1 from "../../../assets/product_slider/cat1.png";
import cat2 from "../../../assets/product_slider/cat2.png";
import device1 from "../../../assets/product_slider/device1.png";
import stars5 from "../../../assets/stars5.png";
import check from "../../../assets/check-mark.svg";


import dog1 from "../../../assets/product_slider/dog1.png";
import dog2 from "../../../assets/product_slider/dog2.png";
import dog3 from "../../../assets/product_slider/dog3.png";

import product1 from "../../../assets/product/product1.png";
type SelectedType = "dog" | "cat";
type SelectedColorType = "black" | "blue" | "gray";

type MainContainerProductProps = {
  type: "dog" | "cat";
};

function MainContainerProduct({ type }: MainContainerProductProps) {
  const imagescat = [cat1, device1, cat2];
  const imagesDog = [dog1, dog2, dog3];
  const images = type == "dog" ? imagesDog : imagescat;
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

  const catProductData = {
    title: "GPS & Health Tracker for Cats",
    trackerName: "Tractive CAT Mini",
  };

  const dogProductData = {
    title: "GPS & Health Tracker for Dogs",
    trackerName: "Tractive Dog Mini",
  };

  const selectedProductData = type == "dog" ? dogProductData : catProductData;

  return (
    <Container>
      <ProductHero>
        <ProductHeroLeft>
          <CarouselWrapper>
            <ImageSlider $index={currentIndex}>
              {images.map((src, index) => (
                <CarouselImage key={index}>
                  <img src={src} alt={`Image ${index + 1}`} />
                </CarouselImage>
              ))}
            </ImageSlider>

            <ChevronLeft onClick={goToPrev}>
              <ChevronLeftIcon fontSize="inherit" />
            </ChevronLeft>

            <ChevronRight onClick={goToNext}>
              <ChevronRightIcon fontSize="inherit" />
            </ChevronRight>
          </CarouselWrapper>
        </ProductHeroLeft>

        <ProductHeroRight>
          <ProductInfoHeader>
            <h3>Rated “Excellent” on TrustPilot</h3>{" "}
            <h1>{selectedProductData.title}</h1>{" "}
          </ProductInfoHeader>

          <ReviewSectionHeader>
            <ReviewSectionHeaderLeft>
              <img src={stars5} />
              <a>
                <span>
                  {" "}
                  <span>936</span> <span>Reviews</span>{" "}
                </span>
                <ReviewSectionHeaderRightDownChevron>
                  <span>⌄</span>
                </ReviewSectionHeaderRightDownChevron>
              </a>
            </ReviewSectionHeaderLeft>
            <ReviewSectionHeaderRight>
              <a
              /*     href="#reviews" */
              >
                <span>Read reviews</span>
              </a>
            </ReviewSectionHeaderRight>
          </ReviewSectionHeader>

          <ProductInfoFeatures>
            <ProductFeature>
              <img height="26" src={check} alt="Checkmark Icon"></img>
              <p>Track with live GPS. Discover their territory.</p>
            </ProductFeature>

            <ProductFeature>
              <img height="26" src={check} alt="Checkmark Icon"></img>
              <p>Know every detail of your cat's day.</p>
            </ProductFeature>

            <ProductFeature>
              <img height="26" src={check} alt="Checkmark Icon"></img>
              <p>Health Alerts & Activity Monitoring</p>
            </ProductFeature>

            <ProductFeature>
              <img height="26" src={check} alt="Checkmark Icon"></img>
              <p>Free award-winning safety collar included</p>
            </ProductFeature>
          </ProductInfoFeatures>

          <ProductChoose>
            <p>Choose a tracker</p>

            <ProductCard>
              <div
                style={{
                  padding: "1rem",
                }}
              >
                <ProductCardHeader>
                  <ProductCardHeaderLeft>
                    <img
                      src={product1}
                      height="80"
                      alt="TRCAT5DB"
                      data-sku="TRCAT5DB"
                    ></img>
                  </ProductCardHeaderLeft>
                  <ProductCardHeaderRight>
                    <h2>{selectedProductData.trackerName}</h2>
                    <ProductCardHeaderRightSubTitle>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <title>Battery</title>{" "}
                        <path
                          d="M16.0439 10.0001L16.0439 10.0929L16.1333 10.0681C16.4105 9.99128 16.6526 9.81214 16.8176 9.56362C16.9817 9.31659 17.0596 9.01626 17.0388 8.71476C17.0597 8.41319 16.9817 8.11276 16.8177 7.86562C16.6526 7.61699 16.4106 7.43772 16.1333 7.36074L16.0439 7.33592L16.0439 7.42871L16.0439 10.0001Z"
                          fill="#142027"
                          stroke="#142027"
                          stroke-width="0.141083"
                        ></path>{" "}
                        <rect
                          x="2.29994"
                          y="5.4305"
                          width="12.7285"
                          height="6.46761"
                          rx="1.60027"
                          stroke="#142027"
                          stroke-width="0.799469"
                        ></rect>{" "}
                        <rect
                          x="3.57776"
                          y="6.70801"
                          width="10.1739"
                          height="3.91304"
                          rx="0.571429"
                          fill="black"
                        ></rect>{" "}
                      </svg>
                      <span>Up to 7 days without charging</span>
                    </ProductCardHeaderRightSubTitle>
                  </ProductCardHeaderRight>
                </ProductCardHeader>

                <ProductCardOptions>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <span>Color – {selectedColor}</span>
                  </div>
                  <PricingRightContent>
                    {(["black", "gray", "blue"] as SelectedColorType[]).map(
                      (color) => (
                        <div
                          style={{
                            flexDirection: "column",
                            display: "flex",
                            alignItems: "center",
                            width: "32px",
                          }}
                        >
                          <ColorOptionWrapper
                            onClick={() => {
                              setSelectedColor(color);
                            }}
                            color={selectedColor == color ? color : "#e3e4ea"}
                          >
                            <ColorOption color={color} />
                          </ColorOptionWrapper>
                        </div>
                      )
                    )}
                  </PricingRightContent>
                </ProductCardOptions>

                <ProductCardPrice>
                  <ProductCardPriceLeft>
                    <h1>34,30 €</h1>
                    <span>49 €</span>
                  </ProductCardPriceLeft>

                  <ProductCardPriceRight>You save 30%</ProductCardPriceRight>
                </ProductCardPrice>

                <BuyNow>Add To Cart</BuyNow>
              </div>
            </ProductCard>
          </ProductChoose>
        </ProductHeroRight>
      </ProductHero>
    </Container>
  );
}

export default MainContainerProduct;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0px;

  @media (max-width: 1268px) {
    flex-direction: column-reverse;
  }
`;

const ProductHero = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 2fr) minmax(30rem, 1fr);
  gap: 1rem;
  margin: 0 24px;

  @media (max-width: 1268px) {
    grid-template-columns: 1fr;
  }
`;

const ProductHeroLeft = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;

  height: 100%;
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
  top: 50%;
  left: 8px;
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
    background: rgba(255, 255, 255, 0.9);
  }
`;

const ChevronRight = styled.div`
  position: absolute;
  top: 50%;
  right: 8px;
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
    background: rgba(255, 255, 255, 0.9);
  }
`;

const ProductHeroRight = styled.div`
  padding: 0 1rem;
`;
const ProductInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;

  h3 {
    font-size: 0.875rem;

    color: #464b5a;
  }
  h1 {
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.5rem;
  }
`;

const ReviewSectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0;
`;
const ReviewSectionHeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-right: 1px solid #e3e4ea;

  padding-right: 12px;
  margin-right: 12px;
  img {
    width: auto;
    height: 1.25rem;
    display: block;
  }

  span {
    font-weight: 600;
    white-space: nowrap;
    cursor: pointer;
    font-size: 0.75;
    color: #121623;
  }
  a {
    touch-action: manipulation;
    cursor: pointer;
    text-decoration: none;
  }
`;

const ReviewSectionHeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  a {
    touch-action: manipulation;
    cursor: pointer;
    text-decoration: none;
  }

  span {
    font-weight: 600;
    white-space: nowrap;
    cursor: pointer;
    font-size: 0.85rem;
    color: #121623;
    border-bottom: 2px solid #121623; /* black underline */
  }
`;

const ReviewSectionHeaderRightDownChevron = styled.div`
  display: inline-block;
  transition: transform 0.3s ease;
  transform: rotate(0deg); // default

  &::after {
    content: "›"; // or "▼", or a better chevron symbol
    display: inline-block;
    transform: rotate(90deg);
    font-size: 1rem;
    color: #121623;
  }

  span {
    display: none; // optional if not needed
  }
`;

const ProductInfoFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 20px;
  justify-content: flex-start;
  border-bottom: 1px solid #e3e4ea;
  padding-bottom: 20px;
`;

const ProductFeature = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 40px;
  padding: 0;
  margin: 0;

  img {
    width: 1rem;
    height: 1rem;
    background-color: #f5f5fa;
    border-radius: 0.25rem;
  }

  p {
    padding: 0.25rem 0;
    margin-left: 0.75rem;
    font-size: 0.875rem;
    overflow-wrap: break-word;

    font-family: Poppins, sans-serif;
    font-weight: 550;
    color: #121623;
  }
`;

const ProductChoose = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;

  p {
    adding-top: 1.25rem;
    padding-bottom: 0.25rem;
    font-size: 0.75rem;
    color: #464b5a;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 550;
    font-family: Poppins, sans-serif;
  }
`;

const ProductCard = styled.div`
  border: 1px solid #464b5a;
  border-radius: 16px;
  margin: 0;
  flex: 1;
  width: 100%;
`;

const ProductCardHeader = styled.div`
  display: flex;
  gap: 1rem;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e3e4ea;
`;

const ProductCardHeaderLeft = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  background-color: #f5f5fa;
  border-radius: 0.75rem;
`;

const ProductCardHeaderRight = styled.div`
  flex: 2;

  h2 {
    font-size: 1rem;
    font-weight: 600;
  }
`;

const ProductCardHeaderRightSubTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
  gap: 6px;

  span {
    color: #464b5a;
    font-size: 0.75rem;
    font-weight: 600;
    width: calc(100% - 1.3rem);
    overflow-wrap: break-word;
  }
`;

const ProductCardOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-itemns: center;

  padding: 0.75rem 0.5rem;

  border-bottom: 1px solid #e3e4ea;

  span {
    font-size: 0.875rem;
    color: #464b5a;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: Poppins, sans-serif;
    font-weight: 550;
  }
`;

const PricingRightContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 1268px) {
    padding-right: 0px;
  }

  gap: 24px;
  flex: 2;
`;

interface ColorOptionWrapperProps {
  color: string;
}
const ColorOptionWrapper = styled.button<ColorOptionWrapperProps>`
  width: 36px;
  height: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 32px;

  border: ${({ color }) => color && `2px solid ${color}`};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const ColorOption = styled.button<ColorOptionWrapperProps>`
  width: 24px;
  height: 24px;
  border-radius: 16px;
  background: ${({ color }) => color && `${color}`};
  border: none;
  cursor: pointer;
`;

const ProductCardPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-itemns: center;

  padding: 0.75rem 0.5rem;

  h1 {
    font-size: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: Poppins, sans-serif;
    font-weight: 550;
    color: #b42f4f;
    white-space: nowrap;
  }
  span {
    text-decoration: line-through;
    color: #5c606e;
    white-space: nowrap;
    margin-left: 0.5rem;
    font-size: 0.6rem;
  }
`;

const ProductCardPriceLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  flex: 1;

  h1 {
    font-size: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: Poppins, sans-serif;
    font-weight: 550;
    color: #b42f4f;
    white-space: nowrap;
  }
  span {
    text-decoration: line-through;
    color: #5c606e;
    white-space: nowrap;
    margin-left: 0.5rem;
    font-size: 1.1rem;
  }
`;

const ProductCardPriceRight = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;

  background-color: #d93856;

  font-size: 0.75rem;
  font-weight: 550;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  border-radius: 0.5rem;

  align-content: center;
  width: fit-content;

  padding: 0 0.5rem;
`;

const BuyNow = styled.button`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;

  height: 3.5rem;
  padding: 0.75rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  color: #fff;
  background: #1a73e8;
  border: none;
  border-radius: 9999px;
  touch-action: manipulation;
  cursor: pointer;
  transition: background 300ms ease-out, border 300ms ease-out;
  &:hover {
    border: 1px solid #1a73e8;
    background: rgba(26, 115, 232, 0.9);
    color: #fff;
  }
`;

