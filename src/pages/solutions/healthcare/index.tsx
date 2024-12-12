import Link from "@docusaurus/Link";
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
  List,
  ListItem,
  ListItemText,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Container from "@site/src/components/Container";
import {
  IconBook,
  IconCalendarCog,
  IconCheck,
  IconNotification,
  IconUser,
} from "@tabler/icons-react";
import CodeBlock from "@theme/CodeBlock";
import Layout from "@theme/Layout";
import React from "react";
import Benefits, { type Benefit } from "../sections/Benefits";
import SolutionFeatures, { Feature } from "../sections/Features";
import SolutionHeader from "../sections/Header";
// @ts-expect-error
import healtcareAnimationData from "../../../assets/lottie/healtcare.json";
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
      id: "healthcare.benefits.synchronizeAvailability.title",
      message: "Synchronize availability across multiple specialists.",
    }),
    description: translate({
      id: "healthcare.benefits.synchronizeAvailability.title",
      message:
        "Effortlessly manage and coordinate schedules for all your specialists.",
    }),
  },
  {
    title: translate({
      id: "healthcare.benefits.manageClassSchedules.title",
      message: "Handle shared resources.",
    }),
    description: translate({
      id: "healthcare.benefits.manageClassSchedules.title",
      message:
        "Ensure optimal use of rooms, equipment, and shared resources without conflicts.",
    }),
  },
  {
    title: translate({
      id: "healthcare.benefits.manageClassSchedules.title",
      message: "Support different booking rules per specialty.",
    }),
    description: translate({
      id: "healthcare.benefits.manageClassSchedules.title",
      message:
        "Customize booking policies to match the unique needs of each specialty.",
    }),
  },
  {
    title: translate({
      id: "healthcare.benefits.manageClassSchedules.title",
      message: "Notify and remind patients about their appointments.",
    }),
    description: translate({
      id: "healthcare.benefits.manageClassSchedules.title",
      message:
        "Send timely reminders and updates to keep patients informed and on time.",
    }),
  },
];

const benefits: Benefit[] = [
  {
    title: translate({
      id: "healthcare.benefits.manageClassSchedules.title",
      message: "Simplified and efficient scheduling for the clinic.",
    }),
    description: translate({
      id: "healthcare.benefits.manageClassSchedules.title",
      message:
        "Streamline appointment management with tools that centralize and organize scheduling tasks, reducing manual effort.",
    }),
  },
  {
    title: translate({
      id: "healthcare.benefits.manageClassSchedules.title",
      message: "Reduced booking conflicts.",
    }),
    description: translate({
      id: "healthcare.benefits.manageClassSchedules.title",
      message:
        "Intelligent algorithms prevent overlapping bookings, ensuring seamless clinic operations.",
    }),
  },
  {
    title: translate({
      id: "healthcare.benefits.manageClassSchedules.title",
      message:
        "Improved patient satisfaction through automated reminders and smooth booking processes",
    }),
    description: translate({
      id: "healthcare.benefits.manageClassSchedules.title",
      message:
        "Notifications keep patients informed, while intuitive systems enable effortless appointment creation and changes.",
    }),
  },
];

const StyledList = styled(List)(({ theme }) => ({
  listStyleType: "disc",
  paddingLeft: theme.spacing(5),
}));

const StyledListItem = styled(ListItem)({
  display: "list-item",
});

