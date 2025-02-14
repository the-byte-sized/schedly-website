import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import { Button } from "@mui/material";
import {
    IconBrandAndroid,
    IconBrandApple,
    IconBrandFlutter,
    IconBrandReact,
    IconBrandTypescript,
    IconChevronRight,
} from "@tabler/icons-react";
import styles from "./styles.module.css";

const Documentation = () => {
  return (
    <section
      data-section="documentation"
      className="w-100 overflow-hidden d-flex justify-content-center position-relative bg-light"
    >
      <div data-position="top-left" className={styles.background}></div>

      <div data-position="bottom-right" className={styles.background}></div>

      <div className="container row row-gap-5 position-relative z-1 my-5">
        <div
          data-inner-section="integration"
          className="flex-1 col-sm-12 col-lg-6"
        >
          <h1
            className="fs-1"
            dangerouslySetInnerHTML={{
              __html: translate({
                id: "documentationSection.title",
                message: "Integrate ZenSched <span>your way</span>",
              }),
            }}
          />

          <p className="fs-5">
            <Translate id="documentationSection.description">
              ZenSched adapts to your workflow with ease. Use our robust API for
              direct integration or speed up development with ready-to-go SDKs
              for multiple platforms.
            </Translate>
          </p>

          <Button
            component={Link}
            to="/docs/intro/welcome"
            variant="contained"
            endIcon={<IconChevronRight />}
          >
            <Translate id="documentationSection.button">
              View Documentation
            </Translate>
          </Button>
        </div>

        <div data-inner-section="brands" className="flex-1 col-sm-12 col-lg-6">
          <div className="position-relative w-100 h-100">
            <div data-brand="ts" className={styles.brandIcon}>
              <div className={styles.icon}>
                <IconBrandTypescript size={64} stroke={2} />
              </div>
              <div className={styles.shadow}></div>
            </div>

            <div data-brand="flutter" className={styles.brandIcon}>
              <div className={styles.icon}>
                <IconBrandFlutter size={56} stroke={2} />
              </div>
              <div className={styles.shadow}></div>
            </div>

            <div data-brand="android" className={styles.brandIcon}>
              <div className={styles.icon}>
                <IconBrandAndroid size={56} stroke={2} />
              </div>
              <div className={styles.shadow}></div>
            </div>

            <div data-brand="apple" className={styles.brandIcon}>
              <div className={styles.icon}>
                <IconBrandApple size={72} stroke={2} />
              </div>
              <div className={styles.shadow}></div>
            </div>

            <div data-brand="react" className={styles.brandIcon}>
              <div className={styles.icon}>
                <IconBrandReact size={36} stroke={2} />
              </div>
              <div className={styles.shadow}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Documentation;