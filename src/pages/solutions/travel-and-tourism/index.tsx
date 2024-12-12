import Translate, { translate } from "@docusaurus/Translate";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import {
  Box,
  Button,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import Container from "@site/src/components/Container";
import {
  IconCalendarCog,
  IconCheck,
  IconNotification,
  IconUser,
} from "@tabler/icons-react";
import Layout from "@theme/Layout";
import React from "react";
//@ts-expect-error
import travelAndTourismAnimationData from "../../../assets/lottie/travel-and-tourism.json";
// @ts-expect-error
import bookingSolutionAnimationData from "../../../assets/lottie/booking-solution.json";
import Benefits, { type Benefit } from "../sections/Benefits";
import SolutionFeatures, { Feature } from "../sections/Features";
import SolutionHeader from "../sections/Header";

const AOS = {
  effect: "fade-up",
  duration: "500",
  easing: "ease-out",
};

const steps = ["Create Entities", "Create Rules", "Configure WebHooks"];

const features: Feature[] = [
  {
    title: translate({
      id: "travelAndTourism.benefits.synchronizeAvailability.title",
      message: "Synchronize availability across the staff.",
    }),
    description: translate({
      id: "travelAndTourism.benefits.synchronizeAvailability.description",
      message:
        "Tour guides and administrative staff need to coordinate their schedules. ZenSched dynamically synchronizes staff availability to avoid conflicts and ensure seamless scheduling.",
    }),
  },
  {
    title: translate({
      id: "travelAndTourism.benefits.handleSharedResources.title",
      message: "Handle shared resources.",
    }),
    description: translate({
      id: "travelAndTourism.benefits.handleSharedResources.description",
      message:
        "Easily adapt to unique scheduling needs with ZenSched. Set custom booking durations, cancellation policies, and advance booking requirements for each service, ensuring a seamless fit for your business operations.",
    }),
  },
  {
    title: translate({
      id: "travelAndTourism.benefits.bookingRules.title",
      message: "Support different booking rules.",
    }),
    description: translate({
      id: "travelAndTourism.benefits.bookingRules.description",
      message: "Different guided tours and events have unique policies.",
    }),
  },
  {
    title: translate({
      id: "travelAndTourism.benefits.notifications.title",
      message:
        "Notify and remind guide tours and customers about their appointments.",
    }),
    description: translate({
      id: "travelAndTourism.benefits.notifications.description",
      message:
        "Send timely reminders and updates to keep customers and guide tours informed and on time.",
    }),
  },
];

const benefits: Benefit[] = [
  {
    title: translate({
      id: "travelAndTourism.benefits.simplifiedAndEfficientScheduling.title",
      message: "Simplified and efficient scheduling.",
    }),
    description: translate({
      id: "travelAndTourism.benefits.simplifiedAndEfficientScheduling.description",
      message:
        "Streamline appointment management with tools that centralize and organize scheduling tasks, reducing manual effort.",
    }),
  },
  {
    title: translate({
      id: "travelAndTourism.benefits.reducedBookingConflicts.title",
      message: "Reduced booking conflicts.",
    }),
    description: translate({
      id: "travelAndTourism.benefits.reducedBookingConflicts.description",
      message:
        "Intelligent algorithms prevent overlapping bookings, ensuring seamless operations.",
    }),
  },
  {
    title: translate({
      id: "travelAndTourism.benefits.improvedCustomerSatisfaction.title",
      message:
        "Improved customer satisfaction through automated reminders and smooth booking processes",
    }),
    description: translate({
      id: "travelAndTourism.benefits.improvedCustomerSatisfaction.description",
      message:
        "Notifications keep customers informed, while intuitive systems enable effortless appointment creation and changes.",
    }),
  },
];

const TravelAndTourismSolutionPage: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Layout
      title={translate({
        id: "travelAndTourismPage.title",
        message: "ZenSched for Travel and Tourism",
      })}
      description={translate({
        id: "travelAndTourismPage.description",
        message: "Smart Scheduling for Travel and Tourism Agency",
      })}
    >
      <main>
        <Container sx={{ my: 5 }}>
          <SolutionHeader
            lottieProps={{
              animationData: travelAndTourismAnimationData,
              loop: false,
            }}
            solutionTitle={
              <Translate id="travelAndTourismPage.intro.title">
                Advanced Scheduling for a Travel and Tourism Agency
              </Translate>
            }
            solutionDescription={
              <Translate id="travelAndTourismPage.intro.caption">
                Streamline travel itineraries with a powerful scheduling system.
                Coordinate tour guides across locations, manage customer
                bookings, and adapt to last-minute changes—all in one seamless
                platform.
              </Translate>
            }
          />
        </Container>

        <Box
          sx={{
            backgroundColor: "background.paper",
            py: 5,
          }}
        >
          <Container>
            <SolutionFeatures
              lottieProps={{
                animationData: bookingSolutionAnimationData,
                loop: false,
                style: {
                  maxWidth: "600px",
                },
              }}
              features={features}
              title={
                <Translate id="travelAndTourismPage.solutionFeaturesSection.title">
                  Effortless booking management, simplified for your success.
                </Translate>
              }
              description={
                <Translate id="travelAndTourismPage.solutionFeaturesSection.description">
                  A thriving travel and tourism company that organizes guided
                  tours, transportation schedules, and travel itineraries for
                  customers across multiple destinations. The business
                  coordinates tour guides, drivers, and shared resources like
                  vehicles, accommodations, and activity spaces. Managing
                  bookings, adapting to last-minute changes, and ensuring smooth
                  communication between travelers and staff is crucial to
                  providing a seamless travel experience. ZenSched offers a
                  robust scheduling solution to optimize resources, streamline
                  coordination, and enhance customer satisfaction.
                </Translate>
              }
            />
          </Container>
        </Box>

        <Container>
          <Typography
            variant="h2"
            fontWeight="900"
            data-aos={AOS.effect}
            data-aos-duration={AOS.duration}
            data-aos-easing={AOS.easing}
          >
            <Translate>Workflow Example</Translate>
          </Typography>

          <Timeline position="alternate">
            <TimelineItem
              data-aos={AOS.effect}
              data-aos-duration={AOS.duration}
              data-aos-easing={AOS.easing}
            >
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <IconUser />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Customer Makes a Booking
                </Typography>

                <Typography>
                  A customer wants to book a guided city tour offered by the
                  travel agency.
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              data-aos={AOS.effect}
              data-aos-duration={AOS.duration}
              data-aos-easing={AOS.easing}
              data-aos-delay="150"
            >
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <IconCalendarCog />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Conflict Resolution
                </Typography>

                <Typography>
                  ZenSched checks the tour guide and the vehicle availability.
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              data-aos={AOS.effect}
              data-aos-duration={AOS.duration}
              data-aos-easing={AOS.easing}
              data-aos-delay="225"
            >
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                  <IconNotification />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              </TimelineSeparator>

              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Notifications
                </Typography>

                <Typography>
                  Thanks to the WebHooks functionalities of ZenSched, the
                  customer and the staff receives notifications with the booking
                  details.
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              data-aos={AOS.effect}
              data-aos-duration={AOS.duration}
              data-aos-easing={AOS.easing}
              data-aos-delay="300"
            >
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />

                <TimelineDot color="secondary">
                  <IconCheck />
                </TimelineDot>

                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              </TimelineSeparator>

              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  That's how simple it's with ZenSched!
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Container>

        <Container>
          <Typography
            variant="h2"
            fontWeight="900"
            data-aos={AOS.effect}
            data-aos-duration={AOS.duration}
            data-aos-easing={AOS.easing}
          >
            ZenSched Implementation
          </Typography>

          <Box
            data-aos={AOS.effect}
            data-aos-duration={AOS.duration}
            data-aos-easing={AOS.easing}
          >
            <Stepper
              activeStep={activeStep}
              sx={{
                mt: 5,
              }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                <Typography id="stepper.previousStepButton">Back</Typography>
              </Button>

              <Button
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
              >
                <Typography id="stepper.nextStepButton">Next</Typography>
              </Button>
            </Stack>
          </Box>
        </Container>

        <Box
          sx={{
            p: 8,
            backgroundColor: "background.paper",
          }}
        >
          <Benefits benefits={benefits} />
        </Box>
      </main>
    </Layout>
  );
};

export default TravelAndTourismSolutionPage;
