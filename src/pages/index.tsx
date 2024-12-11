import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import Layout from "@theme/Layout";
import Home from "./homepage";

export default function App(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="ZenSched is designed to streamline time management for businesses and individuals. It allows users to create customizable calendars, manage exceptions, and schedule events efficiently."
    >
      <Home />
    </Layout>
  );
}
