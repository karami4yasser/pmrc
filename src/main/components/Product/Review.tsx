import React from "react";
import styled from "styled-components";
import stars5 from "../../../assets/stars5.png";
import verified from "../../../assets/product/reviewChecked.png";
function Review() {
  return (
    <Container>
      <ReviewTop>
        <p>Randall Parker,</p>
        <span>15 hours ago</span>
      </ReviewTop>
      <ReviewStars>
        <img src={stars5} />
      </ReviewStars>
      <ReviewText>
        <p>
          I wish it was smaller for my 30# dog but as long as it works, I am
          happy.
        </p>
      </ReviewText>

      <ReviewVerified>
        <ReviewVerifiedIcon>
          <img src={verified} />
        </ReviewVerifiedIcon>
        <span>Verified, collected by Tractive</span>
      </ReviewVerified>
    </Container>
  );
}

export default Review;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0;

  width: 100%;
  border-bottom: 1px solid #d6d6d6;
  gap: 12px;
  padding: 12px 0;
`;

const ReviewTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  color: #5c5c70;

  p {
    font-weight: 700;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  span {
    font-weight: 500;
    font-size: 14px;
    margin: 0;
    padding: 0;
  }
`;

const ReviewStars = styled.div`
  display: flex;
  flex-direction: row;

  img {
    height: 20px;
  }
`;

const ReviewText = styled.div`
  display: flex;
  flex-direction: row;

  p {
    color: #1b1b21;
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    padding: 0;
  }
`;

const ReviewVerified = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  span {
    color: #1b1b21;
    font-size: 13px;
    font-weight: 500;
    margin: 0;
    padding: 0;
  }
`;

const ReviewVerifiedIcon = styled.div`
  display: flex;
  flex-direction: row;
  background: #5c5c70;
  padding: 4px;

  border-radius: 16px;

  img {
    width: 12px;
  }
`;
