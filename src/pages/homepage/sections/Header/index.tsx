import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import { Typography, Grid2 as Grid, Box, useTheme } from "@mui/material";
import React from "react";
import styles from "./index.module.css";
import Container from "@site/src/components/Container";
import Button from "@site/src/components/Button";

const AOS = {
  effect: "fade-up",
  duration: "500",
  easing: "ease-out",
};

function Header() {
  const { palette, typography } = useTheme();

  return (
    <header>
      <Box
        sx={{ backgroundColor: palette.primary.light }}
        className={styles.header}
      >
        <div className={styles.wrapper}>
          <Container>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              textAlign="center"
            >
              <Typography
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  fontSize: ".75rem",
                  marginBottom: 2,
                }}
              >
                Simplify, Customize, Schedule
              </Typography>
              <Typography
                variant="h1"
                data-aos={AOS.effect}
                data-aos-duration={AOS.duration}
                data-aos-easing={AOS.easing}
              >
                Scheduling{" "}
                <Typography
                  variant="h1"
                  component="span"
                  data-aos={AOS.effect}
                  data-aos-duration={AOS.duration}
                  data-aos-easing={AOS.easing}
                  data-aos-delay="250"
                  sx={{
                    fontFamily: "Playfair Display, serif",
                    fontWeight: 500,
                    fontStyle: "italic",
                    fontSize: typography.pxToRem(
                      Number(typography.h1.fontSize)
                    ),
                  }}
                >
                  Made Simple
                </Typography>
              </Typography>
              <div
                data-aos={AOS.effect}
                data-aos-duration={AOS.duration}
                data-aos-easing={AOS.easing}
                data-aos-delay="500"
                className={styles.description}
              >
                <Typography variant="body1">
                  <Translate id="homepage.header.description">
                    ZenSched is designed to simplify event and resource
                    management for businesses and professionals. It enables the
                    creation of customizable entities, flexible exception
                    handling, and efficient event scheduling through APIs or
                    SDKs.
                  </Translate>
                </Typography>
              </div>
              <div
                data-aos={AOS.effect}
                data-aos-duration={AOS.duration}
                data-aos-easing={AOS.easing}
                data-aos-delay="750"
                className="d-flex align-items-center gap-2"
              >
                <Link
                  to="https://forms.office.com/r/8LmMHy2bUF"
                  target="_blank"
                >
                  <Button>
                    <Translate id="joinWaitlistNow">
                      Join Waitlist Now
                    </Translate>
                  </Button>
                </Link>
              </div>
            </Grid>
          </Container>
        </div>

        <div className="container d-flex flex-column justify-content-center align-items-center position-relative z-1">
          <div className="d-flex flex-column text-center"></div>
        </div>
      </Box>
    </header>
  );
}

export default Header;
