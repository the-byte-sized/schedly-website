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
import recruitmentAndStaffingAnimationData from "../../../assets/lottie/recruitment-and-staffing.json";
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
      id: "recruitmentAndStaffing.features.streamlineInterviewScheduling.title",
      message: "Streamline Interview Scheduling",
    }),
    description: translate({
      id: "recruitmentAndStaffing.features.streamlineInterviewScheduling.description",
      message:
        "Coordinate interviews across multiple candidates, recruiters, and hiring managers with dynamic availability tracking.",
    }),
  },
  {
    title: translate({
      id: "recruitmentAndStaffing.features.manageOnboardingAndTrainingSessions.title",
      message: "Manage Onboarding and Training Sessions",
    }),
    description: translate({
      id: "recruitmentAndStaffing.features.manageOnboardingAndTrainingSessions.description",
      message:
        "Schedule onboarding meetings, orientation sessions, and team training events efficiently.",
    }),
  },
  {
    title: translate({
      id: "recruitmentAndStaffing.features.adaptToLastMinuteChanges.title",
      message: "Adapt to Last-Minute Changes",
    }),
    description: translate({
      id: "recruitmentAndStaffing.features.adaptToLastMinuteChanges.description",
      message:
        "Reassign interview slots, update schedules, or accommodate last-minute cancellations with ease.",
    }),
  },
  {
    title: translate({
      id: "recruitmentAndStaffing.features.automateNotifications.title",
      message: "Automate Notifications",
    }),
    description: translate({
      id: "recruitmentAndStaffing.features.automateNotifications.description",
      message:
        "Send automated confirmations, reminders, and updates to candidates, recruiters, and hiring managers.",
    }),
  },
];

const benefits: Benefit[] = [
  {
    title: translate({
      id: "recruitmentAndStaffing.benefits.simplifiedScheduling.title",
      message: "Simplified Scheduling",
    }),
    description: translate({
      id: "recruitmentAndStaffing.benefits.simplifiedScheduling.description",
      message:
        "Automates interview and onboarding schedules, reducing administrative overhead.",
    }),
  },
  {
    title: translate({
      id: "recruitmentAndStaffing.benefits.reducedBookingConflicts.title",
      message: "Reduced booking conflicts.",
    }),
    description: translate({
      id: "recruitmentAndStaffing.benefits.reducedBookingConflicts.description",
      message:
        "Intelligent algorithms prevent overlapping bookings, ensuring seamless beauty salon operations.",
    }),
  },
  {
    title: translate({
      id: "recruitmentAndStaffing.benefits.enhancedCommunication.title",
      message: "Enhanced Communication",
    }),
    description: translate({
      id: "recruitmentAndStaffing.benefits.enhancedCommunication.description",
      message:
        "Keeps candidates, recruiters, and hiring managers informed with automated updates and reminders.",
    }),
  },
];

const RecruitmentAndStaffingSolutionPage: React.FC = () => {
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
        id: "recruitmentAndStaffingPage.title",
        message: "ZenSched for Recruitment and Staffing",
      })}
      description={translate({
        id: "recruitmentAndStaffingPage.description",
        message:
          "Advanced Scheduling for Recruitment and Staffing with ZenSched",
      })}
    >
      <main>
        <Box sx={{ background: palette.primary.light }}>
          <Container sx={{ mb: 5 }}>
            <SolutionHeader
              lottieProps={{
                animationData: recruitmentAndStaffingAnimationData,
              }}
              solutionTitle={
                <Translate id="recruitmentAndStaffingPage.intro.title">
                  Advanced Scheduling for Recruitment and Staffing with ZenSched
                </Translate>
              }
              solutionDescription={
                <Translate id="recruitmentAndStaffingPage.intro.caption">
                  Streamline interview scheduling for recruiters with varying
                  availability. Manage candidate bookings, resource allocation,
                  and last-minute changes—all with one powerful tool.
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
                <Translate id="recruitmentAndStaffingPage.solutionFeaturesSection.title">
                  Effortless booking management, simplified for your success.
                </Translate>
              }
              description={
                <Translate id="recruitmentAndStaffingPage.solutionFeaturesSection.description">
                  manages candidate interviews, staff onboarding, and employee
                  training sessions for various clients. The company coordinates
                  schedules for recruiters, hiring managers, and candidates
                  while managing shared resources such as meeting rooms and
                  video conferencing tools. With high volumes of interviews and
                  tight deadlines, effective scheduling is critical to maintain
                  smooth operations. ZenSched helps TalentHire streamline
                  scheduling, reduce conflicts, and improve communication across
                  all stakeholders.
                </Translate>
              }
            />
          </Container>
        </Box>

        <Container>
          <Typography variant="h2" fontWeight="900">
            <Translate
              id="recruitmentAndStaffingPage.workflowExampleSection.title"
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
                  Candidate Booking
                </Typography>

                <Typography>
                  A recruiter wants to schedule a candidate interview for 10 AM
                  on a Thursday.
                </Typography>

                <Typography>The ZenSched API checks:</Typography>

                <Typography> • The availability of the recruiter;</Typography>

                <Typography>
                  • The availability of the hiring manager;
                </Typography>

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
                  If any of the required resources are unavailable, ZenSched
                  automatically suggests the next available slot, ensuring a
                  smooth interview process.
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
                  Thanks to the WebHooks functionality of ZenSched, the
                  candidate, recruiter, and hiring manager receive confirmation
                  emails and reminders, ensuring everyone is prepared for the
                  interview.
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

export default RecruitmentAndStaffingSolutionPage;
