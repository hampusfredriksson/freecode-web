import React, { ReactNode } from "react";

import Navbar from "./navbar";
import Footer from "./footer";

type Props = {
  children?: ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
