import React, { useRef } from "react";
import styled from "styled-components";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TestimonialCard from "./TestimonialCard";
import Test1 from "../../../assets/Test1.png";
import Test2 from "../../../assets/Test2.png";
import Test3 from "../../../assets/Test3.png";
import Test4 from "../../../assets/Test4.png";
import device1 from "../../../assets/device1.png";
import device2 from "../../../assets/device2.png";

function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (!scrollRef.current) return;

    const scrollAmount = 550; // adjust as needed

    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "7.5rem 0",
        }}
      >
        <TopSection style={{}}>
          <Overview style={{}}>Testimonials</Overview>
          <TopSectionInside style={{}}>
            <Title>What pet parents have to say</Title>
            <CarouselControles>
              <CarouselControle onClick={() => scroll("left")}>
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
                    stroke="#262626"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M21.166 28L13.8327 20.6667L21.166 13.3333"
                    stroke="#262626"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </svg>
              </CarouselControle>

              <CarouselControle onClick={() => scroll("right")}>
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
                    stroke="#262626"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M19.834 28L27.1673 20.6667L19.834 13.3333"
                    stroke="#262626"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </svg>
              </CarouselControle>
            </CarouselControles>
          </TopSectionInside>
        </TopSection>

        <ScrollWrapper ref={scrollRef}>
          {[
            { image: Test1, deviceImage: device1 },
            { image: Test2, deviceImage: device1 },
            { image: Test3, deviceImage: device1 },
            { image: Test4, deviceImage: device1 },
            { image: Test1, deviceImage: device1 },
            { image: Test2, deviceImage: device1 },
            { image: Test3, deviceImage: device1 },
            { image: Test4, deviceImage: device1 },
          ].map((item, index) => (
            <TestimonialCard
              key={index}
              image={item.image}
              deviceImage={item.deviceImage}
            />
          ))}
        </ScrollWrapper>
      </div>
    </Wrapper>
  );
}

export default Testimonials;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fcf8f3;
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

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 7.5rem;

  @media (max-width: 1268px) {
    padding: 0 0.5rem;
  }
`;

const TopSectionInside = styled.div`
  display: flex;
  flex-direction: row;

  width: "100%";

  @media (max-width: 1268px) {
    padding: 0 0.5rem;
    flex-direction: column;
    gap: 24px;
  }
`;

const Title = styled.div`
  font-size: 3rem;
  line-height: 3.5rm;
  font-weight: 600;

  @media (max-width: 1268px) {
    font-size: 1.5rem;
  }
  flex: 1;
`;

const CarouselControles = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  @media (max-width: 1268px) {
    gap: 1px;
    display: none;
  }

  justify-content: flex-end;
`;
const CarouselControle = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 1rem;

  /* Optional: hide scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }

  padding-left: 5rem;
  padding-right: 5rem;

  padding-top: 4rem;

  @media (max-width: 1268px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
