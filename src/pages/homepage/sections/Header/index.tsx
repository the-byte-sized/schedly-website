import Link from "@docusaurus/Link";
import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Button from "@site/src/components/Button";
import Heading from "@theme/Heading";
import React from "react";
import styles from "./index.module.css";

const AOS = {
  effect: "fade-up",
  duration: "500",
  easing: "ease-out",
};

function Header() {
  const cursor = React.useRef<HTMLDivElement>(null);

  const handleCursorEffect = React.useCallback((e: MouseEvent) => {
    if (cursor.current) {
      const x = e.clientX - 200;
      const y = e.clientY - 200;

      cursor.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("mousemove", (e) =>
      requestAnimationFrame(() => handleCursorEffect(e))
    );

    return () => {
      window.addEventListener("mousemove", (e) =>
        requestAnimationFrame(() => handleCursorEffect(e))
      );
    };
  }, []);

  return (
    <header className={styles.header}>
      <div ref={cursor} className={styles.cursor}></div>
      <div className={styles.background}>
        <img src={useBaseUrl('/img/header-pattern.png')} alt="hero pattern" />
      </div>
      <div className="container d-flex flex-column justify-content-center align-items-center position-relative z-1">
        <div className="d-flex flex-column text-center">
          <Heading
            data-aos={AOS.effect}
            data-aos-duration={AOS.duration}
            data-aos-easing={AOS.easing}
            as="h1"
            className={styles.title}
          >
            Scheduling{" "}
            <span className={styles.underlined}>
              Made Simple
              <svg viewBox="0 0 231 34.72">
                <path d="M9.61,12.86c0,0,168.39-6.89,212.56-5c0,0-152.83,10-180.83,13.78c0,0,62.72-1.39,94.83,4.17" />
              </svg>
            </span>
          </Heading>
          <div
            data-aos={AOS.effect}
            data-aos-duration={AOS.duration}
            data-aos-easing={AOS.easing}
            data-aos-delay="250"
            className={styles.description}
          >
            <Translate id="homepage.header.description">
            Schedly is designed to streamline time management for businesses
              and individuals. It allows users to create customizable calendars,
              manage exceptions, and schedule events efficiently.
            </Translate>
          
          </div>
        </div>
        <div
          data-aos={AOS.effect}
          data-aos-duration={AOS.duration}
          data-aos-easing={AOS.easing}
          data-aos-delay="500"
          className="d-flex align-items-center gap-2"
        >
          <Link to="https://forms.office.com/r/8LmMHy2bUF" target="_blank">
            <Button label={
                translate({
                  id: 'joinWaitlistNow',
                  description: 'A prompt for the user to make them subscribe to Schedly waitlist',
                })
            } className="btn-primary" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
