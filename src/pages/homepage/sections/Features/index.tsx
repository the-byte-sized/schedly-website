import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Button from "@site/src/components/Button";
import {
  IconCalendarEvent,
  IconCategoryPlus,
  IconCircles,
  IconPlus,
} from "@tabler/icons-react";
import React from "react";

const AOS = {
  effect: "fade-up",
  duration: "500",
  easing: "ease-out",
};

const features = [
  {
    title: translate({
      id: "features.createEntities.description",
      message: "Create entities",
    }),
    description: translate({
      id: "features.createEntities.description",
      message:
        "An entity is a flexible concept. It can represent a calendar, a barbershop, a personal agenda, or even a task list. Its meaning adapts to your needs.",
    }),
    path: "/docs/entities/overview",
  },
  {
    title: translate({ id: "features.addRules.title", message: "Add rules" }),
    description: translate({
      id: "features.addRules.description",
      message:
        "Rules in ZenSched can be one-time or recurring. Use them to represent business hours, employee leave, or resource unavailability — fully customizable.",
    }),
    path: "/docs/rules/overview",
  },
  {
    title: translate({
      id: "features.scheduleEvents.title",
      message: "Schedule events",
    }),
    description: translate({
      id: "features.scheduleEvents.description",
      message:
        "Easily find slots and add events effortlessly. What's an event? It's whatever you need — doctor's appointment, team call, or more, customizable via metadata.",
    }),
    path: "/docs/events/overview",
  },
];

const FeaturesCards: React.FC = () => {
  const { palette } = useTheme();

  return (
    <Container
      id="overview"
      data-section="features"
      component="section"
      sx={{
        backgroundColor: "background.default",
      }}
    >
      <Stack
        maxWidth="740px"
        margin="0 auto"
        textAlign="center"
        alignItems="center"
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            letterSpacing: 1,
            fontSize: ".75rem",
            marginBottom: 2,
          }}
        >
          Why ZenSched
        </Typography>
        <Typography
          variant="h1"
          data-aos={AOS.effect}
          data-aos-duration={AOS.duration}
          data-aos-easing={AOS.easing}
        >
          <Translate id="featuresSection.title">
            Unleash the Power of Smart Scheduling
          </Translate>
        </Typography>

        <Typography
          marginTop="1.5rem"
          variant="body1"
          color="textSecondary"
          data-aos={AOS.effect}
          data-aos-duration={AOS.duration}
          data-aos-easing={AOS.easing}
          data-aos-delay="250"
        >
          <Translate id="featuresSection.description">
            Effortlessly manage availability, bookings, and events with
            ZenSched's cutting-edge features. From dynamic rules to seamless
            integrations, our platform is designed to simplify scheduling while
            maximizing productivity and flexibility.
          </Translate>
        </Typography>
      </Stack>

      <Stack
        spacing={4}
        my={12}
        px={{
          lg: 0,
          md: 2,
          xs: 2,
        }}
        flexWrap="wrap"
        direction={{
          xs: "column",
        }}
      >
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="start"
              gap={2}
              p={4}
              borderRadius={2}
            >
              <Typography
                variant="h2"
                data-aos={AOS.effect}
                data-aos-duration={AOS.duration}
                data-aos-easing={AOS.easing}
                sx={{
                  fontFamily: "Playfair Display, serif",
                  fontStyle: "italic",
                  fontWeight: 500,
                  marginBottom: ".5rem",
                }}
              >
                {feature.title}
              </Typography>
              <Box
                maxWidth={{
                  md: "75%",
                  xs: "100%",
                }}
              >
                <Typography
                  data-aos={AOS.effect}
                  data-aos-duration={AOS.duration}
                  data-aos-easing={AOS.easing}
                  data-aos-delay="250"
                >
                  {feature.description}
                </Typography>
              </Box>
              <Link to={feature.path}>
                <Button
                  variant="text"
                  data-aos={AOS.effect}
                  data-aos-duration={AOS.duration}
                  data-aos-easing={AOS.easing}
                  data-aos-delay="500"
                  sx={{
                    color: palette.text.primary,

                    svg: {
                      transition: "transform .3s ease",
                    },

                    "&:hover": {
                      backgroundColor: "transparent",

                      svg: {
                        transform: "rotate(180deg) ",
                      },
                    },
                  }}
                >
                  <IconPlus size={14} stroke={2} />
                  <Typography ml={1} component="span" fontSize=".85rem">
                    Read more
                  </Typography>
                </Button>
              </Link>
            </Box>
            {index !== features.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </Stack>
    </Container>
  );
};

export default FeaturesCards;
