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
import Benefits, { type Benefit } from "../sections/Benefits";
import SolutionFeatures, { Feature } from "../sections/Features";
import SolutionHeader from "../sections/Header";
// @ts-expect-error
import beautySalonAnimationData from "../../../assets/lottie/beauty-salon.json";
// @ts-expect-error
import bookingSolutionAnimationData from "../../../assets/lottie/booking-solution.json";

const steps = ["Create Entities", "Create Rules", "Configure WebHooks"];

const features: Feature[] = [
  {
    title: "Synchronize availability across multiple specialists.",
    description:
      "Effortlessly manage and coordinate schedules for all your specialists.",
  },
  {
    title: "Handle shared resources.",
    description:
      "Ensure optimal use of rooms, equipment, and shared resources without conflicts.",
  },
  {
    title: "Support different booking rules per specialty.",
    description:
      "Customize booking policies to match the unique needs of each specialty.",
  },
  {
    title: "Notify and remind customers about their appointments.",
    description:
      "Send timely reminders and updates to keep customers informed and on time.",
  },
];

const benefits: Benefit[] = [
  {
    title: "Simplified and efficient scheduling for the beauty salon.",
    description:
      "Streamline appointment management with tools that centralize and organize scheduling tasks, reducing manual effort.",
  },
  {
    title: "Reduced booking conflicts.",
    description:
      "Intelligent algorithms prevent overlapping bookings, ensuring seamless beauty salon operations.",
  },
  {
    title:
      "Improved customer satisfaction through automated reminders and smooth booking processes",
    description:
      "Notifications keep customers informed, while intuitive systems enable effortless appointment creation and changes.",
  },
];

const BeautySalonsSolutionPage: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Layout
      title="ZenSched for Beauty Salons"
      description="Streamlining Appointment Scheduling"
    >
      <main>
        <Container sx={{ my: 5 }}>
          <SolutionHeader
            lottieProps={{
              animationData: beautySalonAnimationData,
            }}
            solutionTitle={
              <Translate id="healthcareSolutionPage.intro.title">
                Advanced Scheduling for a Beauty Salon
              </Translate>
            }
            solutionDescription={
              <Translate id="healthcareSolutionPage.intro.caption">
                Simplify appointment management for barber with different
                schedules. Handle last-minute cancellations, and resource
                allocation—all with one tool.
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
                style: {
                  maxWidth: 700,
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
          <Typography variant="h4" component="h2" fontWeight="900">
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
                  Customer Booking
                </Typography>

                <Typography>
                  A customer would like to book an haricut for 2 PM on a
                  Wednesday.
                </Typography>

                <Typography>The ZenSched API checks:</Typography>

                <Typography>• The salon availability;</Typography>
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
                  If there salon is fully booked for the 2PM, ZenSched suggests
                  the next available slot.
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
                  customer and the barber can receive confirmation emails.
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
          <Typography variant="h4" component="h2" fontWeight="900">
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

export default BeautySalonsSolutionPage;
