import Translate, { translate } from "@docusaurus/Translate";
import { Container, Stack, Typography } from "@mui/material";
import Card from "@site/src/components/Card";
import {
  IconCalendarEvent,
  IconCategoryPlus,
  IconCircles,
  IconClockCog,
} from "@tabler/icons-react";
import React from "react";

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
    icon: <IconCircles size={48} />,
  },
  {
    title: translate({ id: "features.addRules.title", message: "Add rules" }),
    description: translate({
      id: "features.addRules.description",
      message:
        "Rules in ZenSched can be one-time or recurring. Use them to represent business hours, employee leave, or resource unavailability — fully customizable.",
    }),
    icon: <IconCategoryPlus size={48} />,
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
    icon: <IconCalendarEvent size={48} />,
  },
];

const FeaturesCards: React.FC = () => {
  return (
    <Container
      id="overview"
      data-section="features"
      component="section"
      sx={{
        backgroundColor: "background.default",
      }}
    >
      <Stack textAlign="center" alignItems="center" gap={2}>
        <IconClockCog size={84} />

        <Typography variant="h2">
          <Translate id="featuresSection.title">
            Unleash the Power of Smart Scheduling
          </Translate>
        </Typography>

        <Typography variant="subtitle1" color="textSecondary">
          <Translate id="featuresSection.description">
            Effortlessly manage availability, bookings, and events with
            ZenSched’s cutting-edge features. From dynamic rules to seamless
            integrations, our platform is designed to simplify scheduling while
            maximizing productivity and flexibility.
          </Translate>
        </Typography>
      </Stack>

      <Stack
        direction={{
          xs: "column",
          sm: "row",
        }}
        spacing={4}
        py={6}
        flexWrap="wrap"
        justifyContent="center"
      >
        {features.map((feature, index) => (
          <Card
            key={index}
            cardTitle={feature.title}
            cardDescription={feature.description}
            cardIcon={feature.icon}
            sx={{
              maxWidth: 320,
            }}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default FeaturesCards;
