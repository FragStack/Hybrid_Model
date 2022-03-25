import React, { ReactNode } from "react";

type SiteLayoutProps = {
  children?: ReactNode;
};

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return <main>Main {children}</main>;
};

export default SiteLayout;
