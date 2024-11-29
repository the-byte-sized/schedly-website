import React from "react";

import Header from "./sections/Header";
import Features from "./sections/Features";
import Documentation from "./sections/Documentation";
import UseCases from "./sections/UseCases";
import Pricing from "./sections/Pricing";
import "./styles.module.css";

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <Features />
        <Documentation />
        <UseCases />
        <Pricing />
      </main>
    </>
  );
}
