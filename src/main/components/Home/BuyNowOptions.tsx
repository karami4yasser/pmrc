import React, { useState } from "react";
import styled from "styled-components";

import accent_black from "../../../assets/product/accent_black.jpeg";
import accent_gray from "../../../assets/product/accent_gray.jpeg";
import p208 from "../../../assets/product/208.jpeg";
import i10 from "../../../assets/product/i10_white.jpeg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
type SelectedType = "Hundai Accent 2023" | "Hundai i10 2024" | "Peugeot 208";
type SelectedColorType = "black" | "blue" | "gray" | "move" | "white";
type CarFeature = {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  }; // Assuming you're passing components like <PersonIcon />
  text: string;
};
const colorMap: Record<SelectedColorType, string> = {
  black: "#000000",
  blue: "#007bff",
  gray: "#6c757d",
  move: "#a020f0", // assuming "move" means purple
  white: "#ffffff",
};

// Define the structure of a car color option
type CarColorOption = {
  image: string; // Replace with `StaticImageData` if using Next.js images
  features: CarFeature[];
};

// Define the full cars object type
export type CarsType = {
  [Model in SelectedType]?: {
    [Color in SelectedColorType]?: CarColorOption;
  };
};
function BuyNowOptions() {
  const [selectedType, setSelectedType] =
    useState<SelectedType>("Hundai Accent 2023");

  const [selectedColor, setSelectedColor] =
    useState<SelectedColorType>("black");

  const cars: CarsType = {
    "Hundai Accent 2023": {
      black: {
        image: accent_black,
        features: [
          {
            icon: PersonIcon,
            text: "+4",
          },
          {
            icon: SettingsIcon,
            text: "Automaric",
          },
          {
            icon: SettingsIcon,
            text: "Automaric",
          },
          {
            icon: LocalGasStationIcon,
            text: "Diesel",
          },
        ],
      },
      gray: {
        image: accent_gray,
        features: [
          {
            icon: PersonIcon,
            text: "+4",
          },
          {
            icon: SettingsIcon,
            text: "Manual",
          },
          {
            icon: SettingsIcon,
            text: "Manual",
          },
          {
            icon: LocalGasStationIcon,
            text: "Diesel",
          },
        ],
      },
    },
    "Hundai i10 2024": {
      white: {
        image: i10,
        features: [
          {
            icon: PersonIcon,
            text: "+4",
          },
          {
            icon: SettingsIcon,
            text: "Automaric",
          },
          {
            icon: SettingsIcon,
            text: "Automaric",
          },
          {
            icon: LocalGasStationIcon,
            text: "Diesel",
          },
        ],
      },
    },
    "Peugeot 208": {
      move: {
        image: p208,
        features: [
          {
            icon: PersonIcon,
            text: "+4",
          },
          {
            icon: SettingsIcon,
            text: "Automaric",
          },
          {
            icon: SettingsIcon,
            text: "Automaric",
          },
          {
            icon: LocalGasStationIcon,
            text: "Diesel",
          },
        ],
      },
    },
  };
  return (
    <Wrapper id="cars-section">
      {" "}
      {/*   <Empty style={{}}></Empty> */}
      <Title>
        👉 سياراتنا <span>تناسب جميع الاستخدامات</span>
      </Title>
      <Switcher>
        <SwitcherOption
          onClick={() => {
            setSelectedType("Hundai Accent 2023");
            setSelectedColor("black");
          }}
          isSelected={selectedType == "Hundai Accent 2023"}
        >
          Hundai Accent 2023
        </SwitcherOption>

        <SwitcherOption
          onClick={() => {
            setSelectedType("Hundai i10 2024");
            setSelectedColor("white");
          }}
          isSelected={selectedType == "Hundai i10 2024"}
        >
          Hundai i10 2024
        </SwitcherOption>

        <SwitcherOption
          onClick={() => {
            setSelectedType("Peugeot 208");
            setSelectedColor("move");
          }}
          isSelected={selectedType == "Peugeot 208"}
        >
          Peugeot 208
        </SwitcherOption>
      </Switcher>
      <DeviceContainer>
        <QualitiesLeft>
          {cars[selectedType]?.[selectedColor]?.features
            ?.slice(0, 2)
            .map((feature, index) => (
              <QualitiesFeature
                style={{
                  placeContent: "flex-end",
                  paddingRight: 24,
                }}
              >
                <p>{feature.text}</p>
                <QualitiesIcon>
                  <feature.icon
                    style={{
                      color: "white",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </QualitiesIcon>
              </QualitiesFeature>
            ))}
        </QualitiesLeft>
        <ImageContainer>
          <img
            width="280"
            height="280"
            src={cars[selectedType]?.[selectedColor]?.image || accent_black}
            style={{
              objectFit: "cover",
              width: "280px",
              height: "280px",
            }}
          />
        </ImageContainer>
        <QualitiesRight>
          {cars[selectedType]?.[selectedColor]?.features
            ?.slice(2, 4)
            .map((feature, index) => (
              <QualitiesFeature>
                <QualitiesIcon>
                  <feature.icon
                    style={{
                      color: "white",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </QualitiesIcon>
                <p>{feature.text}</p>
              </QualitiesFeature>
            ))}
        </QualitiesRight>
      </DeviceContainer>
      <PricingContainer>
        <PricingLeft>
          <PricingLeftContent>
            <h1
              style={{
                whiteSpace: "nowrap",
              }}
            >
              {selectedType}
            </h1>

            {/*  <h2>£59</h2> */}
          </PricingLeftContent>
        </PricingLeft>
        <PricingRight
          style={{
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "24px",
          }}
        >
          <PricingRightContent
            style={{
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {(Object.keys(cars[selectedType] || {}) as SelectedColorType[]).map(
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
                    color={color}
                  >
                    <ColorOption color={colorMap[color]} />
                  </ColorOptionWrapper>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 550,
                      color: color == "white" ? "gray" : colorMap[color],
                      opacity: selectedColor == color ? 1 : 0,
                    }}
                  >
                    {color}
                  </p>
                </div>
              )
            )}
          </PricingRightContent>
        </PricingRight>
      </PricingContainer>
      <BuyButtons>
        <a
          style={{
            margin: 0,
            padding: 0,
            width: "100%",
            height: "100%",
            textDecoration: "none",
          }}
          href={`https://wa.me/212666655782?text=${encodeURIComponent(
            `Hi, I'm interested in knowing more about the ${selectedType} in ${selectedColor} color.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonLearnMore>اعرف المزيد</ButtonLearnMore>
        </a>
        <a
          style={{
            margin: 0,
            padding: 0,
            width: "100%",
            height: "100%",
            textDecoration: "none",
          }}
          href={`https://wa.me/212666655782?text=${encodeURIComponent(
            `Hi, I'm interested in renting the ${selectedType} in ${selectedColor} color.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonBuy>احجز الآن</ButtonBuy>
        </a>
      </BuyButtons>
    </Wrapper>
  );
}

export default BuyNowOptions;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0 24px 0;

  @media (max-width: 1268px) {
    padding: 0px 0 24px 0;
  }

  align-items: center;
  align-content: center;

  min-height: 600px;
`;

const Empty = styled.div`
  height: 50px;

  z-index: -1;
  width: "100%";

  @media (max-width: 1268px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  line-height: 2.5rem;
  font-size: 600;
  span {
    color: #1a73e8;
  }

  @media (max-width: 1268px) {
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

const Switcher = styled.div`
  height: 48px;
  border: 2px solid #e3e4ea;
  border-radius: 9999px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

interface SwitcherOptionProps {
  isSelected: boolean;
}
const SwitcherOption = styled.button<SwitcherOptionProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0px 12px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;

  font-size: 1rem;
  font-weight: 600;
  background-color: ${({ isSelected }) => (isSelected ? "#1a73e8" : "white")};
  color: ${({ isSelected }) => (isSelected ? "white" : "#121623")};

  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? "#1664c1" : "#f0f0f0"};
  }
`;

const DeviceContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 48px;
  gap: 24px;
  width: 100%;
  @media (max-width: 1268px) {
    flex-direction: column;

    align-items: center;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  justify-content: center;
`;

const QualitiesLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;

  justify-content: space-around;
`;

const QualitiesRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;

  justify-content: space-around;
`;

const QualitiesIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1a73e8;
  width: 32px;
  height: 32px;
  border-radius: 8px;
`;

const QualitiesFeature = styled.div`
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

const PricingContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1268px) {
    flex-direction: column;

    padding: 0 24px;
    align-items: center;
  }

  align-items: center;
`;

const PricingLeft = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-end;
  width: 50%;

  @media (max-width: 1268px) {
    width: 100%;
    align-items: center;
  }
`;

const PricingLeftContent = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0px 120px;
  @media (max-width: 1268px) {
    flex-direction: row;
    padding: 0px 48px;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }

  h1 {
    font-weight: 600;
    font-size: 1.5rem;
  }
  h2 {
    color: #5c606e;
    font-size: 1rem;
    font-weight: 500;
    overflow-wrap: break-word;
  }
`;

const PricingRight = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
  width: 50%;
  @media (max-width: 1268px) {
    width: 100%;

    align-content: center;
  }
`;

const PricingRightContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1268px) {
    padding-right: 0px;
  }

  gap: 24px;
`;

interface ColorOptionWrapperProps {
  color: string;
}
const ColorOptionWrapper = styled.button<ColorOptionWrapperProps>`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 32px;

  border: ${({ color }) => color && `2px solid ${color}`};
  cursor: pointer;
`;

const ColorOption = styled.button<ColorOptionWrapperProps>`
  width: 16px;
  height: 16px;
  border-radius: 16px;
  background: ${({ color }) => color && `${color}`};
  border: none;
  cursor: pointer;
`;

const BuyButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  margin-top: 50px;
`;

const ButtonBuy = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 8.5rem;
  @media (max-width: 1268px) {
    min-width: 3.5rem;
    width: 50%;
  }
  height: 2.5rem;
  padding: 0.75rem 2.5rem;
  font-size: 1rem;

  line-height: 1.5rem;
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

const ButtonLearnMore = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 8.5rem;
  white-space: nowrap;

  @media (max-width: 1268px) {
    min-width: 3.5rem;
    width: 50%;
  }

  height: 2.5rem;
  padding: 0.75rem 2.5rem;
  font-size: 1rem;

  line-height: 1.5rem;
  color: #fff;
  background: #1a73e8;
  border: none;
  border-radius: 9999px;
  transition: background 300ms ease-out, border 300ms ease-out;
  cursor: pointer;

  font-weight: 900;

  color: #121623;
  background: #fff;
  border: 1px solid #5c606e;
  &:hover {
    border: 1px solid #1a73e8;
    background: rgba(26, 115, 232, 0.3);
  }
`;
