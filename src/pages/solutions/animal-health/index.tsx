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
import animalHealthAnimationData from "../../../assets/lottie/animal-health.json";
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
      id: "animalHealth.features.manageAppointments.title",
      message: "Manage Appointments.",
    }),
    description: translate({
      id: "animalHealth.features.manageAppointments.description",
      message:
        "Schedule routine checkups, vaccinations, and diagnostic exams efficiently, ensuring that veterinarian availability and room allocation are handled seamlessly.",
    }),
  },
  {
    title: translate({
      id: "animalHealth.features.handleSharedResources.title",
      message: "Handle shared resources.",
    }),
    description: translate({
      id: "animalHealth.features.handleSharedResources.description",
      message:
        "Optimize the use of examination rooms and equipment such as diagnostic machines or surgical tools to prevent scheduling overlaps.",
    }),
  },
  {
    title: translate({
      id: "animalHealth.features.supportRecurringAppointments.title",
      message: "Support Recurring Appointments",
    }),
    description: translate({
      id: "animalHealth.features.supportRecurringAppointments.description",
      message:
        "Automate regular appointments for vaccinations, follow-ups, or wellness plans, ensuring clients are always on track.",
    }),
  },
  {
    title: translate({
      id: "animalHealth.features.notifications.title",
      message: "Notify and remind customers about their appointments.",
    }),
    description: translate({
      id: "animalHealth.features.notifications.description",
      message:
        "Automatically send appointment confirmations, reminders, and updates to clients and staff for a smooth and hassle-free experience.",
    }),
  },
];

const benefits: Benefit[] = [
  {
    title: translate({
      id: "animalHealth.benefits.simplifiedScheduling.title",
      message: "Streamlined Appointment Management.",
    }),
    description: translate({
      id: "animalHealth.benefits.simplifiedScheduling.description",
      message:
        "Automates scheduling for routine, diagnostic, and recurring care, reducing manual effort.",
    }),
  },
  {
    title: translate({
      id: "animalHealth.benefits.efficientResourceAllocation.title",
      message: "Efficient Resource Allocation",
    }),
    description: translate({
      id: "animalHealth.benefits.efficientResourceAllocation.description",
      message:
        "Ensures examination rooms and equipment are optimally utilized without conflicts.",
    }),
  },
  {
    title: translate({
      id: "animalHealth.benefits.improvedCustomerSatisfaction.title",
      message:
        "Improved customer satisfaction through automated reminders and smooth booking processes",
    }),
    description: translate({
      id: "animalHealth.benefits.improvedCustomerSatisfaction.description",
      message:
        "Notifications keep customers informed, while intuitive systems enable effortless appointment creation and changes.",
    }),
  },
];

const AnimalHealthSolutionPage: React.FC = () => {
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
        id: "animalHealthPage.title",
        message: "ZenSched for Veterinary Clinic",
      })}
      description={translate({
        id: "animalHealthPage.description",
        message: "ZenSched for Veterinary Clinic",
      })}
    >
      <main>
        <Container sx={{ my: 5 }}>
          <SolutionHeader
            lottieProps={{
              animationData: animalHealthAnimationData,
            }}
            solutionTitle={
              <Translate id="animalHealthPage.intro.title">
                Simplified Scheduling for Animal Health Services with ZenSched
              </Translate>
            }
            solutionDescription={
              <Translate id="animalHealthPage.intro.caption">
                Simplify appointment management for veterinarians with varying
                schedules. Handle resource allocation, recurring visits, and
                last-minute changes—all with one powerful tool.
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
                  maxWidth: 700,
                },
              }}
              features={features}
              title={
                <Translate id="animalHealthPage.solutionFeaturesSection.title">
                  Effortless booking management, simplified for your success.
                </Translate>
              }
              description={
                <Translate id="animalHealthPage.solutionFeaturesSection.description">
                  A veterinary clinic offers a variety of in-clinic services,
                  including routine checkups, vaccinations, diagnostic exams,
                  and wellness consultations for pets and livestock. Managing
                  veterinarian schedules, appointment bookings, and shared
                  resources such as diagnostic tools and examination rooms is
                  crucial to ensuring smooth operations. ZenSched helps
                  streamline the scheduling process, reduces booking conflicts,
                  and enhances the customer experience.
                </Translate>
              }
            />
          </Container>
        </Box>

        <Container>
          <Typography variant="h2" fontWeight="900">
            <Translate
              id="animalHealthPage.workflowExampleSection.title"
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
                <Typography variant="h6" component="span">
                  Customer Booking
                </Typography>

                <Typography>
                  A client wants to book a wellness checkup for their pet at 3
                  PM on a Friday.
                </Typography>

                <Typography>The ZenSched API checks:</Typography>

                <Typography> • The availability of veterinarians.</Typography>
                <Typography>
                  • The availability of examination rooms.
                </Typography>
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
                  If all veterinarians or examination rooms are fully booked for
                  3 PM, ZenSched suggests the next available time slot, ensuring
                  seamless scheduling.
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
                  Thanks to ZenSched’s WebHooks functionality, both the client
                  and the assigned veterinarian receive confirmation emails,
                  along with reminders before the appointment.
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

export default AnimalHealthSolutionPage;
