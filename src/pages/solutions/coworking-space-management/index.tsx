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
import Button from "@site/src/components/Button";
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
import coworkingSpaceManagementAnimationData from "../../../assets/lottie/coworking-space-management.json";
// @ts-expect-error
import bookingSolutionAnimationData from "../../../assets/lottie/booking-solution.json";

const AOS = {
  effect: "fade-up",
  duration: "500",
  easing: "ease-out",
};

const steps = ["Create Entities", "Create Rules", "Configure WebHooks"];

const features: Feature[] = [
  {
    title: translate({
      id: "coworkingSpaceManagement.features.synchronizeAvailability.title",
      message: "Synchronize availability across the staff.",
    }),
    description: translate({
      id: "coworkingSpaceManagement.features.synchronizeAvailability.description",
      message:
        "The staff members, such as front-desk managers or cleaning staff, must coordinate their schedules to align with bookings for meeting rooms, events, or equipment setup.",
    }),
  },
  {
    title: translate({
      id: "coworkingSpaceManagement.features.handleSharedResources.title",
      message: "Handle shared resources.",
    }),
    description: translate({
      id: "coworkingSpaceManagement.features.handleSharedResources.description",
      message:
        "Meeting rooms, projectors, and whiteboards are shared resources that must be booked without conflicts. ZenSched ensures optimal allocation and usage.",
    }),
  },
  {
    title: translate({
      id: "coworkingSpaceManagement.features.supportDifferentBookingRules.title",
      message: "Support different booking rules.",
    }),
    description: translate({
      id: "coworkingSpaceManagement.features.supportDifferentBookingRules.description",
      message:
        "Different spaces have unique policies. For instance, meeting rooms can be booked in 30-minute increments, while private offices are reserved by the hour.",
    }),
  },
  {
    title: translate({
      id: "coworkingSpaceManagement.features.notifications.title",
      message: "Notify and remind customers about their appointments.",
    }),
    description: translate({
      id: "coworkingSpaceManagement.features.notifications.description",
      message:
        "Send timely reminders and updates to keep customers and staff informed and on time.",
    }),
  },
];

const benefits: Benefit[] = [
  {
    title: translate({
      id: "coworkingSpaceManagement.benefits.simplifiedScheduling.title",
      message: "Simplified and efficient scheduling.",
    }),
    description: translate({
      id: "coworkingSpaceManagement.benefits.simplifiedScheduling.description",
      message:
        "Streamline appointment management with tools that centralize and organize scheduling tasks, reducing manual effort.",
    }),
  },
  {
    title: translate({
      id: "coworkingSpaceManagement.benefits.reducedBookingConflicts.title",
      message: "Reduced booking conflicts.",
    }),
    description: translate({
      id: "coworkingSpaceManagement.benefits.reducedBookingConflicts.description",
      message:
        "Intelligent algorithms prevent overlapping bookings, ensuring seamless operations.",
    }),
  },
  {
    title: translate({
      id: "coworkingSpaceManagement.benefits.improvedCustomerSatisfaction.title",
      message:
        "Improved customer satisfaction through automated reminders and smooth booking processes",
    }),
    description: translate({
      id: "coworkingSpaceManagement.benefits.improvedCustomerSatisfaction.description",
      message:
        "Notifications keep customers informed, while intuitive systems enable effortless appointment creation and changes.",
    }),
  },
];

const CoworkingSpaceManagementSolutionPage: React.FC = () => {
  const { palette } = useTheme();
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
        id: "coworkingSpaceManagementPage.title",
        message: "ZenSched for Co-working Spaces",
      })}
      description={translate({
        id: "coworkingSpaceManagementPage.description",
        message: "Streamlining Shared Workspace Management",
      })}
    >
      <main>
        <Box sx={{ background: palette.primary.light }}>
          <Container sx={{ mb: 5 }}>
            <SolutionHeader
              lottieProps={{
                animationData: coworkingSpaceManagementAnimationData,
              }}
              solutionTitle={
                <Translate id="coworkingSpaceManagementPage.intro.title">
                  Conference Room Booking for a Co-Working Space
                </Translate>
              }
              solutionDescription={
                <Translate id="coworkingSpaceManagementPage.intro.caption">
                  Manage coworking spaces effortlessly with a single tool.
                  Handle bookings across multiple locations, accommodate various
                  membership levels, and avoid scheduling conflicts—all in one
                  place.
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
                <Translate id="coworkingSpaceManagementPage.solutionFeaturesSection.title">
                  Effortless booking management, simplified for your success.
                </Translate>
              }
              description={
                <Translate id="coworkingSpaceManagementPage.solutionFeaturesSection.description">
                  A dynamic coworking space that manages shared offices, meeting
                  rooms, and event areas for freelancers, startups, and
                  established businesses. The space coordinates schedules for
                  shared resources like desks, private offices, and conference
                  rooms, while also handling member bookings and event setups.
                  Efficiently managing availability, adapting to last-minute
                  changes, and optimizing resource allocation are essential for
                  smooth operations. ZenSched offers a comprehensive scheduling
                  solution to streamline bookings, maximize resource usage, and
                  enhance member satisfaction.
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
                  Customer Booking
                </Typography>

                <Typography>
                  A customer would like to book the conference room for 2 PM on
                  a Wednesday.
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              data-aos={AOS.effect}
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
                  If the conference room is fully booked for the 2PM, ZenSched
                  suggests the next available slot.
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
                  customer and the staff members can receive confirmation
                  emails.
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
                <Typography variant="h6">
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

export default CoworkingSpaceManagementSolutionPage;
