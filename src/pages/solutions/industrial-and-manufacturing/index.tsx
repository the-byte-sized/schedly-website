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
  IconClipboardText,
  IconNotification,
} from "@tabler/icons-react";
import Layout from "@theme/Layout";
import React from "react";
import Benefits, { type Benefit } from "../sections/Benefits";
import SolutionFeatures, { Feature } from "../sections/Features";
import SolutionHeader from "../sections/Header";
// @ts-expect-error
import industrialAndManufacturingAnimationData from "../../../assets/lottie/industrial-and-manufacturing.json";
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
      id: "industrialAndManufacturing.features.coordinateActivities.title",
      message: "Manage Production Schedules.",
    }),
    description: translate({
      id: "industrialAndManufacturing.features.coordinateActivities.description",
      message:
        "Coordinate production line activities and allocate shared machinery, ensuring seamless transitions between tasks.",
    }),
  },
  {
    title: translate({
      id: "industrialAndManufacturing.features.optimizeMaintenanceScheduling.title",
      message: "Optimize Maintenance Scheduling.",
    }),
    description: translate({
      id: "industrialAndManufacturing.features.optimizeMaintenanceScheduling.description",
      message:
        "Plan preventive maintenance and equipment servicing without disrupting production workflows.",
    }),
  },
  {
    title: translate({
      id: "industrialAndManufacturing.features.handleWorkforceCoordination.title",
      message: "Handle Workforce Coordination",
    }),
    description: translate({
      id: "industrialAndManufacturing.features.handleWorkforceCoordination.description",
      message:
        "Schedule employee shifts and assign tasks based on expertise, availability, and production needs.",
    }),
  },
  {
    title: translate({
      id: "industrialAndManufacturing.features.notifications.title",
      message: "Automate Notifications",
    }),
    description: translate({
      id: "industrialAndManufacturing.features.notifications.description",
      message:
        "Send alerts to teams about production schedule updates, maintenance tasks, and shift changes to keep operations running smoothly.",
    }),
  },
];

const benefits: Benefit[] = [
  {
    title: translate({
      id: "industrialAndManufacturing.benefits.optimizedResourceUtilizaion.title",
      message: "Optimized Resource Utilization",
    }),
    description: translate({
      id: "industrialAndManufacturing.benefits.optimizedResourceUtilizaion.description",
      message:
        "Streamline appointment management with tools that centralize and organize scheduling tasks, reducing manual effort.",
    }),
  },
  {
    title: translate({
      id: "industrialAndManufacturing.benefits.reducedDowntime.title",
      message: "Reduced Downtime",
    }),
    description: translate({
      id: "industrialAndManufacturing.benefits.reducedDowntime.description",
      message:
        "Streamlines maintenance scheduling to prevent unexpected equipment failures.",
    }),
  },
  {
    title: translate({
      id: "industrialAndManufacturing.benefits.enhancedCommunication.title",
      message: "Enhanced Communication",
    }),
    description: translate({
      id: "industrialAndManufacturing.benefits.enhancedCommunication.description",
      message:
        "Automated notifications keep employees and supervisors informed, improving operational efficiency.",
    }),
  },
];

const IndustrialAndManufacturingSolutionPage: React.FC = () => {
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
        id: "industrialAndManufacturingPage.title",
        message: "ZenSched for Industrial and Manufacturing",
      })}
      description={translate({
        id: "industrialAndManufacturingPage.description",
        message: "Advanced Scheduling for Industrial and Manufacturing with ZenSched",
      })}
    >
      <main>
        <Container sx={{ my: 5 }}>
          <SolutionHeader
            lottieProps={{
              animationData: industrialAndManufacturingAnimationData,
            }}
            solutionTitle={
              <Translate id="industrialAndManufacturingPage.intro.title">
                Advanced Scheduling for a Beauty Salon
              </Translate>
            }
            solutionDescription={
              <Translate id="industrialAndManufacturingPage.intro.caption">
                Streamline production scheduling for manufacturing teams. Manage
                equipment allocation, workforce shifts, and maintenance
                tasks—all with one powerful tool.
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
                <Translate id="industrialAndManufacturingPage.solutionFeaturesSection.title">
                  Effortless booking management, simplified for your success.
                </Translate>
              }
              description={
                <Translate id="industrialAndManufacturingPage.solutionFeaturesSection.description">
                  A manufacturing company that manages production schedules,
                  maintenance tasks, and workforce coordination. The company
                  operates multiple production lines, shared machinery, and
                  tools that require precise scheduling to avoid downtime and
                  maximize efficiency. In addition, SmartMFG coordinates
                  employee shifts, equipment maintenance, and inventory checks.
                  ZenSched provides a robust scheduling solution to optimize
                  operations, ensure resource allocation, and streamline
                  communication across teams.
                </Translate>
              }
            />
          </Container>
        </Box>

        <Container>
          <Typography variant="h2" fontWeight="900">
            <Translate
              id="industrialAndManufacturingPage.workflowExampleSection.title"
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
                  <IconClipboardText />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  <Typography>Task Scheduling</Typography>
                </Typography>

                <Typography>
                  A supervisor wants to schedule a task on the assembly line for
                  10 AM on a Monday.
                </Typography>

                <Typography>The ZenSched API checks:</Typography>

                <Typography>
                  • The availability of the assembly line.
                </Typography>

                <Typography>
                  • The availability of necessary tools and machinery.
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
                  If the requested slot is unavailable due to ongoing tasks or
                  maintenance, ZenSched automatically suggests the next
                  available time, ensuring minimal downtime.
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
                  Thanks to the WebHooks functionality of ZenSched, both the
                  supervisor and the assigned staff receive task confirmation
                  emails and updates, ensuring seamless coordination.
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

export default IndustrialAndManufacturingSolutionPage;
