import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import AOS from "aos";
import React from "react";
import Home from "./homepage";

export default function App(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout
      title={siteConfig.title}
      description="ZenSched is designed to streamline time management for businesses and individuals. It allows users to create customizable calendars, manage exceptions, and schedule events efficiently."
    >
      <Home />
    </Layout>
  );
}
