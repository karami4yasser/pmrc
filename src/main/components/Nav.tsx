import React, { useState } from "react";
import Logo from "./Logo";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Banner>
        <BannerText>تخفيضات بمناسبة عيد الأضحى</BannerText>
      </Banner>

      <Header>
        <HeaderLogo>
          <a
            style={{
              textDecoration: "none",
              margin: 0,
              padding: 0,
            }}
            href="/"
          >
            <Logo />
          </a>
        </HeaderLogo>

        {/* Hamburger for mobile */}
        <Hamburger onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </Hamburger>

        {/* Nav buttons (desktop + mobile toggle) */}
        <BarNavigations $open={mobileMenuOpen}>
          <a
            style={{
              textDecoration: "none",
            }}
            href="/gps-tracker-dog"
          >
            <ButtonNavigation>Tractive for Dogs</ButtonNavigation>
          </a>

          <a
            style={{
              textDecoration: "none",
            }}
            href="/gps-tracker-cat"
          >
            <ButtonNavigation>Tractive for Cats</ButtonNavigation>
          </a>

          <a
            style={{
              textDecoration: "none",
            }}
            href="/pricing"
          >
            <ButtonNavigation>Pricing</ButtonNavigation>
          </a>

          <a
            style={{
              textDecoration: "none",
            }}
            href="/blog"
          >
            <ButtonNavigation>Blog</ButtonNavigation>
          </a>
          <a
            style={{
              textDecoration: "none",
            }}
            href="/support"
          >
            <ButtonNavigation>Support</ButtonNavigation>
          </a>
        </BarNavigations>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => window.open("https://wa.me/1234567890", "_blank")}
        >
          <WhatsAppIcon />
        </div>
      </Header>
    </div>
  );
}

export default Nav;

const Banner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  background: #7c64af;
`;

const BannerText = styled.p`
  color: white;
  font-weight: bold;
  cursor: pointer;
  line-height: calc(1em + 0.5rem);
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 48px;
  position: relative;

  @media (max-width: 1268px) {
    padding: 16px;
  }
`;

const HeaderLogo = styled.div`
  display: flex;
`;

// NEW: Hamburger style (hidden on desktop)
const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  z-index: 999;

  @media (max-width: 1268px) {
    display: block;
  }
`;

const BarNavigations = styled.div<{ $open: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background: white;
    padding: 16px;
    display: ${({ $open }) => ($open ? "flex" : "none")};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 998;
  }
`;

const ButtonNavigation = styled.div`
  display: flex;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 8px 24px;
  border-radius: 16px;
  cursor: pointer;
  transition: background 300ms ease-out;
  font-weight: 700;
  color: #121623;

  &:hover {
    background: rgba(26, 115, 232, 0.2);
  }
`;
