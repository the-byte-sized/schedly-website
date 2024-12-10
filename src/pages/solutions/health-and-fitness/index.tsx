import Translate from "@docusaurus/Translate";
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
import healthAndFitnessAnimationData from "../../../assets/lottie/health-and-fitness.json";
import Benefits, { type Benefit } from "../sections/Benefits";
import SolutionFeatures, { Feature } from "../sections/Features";
import SolutionHeader from "../sections/Header";
// @ts-expect-error
import bookingSolutionAnimationData from "../../../assets/lottie/booking-solution.json";

const steps = ["Create Entities", "Create Rules", "Configure WebHooks"];

const features: Feature[] = [
  {
    title: "Manage Class Schedules.",
    description:
      "Handle recurring group classes like yoga or spin, each with capacity limits and fixed schedules. ZenSched ensures no overlap in resource or instructor assignments.",
  },
  {
    title: "Coordinate Personal Training Sessions.",
    description:
      "Manage one-on-one training schedules by syncing trainer availability with client preferences, avoiding conflicts.",
  },
  {
    title: "Handle Shared Resources.",
    description:
      "Allocate shared spaces (e.g., studios) and equipment (e.g., bikes, mats) efficiently, ensuring optimal use without conflicts.",
  },
  {
    title: "Send Notifications and Reminders.",
    description:
      "Automate email or SMS notifications for bookings, reminders, and updates to keep both members and staff informed and on schedule.",
  },
];

const benefits: Benefit[] = [
  {
    title: "Efficient Resource Allocation",
    description:
      "Shared spaces and equipment are managed seamlessly, avoiding overbooking and downtime.",
  },
  {
    title: "Personalized Member Experience",
    description:
      "Members benefit from clear booking processes, timely reminders, and the ability to choose preferred trainers or classes.",
  },
  {
    title: "Improved Staff Coordination",
    description:
      "Staff schedules are automatically updated, reducing errors and ensuring smooth operations.",
  },
];

const HealthAndFitnessSolutionPage: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Layout
      title="ZenSched for Health and Fitness"
      description="Smart Scheduling for Health and Fitness Centers"
    >
      <main>
        <Container sx={{ my: 5 }}>
          <SolutionHeader
            lottieProps={{
              animationData: healthAndFitnessAnimationData,
            }}
            solutionTitle={
              <Translate id="healthAndFitnessSolutionPage.intro.title">
                Advanced Scheduling for Health and Fitness Center
              </Translate>
            }
            solutionDescription={
              <Translate id="healthAndFitnessSolutionPage.intro.caption">
                Effortlessly manage fitness schedules with a versatile system
                that coordinates trainers, handles member bookings, optimizes
                shared spaces, and adapts seamlessly to changing
                availability—all from one powerful platform.
              </Translate>
            }
          />
        </Container>

        <Box
          sx={{
            backgroundColor: "hsl(260, 60%, 98%)",
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
                <Translate>
                  Effortless booking management, simplified for your success.
                </Translate>
              }
            />
          </Container>
        </Box>

        <Container>
          <Typography variant="h2" fontWeight="900">
            <Translate>Workflow Example</Translate>
          </Typography>

          <Timeline position="alternate">
            <TimelineItem>
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

            <TimelineItem>
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

            <TimelineItem>
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

            <TimelineItem>
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
          <Typography variant="h2" fontWeight="900">
            ZenSched Implementation
          </Typography>

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

          {activeStep === 1 && (
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>
                Define Resources and Services
              </Typography>
            </>
          )}

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
              Back
            </Button>

            <Button
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
            >
              Next
            </Button>
          </Stack>
        </Container>

        <Box
          sx={{
            p: 8,
            backgroundColor: "hsl(260, 60%, 98%)",
          }}
        >
          <Benefits benefits={benefits} />
        </Box>
      </main>
    </Layout>
  );
};

export default HealthAndFitnessSolutionPage;
