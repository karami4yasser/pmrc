import React from "react";
import styled from "styled-components";
import newProduct from "../../../assets/NewProduct.png";
function NewProduct() {
  return (
    <Wrapper>
      <Container>
        <div
          style={{
            width: "70%",

            display: "flex",
            flexDirection: "column",
          }}
        >
          <Overview>New Product</Overview>
          <h1>Meet our newest dog tracker</h1>
          <h2>
            Improved design. New features. Our new dog tracker comes with Bark
            Monitoring and more.
          </h2>
          <Hero_Button>Shop Now</Hero_Button>
        </div>
      </Container>
    </Wrapper>
  );
}

export default NewProduct;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 1268px) {
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 110px;
  border-radius: 32px;
  min-height: 400px;
  @media (max-width: 1268px) {
    min-height: 200px;
    margin-top: 0px;
    border-radius: 0px;
  }

  background: red;
  position: relative;
  background-image: url(${newProduct});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 52px 45px;

  @media (max-width: 1268px) {
    padding: 52px 15px;
  }

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
`;

const Overview = styled.div`
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
  cursor: pointer;
`;

const Hero_Button = styled.div`
  margin-top: 10px;
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

  @media (max-width: 1268px) {
    padding: 0.75rem 1.5rem;
  }
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
`;
