import React, { ReactNode } from "react";

type HeroProps = {
  children?: ReactNode;
};

const Hero = ({ children }: HeroProps) => {
  return <div>Hero {children}</div>;
};

export default Hero;
