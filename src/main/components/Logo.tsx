import * as React from "react";
import i10 from "../../assets/product/logo.png";
type LogoProps = {};
const Logo = (props: LogoProps) => (
  <img
    style={{
      width: "200px",
    }}
    src={i10}
    alt={`Purto marina rent car`}
  />
);
export default Logo;
