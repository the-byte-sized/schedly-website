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
  IconCalendarStats,
  IconCheck,
  IconNotification
} from "@tabler/icons-react";
import Layout from "@theme/Layout";
import React from "react";
import Benefits, { type Benefit } from "../sections/Benefits";
import SolutionFeatures, { Feature } from "../sections/Features";
import SolutionHeader from "../sections/Header";
// @ts-expect-error
import techAndSoftwareAnimationData from "../../../assets/lottie/tech-and-software.json";
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
      id: "techAndSoftware.features.manageTeamMeetings.title",
      message: "Manage Team Meetings",
    }),
    description: translate({
      id: "techAndSoftware.features.manageTeamMeetings.description",
      message:
        "Schedule standups, sprint reviews, and retrospectives efficiently, accommodating team members in different time zones.",
    }),
  },
  {
    title: translate({
      id: "techAndSoftware.features.optimizeResourceAllocation.title",
      message: "Optimize Resource Allocation",
    }),
    description: translate({
      id: "techAndSoftware.features.optimizeResourceAllocation.description",
      message:
        "Allocate shared resources like meeting rooms, test environments, and demo equipment without overlaps.",
    }),
  },
  {
    title: translate({
      id: "techAndSoftware.features.coordinateCrossTeamCollaboration.title",
      message: "Coordinate Cross-Team Collaboration",
    }),
    description: translate({
      id: "techAndSoftware.features.coordinateCrossTeamCollaboration.description",
      message:
        "Align schedules for cross-functional teams working on shared projects or dependencies.",
    }),
  },
  {
    title: translate({
      id: "techAndSoftware.features.notifications.title",
      message: "Automate Notifications and Updates",
    }),
    description: translate({
      id: "techAndSoftware.features.notifications.description",
      message:
        "Send automated confirmations, reminders, and real-time updates for schedule changes.",
    }),
  },
];

const benefits: Benefit[] = [
  {
    title: translate({
      id: "techAndSoftware.benefits.improvedCollaboration.title",
      message: "Improved Collaboration",
    }),
    description: translate({
      id: "techAndSoftware.benefits.improvedCollaboration.description",
      message:
        "Aligns global teams, ensuring seamless communication and efficient workflows.",
    }),
  },
  {
    title: translate({
      id: "techAndSoftware.benefits.increasedDeveloperProductivity.title",
      message: "Increased Developer Productivity",
    }),
    description: translate({
      id: "techAndSoftware.benefits.increasedDeveloperProductivity.description",
      message:
        "Supports uninterrupted focus time by reducing scheduling conflicts.",
    }),
  },
  {
    title: translate({
      id: "techAndSoftware.benefits.improvedCustomerSatisfaction.title",
      message: "Real-Time Flexibility",
    }),
    description: translate({
      id: "techAndSoftware.benefits.improvedCustomerSatisfaction.description",
      message:
        "Adapts to schedule changes, last-minute requests, and dynamic team needs.",
    }),
  },
];

const TechAndSoftwareSolutionPage: React.FC = () => {
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
        id: "techAndSoftwareSolutionPage.title",
        message: "ZenSched for Tech and Software Teams",
      })}
      description={translate({
        id: "techAndSoftwareSolutionPage.description",
        message:
          "Advanced Scheduling for Tech and Software Teams with ZenSched",
      })}
    >
      <main>
        <Container sx={{ my: 5 }}>
          <SolutionHeader
            lottieProps={{
              animationData: techAndSoftwareAnimationData,
            }}
            solutionTitle={
              <Translate id="techAndSoftwareSolutionPage.intro.title">
                Advanced Scheduling for Tech and Software Teams with ZenSched
              </Translate>
            }
            solutionDescription={
              <Translate id="techAndSoftwareSolutionPage.intro.caption">
                Streamline scheduling for tech teams with dynamic availability.
                Manage meetings, allocate resources, and adapt to last-minute
                changes—all with one powerful tool.
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
                <Translate id="techAndSoftwareSolutionPage.solutionFeaturesSection.title">
                  Effortless booking management, simplified for your success.
                </Translate>
              }
              description={
                <Translate>
                  A fast-growing software company that manages team meetings,
                  product demos, code reviews, and developer training sessions.
                  The company operates across multiple time zones and uses
                  shared resources like meeting rooms, video conferencing tools,
                  and test environments. Coordinating schedules for developers,
                  project managers, and stakeholders is essential to meet
                  deadlines and ensure smooth collaboration. ZenSched provides a
                  powerful scheduling solution to manage resources, align global
                  teams, and streamline communication.
                </Translate>
              }
            />
          </Container>
        </Box>

        <Container>
          <Typography variant="h2" fontWeight="900">
            <Translate
              id="techAndSoftwareSolutionPage.workflowExampleSection.title"
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
                  <IconCalendarStats />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  <Typography>Meeting Booking</Typography>
                </Typography>

                <Typography>
                  A project manager wants to schedule a sprint planning meeting
                  for 10 AM on a Monday.
                </Typography>

                <Typography>The ZenSched API checks:</Typography>

                <Typography>• The availability of team members;</Typography>

                <Typography>
                  • The availability of a meeting room or video conferencing
                  tool.
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
                  If the requested time slot is unavailable due to conflicts,
                  ZenSched automatically suggests the next available slot,
                  ensuring smooth team coordination.
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
                  Thanks to the WebHooks functionality of ZenSched, all team
                  members receive meeting invitations and reminders, ensuring
                  everyone is prepared and aligned.
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

export default TechAndSoftwareSolutionPage;
