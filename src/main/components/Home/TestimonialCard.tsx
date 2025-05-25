import React from "react";
import styled from "styled-components";
type TestimonialCardProps = {
  image: string;
  deviceImage: string;
};
function TestimonialCard({ image, deviceImage }: TestimonialCardProps) {
  return (
    <Container>
      {" "}
      <img src={image} alt="Dog in a field"></img>
      <Testimonial>
        <TestimonialTop>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="34"
              viewBox="0 0 31 34"
              fill="none"
            >
              {" "}
              <title>Paw</title>{" "}
              <path
                fill="#142027"
                d="M29.433 22.363c-1.147-1.757-4.023-1.712-5.596-2.785-3.28-2.218-3.52-6.898-8.313-6.215-4.67 1.2-3.124 5.602-5.338 8.902-1.05 1.588-3.709 2.632-4.124 4.697-.482 2.538 1.52 4.367 2.88 5.061 2.75 1.362 6.227-1.225 8.743-1.98.34-.107.702-.199 1.068-.27.347-.07.713-.141 1.091-.155 2.618-.235 6.812.822 8.842-1.48 1.033-1.165 2.197-3.597.766-5.779M29.647 11.529c-.177 2.458-1.787 4.357-3.636 4.22-1.85-.136-3.2-2.214-3.026-4.692.173-2.478 1.786-4.357 3.636-4.22 1.85.136 3.2 2.214 3.026 4.692M7.706 14.06c1.096 2.209.618 4.666-1.023 5.49-1.64.823-3.868-.32-4.964-2.529-1.095-2.208-.617-4.665 1.023-5.489 1.664-.808 3.869.32 4.964 2.529M12.858 6.096c1.095 2.208.617 4.665-1.023 5.489s-3.869-.32-4.945-2.532c-1.095-2.208-.617-4.666 1.023-5.49 1.645-.804 3.869.321 4.945 2.533M21.909 6.075c-.178 2.458-1.787 4.357-3.636 4.22-1.85-.136-3.2-2.214-3.027-4.692.178-2.458 1.787-4.357 3.636-4.22 1.85.136 3.18 2.218 3.027 4.692"
              ></path>{" "}
            </svg>
          </div>
          <p>
            Charlie loves the water, and thanks to Tractive, I can let him enjoy
            it worry-free! It is fully waterproof and stays securely attached to
            his harness. The GPS is incredibly reliable, so I always know where
            he is, even when he's out exploring the shoreline. The real-time
            tracking gives me total peace of mind.
          </p>
        </TestimonialTop>

        <TestimonialButton>
          <TestimonialButtonLeft>
            <TestimonialButtonLeftTitle>
              Charlie’s owner
            </TestimonialButtonLeftTitle>
            <TestimonialButtonLeftSubTitle>
              Tractive DOG 6
            </TestimonialButtonLeftSubTitle>
          </TestimonialButtonLeft>

          <TestimonialButtonRight>
            <TestimonialButtonRightInside>
              <img src={deviceImage}></img>
            </TestimonialButtonRightInside>
          </TestimonialButtonRight>
        </TestimonialButton>
      </Testimonial>
    </Container>
  );
}

export default TestimonialCard;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 304px;
  gap: 1.5rem;

  img {
    height: 390px;
    width: auto;
    aspect-ratio: auto;
    border-radius: 0.75rem;
  }

  cursor: auto;
`;

const Testimonial = styled.div`
  display: grid;
  grid-template-rows: 1fr 92px;
  height: fit-content;

  text-align: left;
  border-radius: 0.75rem;
  scroll-snap-align: start;
`;

const TestimonialTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  justify-content: space-between;

  padding: 1rem;

  background-color: #fff;
  border-radius: 0.75rem 0.75rem 0.75rem 0;

  padding: 1rem;

  p {
    font-size: 0.875rem;
    line-height: calc(1em + 0.5rem);
    font-weight: 600;
    cursor: default;
    user-select: none;
  }
`;

const TestimonialButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 92px;
  height: 90px;
`;

const TestimonialButtonLeft = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fff;
  border-radius: 0rem 0.75rem 0.75rem 0.75rem;

  gap: 0;
  justify-content: center;
  padding-left: 20px;
`;

const TestimonialButtonLeftTitle = styled.p`
  font-weight: 700;
  cursor: default;
  user-select: none;
`;

const TestimonialButtonLeftSubTitle = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem;
  color: #5c606e;
  letter-spacing: 1.5px;
  opacity: 67;
  margin-top: -10px;
  cursor: default;
  user-select: none;
`;

const TestimonialButtonRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const TestimonialButtonRightInside = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fcf8f3;
  border-radius: 0.75rem 0 0 0;

  img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 64px;
    height: 64px;
    padding: 0.25rem;
    overflow: clip;
    object-fit: contain;
    background-color: #fff;
    border-radius: 0.75rem;
  }
`;
