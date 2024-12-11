import type { WrapperProps } from "@docusaurus/types";
import Layout from "@theme-original/Layout";
import type LayoutType from "@theme/Layout";
import AOS from "aos";
import React from "react";

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Layout {...props} />
    </>
  );
}
