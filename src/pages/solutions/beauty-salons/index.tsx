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
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useTheme,
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
import Benefits, { type Benefit } from "../sections/Benefits";
import SolutionFeatures, { Feature } from "../sections/Features";
import SolutionHeader from "../sections/Header";
// @ts-expect-error
import beautySalonAnimationData from "../../../assets/lottie/beauty-salon.json";
// @ts-expect-error
import bookingSolutionAnimationData from "../../../assets/lottie/booking-solution.json";
import Button from "@site/src/components/Button";

const AOS = {
  effect: "fade-up",
  duration: "500",
  easing: "ease-out",
};

const steps = ["Create Entities", "Create Rules", "Configure WebHooks"];

const features: Feature[] = [
  {
    title: translate({
      id: "beautySalons.features.synchronizeAvailability.title",
      message: "Synchronize availability across multiple specialists.",
    }),
    description: translate({
      id: "beautySalons.features.synchronizeAvailability.description",
      message:
        "Effortlessly manage and coordinate schedules for all your specialists.",
    }),
  },
  {
    title: translate({
      id: "beautySalons.features.handleSharedResources.title",
      message: "Handle shared resources.",
    }),
    description: translate({
      id: "beautySalons.features.handleSharedResources.description",
      message:
        "Ensure optimal use of rooms, equipment, and shared resources without conflicts.",
    }),
  },
  {
    title: translate({
      id: "beautySalons.features.bookingRules.title",
      message: "Support different booking rules per specialty.",
    }),
    description: translate({
      id: "beautySalons.features.bookingRules.description",
      message:
        "Customize booking policies to match the unique needs of each specialty.",
    }),
  },
  {
    title: translate({
      id: "beautySalons.features.notifications.title",
      message: "Notify and remind customers about their appointments.",
    }),
    description: translate({
      id: "beautySalons.features.notifications.description",
      message:
        "Send timely reminders and updates to keep customers informed and on time.",
    }),
  },
];

const benefits: Benefit[] = [
  {
    title: translate({
      id: "beautySalons.benefits.simplifiedScheduling.title",
      message: "Simplified and efficient scheduling for the beauty salon.",
    }),
    description: translate({
      id: "beautySalons.benefits.simplifiedScheduling.description",
      message:
        "Streamline appointment management with tools that centralize and organize scheduling tasks, reducing manual effort.",
    }),
  },
  {
    title: translate({
      id: "beautySalons.benefits.reducedBookingConflicts.title",
      message: "Reduced booking conflicts.",
    }),
    description: translate({
      id: "beautySalons.benefits.reducedBookingConflicts.description",
      message:
        "Intelligent algorithms prevent overlapping bookings, ensuring seamless beauty salon operations.",
    }),
  },
  {
    title: translate({
      id: "beautySalons.benefits.improvedCustomerSatisfaction.title",
      message:
        "Improved customer satisfaction through automated reminders and smooth booking processes",
    }),
    description: translate({
      id: "beautySalons.benefits.improvedCustomerSatisfaction.description",
      message:
        "Notifications keep customers informed, while intuitive systems enable effortless appointment creation and changes.",
    }),
  },
];

const BeautySalonsSolutionPage: React.FC = () => {
  const { palette } = useTheme();
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Layout
      title={translate({
        id: "beautySalonsPage.title",
        message: "ZenSched for Beauty Salons",
      })}
      description={translate({
        id: "beautySalonsPage.description",
        message: "ZenSched for Beauty Salons",
      })}
    >
      <main>
        <Box sx={{ background: palette.primary.light }}>
          <Container sx={{ mb: 5 }}>
            <SolutionHeader
              lottieProps={{
                animationData: beautySalonAnimationData,
              }}
              solutionTitle={
                <Translate id="beautySalonsPage.intro.title">
                  Advanced Scheduling for a Beauty Salon
                </Translate>
              }
              solutionDescription={
                <Translate id="beautySalonsPage.intro.caption">
                  Simplify appointment management for barber with different
                  schedules. Handle last-minute cancellations, and resource
                  allocation—all with one tool.
                </Translate>
              }
            />
          </Container>
        </Box>

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
                style: {
                  maxWidth: 700,
                },
              }}
              features={features}
              title={
                <Translate id="beautySalonsPage.solutionFeaturesSection.title">
                  Effortless booking management, simplified for your success.
                </Translate>
              }
              description={
                <Translate id="beautySalonsPage.solutionFeaturesSection.description">
                  A busy beauty salon offers a wide range of services, including
                  haircuts, coloring, styling, manicures, pedicures, facials,
                  and massages. Each service requires different durations,
                  specialized staff, and sometimes specific equipment or rooms.
                  ZenSched can help in assigning services to staff members
                  qualified to perform them, preventing scheduling errors or
                  managing the availability of specific resources like treatment
                  rooms or styling chairs to avoid double bookings.
                </Translate>
              }
            />
          </Container>
        </Box>

        <Container>
          <Typography variant="h2" fontWeight="900">
            <Translate
              id="beautySalonsPage.workflowExampleSection.title"
              data-aos={AOS.effect}
              data-aos-duration={AOS.duration}
              data-aos-easing={AOS.easing}
            >
              Workflow Example
            </Translate>
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
                <Typography variant="h3">
                  <Typography>Customer Booking</Typography>
                </Typography>

                <Typography>
                  A customer would like to book an haricut for 2 PM on a
                  Wednesday.
                </Typography>

                <Typography>The ZenSched API checks:</Typography>

                <Typography>• The salon availability;</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              data-aos="fade-down"
              data-aos-duration={AOS.duration}
              data-aos-easing={AOS.easing}
              data-aos-delay="250"
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
                  If there salon is fully booked for the 2PM, ZenSched suggests
                  the next available slot.
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              data-aos={AOS.effect}
              data-aos-duration={AOS.duration}
              data-aos-easing={AOS.easing}
              data-aos-delay="500"
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
                  customer and the barber can receive confirmation emails.
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              data-aos={AOS.effect}
              data-aos-duration={AOS.duration}
              data-aos-easing={AOS.easing}
              data-aos-delay="750"
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

export default BeautySalonsSolutionPage;
