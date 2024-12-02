import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
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
      description="Schedly is designed to streamline time management for businesses and individuals. It allows users to create customizable calendars, manage exceptions, and schedule events efficiently."
    >
      <Home />
    </Layout>
  );
}
