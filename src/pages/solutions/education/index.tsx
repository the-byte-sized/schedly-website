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
import Benefits, { type Benefit } from "../sections/Benefits";
import SolutionFeatures, { Feature } from "../sections/Features";
import SolutionHeader from "../sections/Header";
// @ts-expect-error
import educationSolutionAnimationData from "../../../assets/lottie/education.json";
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
      id: "education.benefits.synchronizeAvailability.title",
      message: "Synchronize availability across the staff.",
    }),
    description: translate({
      id: "education.benefits.synchronizeAvailability.title",
      message:
        "Instructors, teaching assistants, and administrative staff need to coordinate their schedules to align with class timings, one-on-one sessions, and student consultations. ZenSched dynamically synchronizes staff availability to avoid conflicts and ensure seamless scheduling.",
    }),
  },
  {
    title: translate({
      id: "education.benefits.sharedResources.title",
      message: "Handle shared resources.",
    }),
    description: translate({
      id: "education.benefits.sharedResources.title",
      message:
        "Virtual classrooms, breakout rooms, and shared teaching tools (e.g., whiteboards, document sharing systems) are allocated based on availability. ZenSched ensures optimal usage by avoiding double-booking and prioritizing critical classes or sessions.",
    }),
  },
  {
    title: translate({
      id: "education.benefits.bookingRules.title",
      message: "Support different booking rules.",
    }),
    description: translate({
      id: "education.benefits.bookingRules.title",
      message:
        "Different online courses and events have unique policies. For instance, meeting regular classes are scheduled in fixed 1-hour increments, while one-on-one sessions are bookable for 30 minutes.",
    }),
  },
  {
    title: translate({
      id: "education.benefits.notifications.title",
      message:
        "Notify and remind students and lecturers about their appointments.",
    }),
    description: translate({
      id: "education.benefits.notifications.description",
      message:
        "Send timely reminders and updates to keep students and lecturers informed and on time.",
    }),
  },
];

const benefits: Benefit[] = [
  {
    title: translate({
      id: "education.benefits.simplifiedScheduling.title",
      message: "Simplified and efficient scheduling.",
    }),
    description: translate({
      id: "education.benefits.simplifiedScheduling.description",
      message:
        "Streamline appointment management with tools that centralize and organize scheduling tasks, reducing manual effort.",
    }),
  },
  {
    title: translate({
      id: "education.benefits.reducedBookingConflicts.title",
      message: "Reduced booking conflicts.",
    }),
    description: translate({
      id: "education.benefits.reducedBookingConflicts.description",
      message:
        "Intelligent algorithms prevent overlapping bookings, ensuring seamless operations.",
    }),
  },
  {
    title: translate({
      id: "education.benefits.improvedCustomerSatisfaction.title",
      message:
        "Improved customer satisfaction through automated reminders and smooth booking processes",
    }),
    description: translate({
      id: "education.benefits.improvedCustomerSatisfaction.description",
      message:
        "Notifications keep customers informed, while intuitive systems enable effortless appointment creation and changes.",
    }),
  },
];

const EducationSolutionPage: React.FC = () => {
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
        id: "beautySalonsPage.title",
        message: "ZenSched for Education",
      })}
      description={translate({
        id: "beautySalonsPage.description",
        message: "Smart Scheduling for Learning Environments",
      })}
    >
      <main>
        <Container sx={{ my: 5 }}>
          <SolutionHeader
            lottieProps={{
              animationData: educationSolutionAnimationData,
            }}
            solutionTitle={
              <Translate id="beautySalonsPage.intro.title">
                Class Scheduling for an Online Learning Platform
              </Translate>
            }
            solutionDescription={
              <Translate id="beautySalonsPage.intro.caption">
                Manage live classes effortlessly with a flexible scheduling
                system. Coordinate instructors across time zones, handle student
                bookings, and adapt to changing availability—all in one
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
                style: {
                  maxWidth: "700px",
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
                  An innovative online learning platform offering live classes,
                  workshops, and one-on-one tutoring sessions across a variety
                  of subjects. The platform manages schedules for instructors,
                  students, and shared virtual classrooms, while also handling
                  bookings across different time zones. Coordinating instructor
                  availability, adapting to last-minute changes, and ensuring
                  smooth class transitions are critical for an optimal learning
                  experience. ZenSched provides a flexible scheduling solution
                  to streamline class management, align global schedules, and
                  enhance the experience for both students and instructors.
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
                  Student Booking
                </Typography>

                <Typography>
                  A Student would like to attend a specific course for 2 PM on a
                  Wednesday.
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
                  If the course is fully booked for the 2PM, ZenSched suggests
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
                  student and the lecturer can receive confirmation emails.
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

export default EducationSolutionPage;
