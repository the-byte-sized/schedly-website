import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import { Button, Container, Stack, Typography } from "@mui/material";
import Card from "@site/src/components/Card";
import useSolutions from "@site/src/hooks/useSolutions";
import { IconChevronRight } from "@tabler/icons-react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Solutions: React.FC = () => {
  const id = React.useId();
  const solutions = useSolutions();

  return (
    <>
      <Container
        id="solutions"
        data-section="solutions"
        sx={{
          py: 5,
        }}
      >
        <Typography
          variant="h2"
          fontWeight="900"
          dangerouslySetInnerHTML={{
            __html: translate({
              id: "solutions.title",
              message:
                "ZenSched in <span style='color: var(--mui-palette-primary-main);'>action</span>",
            }),
          }}
        />

        <Typography variant="subtitle1" sx={{ maxWidth: "75%", mt: 2 }}>
          <Translate id="solutions.description">
            Unlock the full potential of streamlined booking processes with
            ZenSched, a powerful API designed to cater to the diverse needs of
            various industries such as healthcare, education, hospitality, and
            beyond.
          </Translate>
        </Typography>
      </Container>

      <Stack sx={{ py: 5 }} alignItems="center">
        <Carousel
          autoPlay
          interval={2250}
          infiniteLoop
          stopOnHover
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          centerMode
          centerSlidePercentage={16}
        >
          {solutions.map((solution) => (
            <Link to={solution.link} key={id}>
              <Card
                sx={{
                  height: 250,
                }}
              >
                <Stack alignItems="center" justifyContent="center" gap={3}>
                  {solution.icon}

                  <Typography variant="h3" component="h1">
                    {solution.title}
                  </Typography>
                </Stack>
              </Card>
            </Link>
          ))}
        </Carousel>

        <Button
          variant="outlined"
          component={Link}
          to="/solutions"
          sx={{
            mt: 5,
          }}
          size="large"
          endIcon={<IconChevronRight />}
        >
          <Translate id="solutions.learnMoreButton">
            See all industries
          </Translate>
        </Button>
      </Stack>
    </>
  );
};

export default Solutions;