const HealthcareSolutionPage: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const prevStepRef = React.useRef<number>(0);

  const handleNext = () => {
    prevStepRef.current = activeStep;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    prevStepRef.current = activeStep;
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Layout
      title={translate({
        id: "healthcareSolutionPage.title",
        message: "ZenSched for Healthcare",
      })}
      description={translate({
        id: "healthcareSolutionPage.description",
        message: "Revolutionizing Medical Scheduling",
      })}
    >
      <main>
        <Container sx={{ my: 5 }}>
          <SolutionHeader
            lottieProps={{
              animationData: healtcareAnimationData,
            }}
            solutionTitle={
              <Translate id="healthcareSolutionPage.intro.title">
                Appointment Scheduling for a Multi-Specialty Clinic
              </Translate>
            }
            solutionDescription={
              <Translate id="healthcareSolutionPage.intro.caption">
                Simplify appointment management for doctors with different
                schedules. Handle last-minute cancellations, emergency visits,
                and resource allocation—all with one tool.
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
                <Translate id="healthcareSolutionPage.solutionFeaturesSection.title">
                  Effortless booking management, simplified for your success.
                </Translate>
              }
              description={
                <Translate id="healthcareSolutionPage.solutionFeaturesSection.description">
                  A multi-specialty clinic offering a range of healthcare
                  services, including general consultations, specialist visits,
                  diagnostic tests, and wellness programs. The clinic manages
                  schedules for doctors, nurses, and diagnostic equipment while
                  coordinating patient appointments across multiple specialties.
                  Efficiently handling bookings, adapting to last-minute
                  changes, and ensuring optimal use of resources are critical to
                  providing high-quality patient care. ZenSched delivers a
                  robust scheduling solution to streamline appointment
                  management, optimize resource allocation, and enhance the
                  overall patient experience.
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
            data-aos-delay="250"
          >
            <Translate>Workflow Example</Translate>
          </Typography>

          <Timeline position="alternate">
            <TimelineItem
              data-aos={AOS.effect}
              data-aos-duration={AOS.duration}
              data-aos-easing={AOS.easing}
              data-aos-delay="250"
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
                  Patient Booking
                </Typography>

                <Typography>
                  A patient would like to book a physiotherapy session for 2 PM
                  on a Wednesday.
                </Typography>

                <Typography>The ZenSched API checks:</Typography>

                <Typography>• The physiotherapist’s availability;</Typography>

                <Typography>
                  • The availability of the consultation room.
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
                  If the consultation room is occupied, ZenSched suggests the
                  next available slot.
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
                  patient and physiotherapist can receive confirmation emails.
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
            data-aos-delay="250"
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
                  <StepContent></StepContent>
                </Step>
              ))}
            </Stepper>

            {activeStep === 0 && (
              <Box
                sx={{ my: 5, marginLeft: 1 }}
                data-aos={
                  prevStepRef.current > activeStep
                    ? "slide-right"
                    : "slide-left"
                }
                data-aos-duration={AOS.duration}
                data-aos-easing={AOS.easing}
              >
                <Typography variant="subtitle1">
                  In this step we are going to create the various entities
                  involved for this specific use case
                </Typography>

                <StyledList dense>
                  <StyledListItem>
                    <ListItemText
                      primary="Physiotherapist"
                      secondary="Resource"
                    />

                    <CodeBlock language="typescript" showLineNumbers>
                      {`const physiotherapist = await zensched.entities.create({
  name: 'Dr. John Doe',
  type: 'RESOURCE',
  metadata: {
    specialization: 'Musculoskeletal Physiotherapy',
    contact: 'john.doe@example.com',
  }
});
`}
                    </CodeBlock>
                  </StyledListItem>

                  <StyledListItem>
                    <ListItemText
                      primary="Consultation Room"
                      secondary="Resource"
                    />

                    <CodeBlock language="typescript" showLineNumbers>
                      {`const consultationRoom = await zensched.entities.create({
  name: 'Consultation Room A',
  type: 'RESOURCE'
});
`}
                    </CodeBlock>
                  </StyledListItem>

                  <StyledListItem>
                    <ListItemText
                      primary="Physiotherapy Session"
                      secondary="Service"
                    />
                  </StyledListItem>

                  <CodeBlock language="typescript" showLineNumbers>
                    {` await zensched.entities.create({
  name: 'Physiotherapy Session',
  type: 'SERVICE',
  dependencies: [physiotherapist.id, consultationRoom.id]
});
`}
                  </CodeBlock>
                </StyledList>
              </Box>
            )}

            {activeStep === 1 && (
              <Box
                sx={{ my: 5, marginLeft: 1 }}
                data-aos={
                  prevStepRef.current > activeStep
                    ? "slide-right"
                    : "slide-left"
                }
                data-aos-duration={AOS.duration}
                data-aos-easing={AOS.easing}
              >
                <Typography variant="subtitle1">
                  In this step we are going to create the rules involved for
                  this specific use case
                </Typography>

                <StyledList dense>
                  <StyledListItem>
                    <ListItemText primary="Physiotherapist" />

                    <CodeBlock language="typescript" showLineNumbers>
                      {`await zensched.rules.create({
    entityId: entityId, // ID of the physiotherapist entity
    type: 'WHITELIST',
    isRecurring: true,
    rule: {
      days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
      timeRanges: [{ start: '09:00', end: '13:00' }, { start: '14:00', end: '18:00' }],
    },
  });`}
                    </CodeBlock>
                  </StyledListItem>

                  <StyledListItem>
                    <ListItemText primary="Consultation Room" />

                    <CodeBlock language="typescript" showLineNumbers>
                      {`await zensched.rules.create({
    entityId: entityId, // ID of the consultation room entity
    type: 'WHITELIST',
    isRecurring: true,
    rule: {
      days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
      timeRanges: [{ start: '08:00', end: '20:00' }],
    },
  });`}
                    </CodeBlock>
                  </StyledListItem>
                </StyledList>
              </Box>
            )}

            {activeStep === 2 && (
              <Box
                sx={{ my: 5, marginLeft: 1 }}
                data-aos={
                  prevStepRef.current > activeStep
                    ? "slide-right"
                    : "slide-left"
                }
                data-aos-duration={AOS.duration}
                data-aos-easing={AOS.easing}
              >
                <Typography variant="subtitle1">
                  If you wish to handle notifications or have a custom handling
                  of events you can create webhooks for various lifecycle events
                  that we emit.
                </Typography>

                <StyledListItem>
                  <ListItemText
                    primary="Entity Created/Updated/Deleted"
                    secondary="Useful for CRM or ERP integrations"
                  />
                </StyledListItem>

                <StyledListItem>
                  <ListItemText
                    primary="Booking Updated/Deleted"
                    secondary="You can listen for this event and send confirmation emails, for example"
                  />
                </StyledListItem>

                <Typography variant="body1">
                  Please refer to the documentation for more examples.
                </Typography>

                <Button
                  LinkComponent={Link}
                  href="/docs/intro/welcome"
                  startIcon={<IconBook />}
                  sx={{ mt: 2 }}
                  variant="outlined"
                >
                  Read documentation
                </Button>
              </Box>
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

export default HealthcareSolutionPage;
