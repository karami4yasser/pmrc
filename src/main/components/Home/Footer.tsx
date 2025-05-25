import React from "react";
import styled from "styled-components";
import appStoreIcon from "../../../assets/app-store-badge.svg";
import playStoreIcon from "../../../assets/google-play-badge.svg";
function Footer() {
  return (
    <Wrapper>
      <Container>
        <ContainerLinks>
          <AppsLinks>
            <SectionIndicator>Tractive App</SectionIndicator>
            <h3>Get peace of mind on the go with the free Tractive GPS app.</h3>
            <div style={{ display: "flex", gap: 24 }}>
              <a
                href="https://itunes.apple.com/us/app/tractive-gps-pet-finder/id921588809?mt=8"
                data-tracking-event="app_store_link_click"
                data-tracking-action="App Store GPS"
                target="_blank"
                rel="noopener"
              >
                <img
                  src={appStoreIcon}
                  alt="app store badge"
                  height="40"
                  width="135"
                />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.tractive.android.gps"
                data-tracking-event="app_store_link_click"
                data-tracking-action="Play Store GPS"
                target="_blank"
                rel="noopener"
              >
                <img
                  src={playStoreIcon}
                  alt="google play badge"
                  height="40"
                  width="135"
                />
              </a>
            </div>
          </AppsLinks>
          <Menu>
            <div>
              <MenuHeader>Customer Care</MenuHeader>
              <div>
                <MenuLink>Shipping & Delivery</MenuLink>
                <MenuLink>Subscription Plans</MenuLink>
                <MenuLink>Customer Service</MenuLink>
                <MenuLink>Tracker Comparison</MenuLink>
              </div>
            </div>
            <div>
              <MenuHeader>Tractive</MenuHeader>
              <div>
                <MenuLink>Careers</MenuLink>
                <MenuLink>Subscription Plans</MenuLink>
                <MenuLink>Customer Service</MenuLink>
                <MenuLink>Tracker Comparison</MenuLink>
              </div>
            </div>
            <div>
              <MenuHeader>App</MenuHeader>
              <div>
                <MenuLink>LIVE GPS Tracking</MenuLink>
                <MenuLink>Health Monitoring</MenuLink>
                <MenuLink>Virtual Fences</MenuLink>
                <MenuLink>Danger Reports</MenuLink>
                <MenuLink>Danger Reports</MenuLink>
                <MenuLink>Danger Reports</MenuLink>
                <MenuLink>Danger Reports</MenuLink>
              </div>
            </div>
          </Menu>
        </ContainerLinks>
      </Container>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  padding: 2.5rem 1.5rem;
  margin: 24px;
  @media (max-width: 1268px) {
    margin: 0px;
  }
  color: #fff;
  background: #121623;
  border-radius: 0.75rem;

  @media (max-width: 1268px) {
    border-radius: 0rem;
  }
`;

const Container = styled.div`
  max-width: 1696px;
  margin: auto;

  padding: 4rem 10% 2rem;

  @media (max-width: 1268px) {
    margin: 0px;
  }
`;

const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4.75rem;

  gap: 4rem;

  @media (max-width: 1268px) {
    flex-direction: column;
  }
`;

const AppsLinks = styled.div`
  max-width: 20rem;
  margin-bottom: 3rem;
`;

const SectionIndicator = styled.div`
  display: inline-block;
  padding: 0.5rem 0.75rem;
  font-size: 0.9rem;
  font-weight: normal;
  color: #121623;
  background: #f5f5fa;
  border-radius: 0.5rem;
  transition: 150ms;

  display: inline-block;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);

  font-weight: 600;
`;

const Menu = styled.div`
  flex: 1;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 200px);

  @media (max-width: 1268px) {
    display: flex;
    flex-direction: column;
  }

  gap: 5%;
`;

const MenuHeader = styled.h2`
  display: block;
  font-weight: bold;
  unicode-bidi: isolate;

  font-size: 1.3rem;
  margin-bottom: 20px;
`;
const MenuLink = styled.p`
  color: #c0c2ca;
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  unicode-bidi: isolate;
`;
