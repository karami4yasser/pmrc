import React from "react";
import styled from "styled-components";
import cat from "../../../assets/buyNowCat.png";
import dog from "../../../assets/buyNowDog.png";
function ShopNow() {
  return (
    <Container>
      <ContainerContent>
        <a
          style={{
            margin: 0,
            padding: 0,
            width: "100%",
            height: "100%",
          }}
          href="/gps-tracker-dog"
        >
          <CardItem>
            <ImageCard>
              <img src={dog} alt="Dog in a field"></img>
              <div
                style={{
                  zIndex: 10,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <ImageCardHeadline>Dog Tracker</ImageCardHeadline>
                <ImageCardButton>Shop Now</ImageCardButton>
              </div>
            </ImageCard>
          </CardItem>
        </a>
        <a
          style={{
            margin: 0,
            padding: 0,
            width: "100%",
            height: "100%",
          }}
          href="/gps-tracker-cat"
        >
          <CardItem>
            <ImageCard>
              <img src={cat} alt="Cat in a field"></img>
              <div
                style={{
                  zIndex: 10,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <ImageCardHeadline>Cat Tracker</ImageCardHeadline>
                <ImageCardButton>Shop Now</ImageCardButton>
              </div>
            </ImageCard>
          </CardItem>
        </a>
      </ContainerContent>
    </Container>
  );
}

export default ShopNow;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 32px 32px 0px 0px;
  min-height: 420px;
  gap: 21px;
  width: 100%;
  padding: 5rem 0;

  @media (max-width: 1268px) {
    border-radius: 0px;
  }
`;

const ContainerContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 5rem;
  padding: 0 5rem;

  @media (max-width: 1268px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
  }
`;

const CardItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ImageCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  color: #fff;
  cursor: pointer;

  &:hover img {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1.6;
    object-fit: cover;
    object-position: top;
    border-radius: 0.75rem;
    transition: transform 0.4s ease-in-out;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(38, 38, 38, 0) 50%,
      rgba(38, 38, 38, 0.6) 100%
    );
    background-blend-mode: multiply;
    z-index: 2;
  }

  > div {
    position: absolute;
    bottom: 1.5rem;

    @media (max-width: 1268px) {
      bottom: 0.5rem;
    }

    left: 0;
    right: 0;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
  }
`;

const ImageCardHeadline = styled.div`
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #fff;
  text-align: center;

  @media (max-width: 1268px) {
    font-size: 1.2rem;
  }
`;

const ImageCardButton = styled.div`
  touch-action: manipulation;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 7.5rem;

  height: 3rem;

  padding: 0.75rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: 1268px) {
    min-width: fit-content;
    height: 1rem;
  }

  border: none;
  border-radius: 9999px;
  transition: background 300ms ease-out, border 300ms ease-out;

  &:hover {
    border: 1px solid #1a73e8;
    background: rgba(26, 115, 232, 0.8);
    color: #fff;
  }

  color: #1a73e8;
  background: #fff;
`;
