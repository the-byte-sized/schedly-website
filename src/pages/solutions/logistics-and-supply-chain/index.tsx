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
import logisticAndSupplyChainAnimationData from "../../../assets/lottie/logistic-and-supply-chain.json";
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
      id: "logisticsAndSupplyChain.features.manageShipmentSchedules.title",
      message: "Manage Shipment Schedules",
    }),
    description: translate({
      id: "logisticsAndSupplyChain.features.manageShipmentSchedules.description",
      message:
        "Coordinate pickup and delivery schedules, ensuring driver availability and optimized routes.",
    }),
  },
  {
    title: translate({
      id: "logisticsAndSupplyChain.features.optimizeFleet.title",
      message: "Optimize Fleet and Warehouse Management",
    }),
    description: translate({
      id: "logisticsAndSupplyChain.features.optimizeFleet.description",
      message:
        "Efficiently allocate trucks, loading docks, and warehouse storage space to avoid bottlenecks.",
    }),
  },
  {
    title: translate({
      id: "logisticsAndSupplyChain.features.bookingRules.title",
      message: "Support Dynamic Scheduling Rules",
    }),
    description: translate({
      id: "logisticsAndSupplyChain.features.bookingRules.description",
      message:
        "Adapt to priority shipments, real-time delays, and seasonal demand with flexible scheduling policies.",
    }),
  },
  {
    title: translate({
      id: "logisticsAndSupplyChain.features.notifications.title",
      message: "Send Notifications and Updates",
    }),
    description: translate({
      id: "logisticsAndSupplyChain.features.notifications.description",
      message:
        "Notify drivers, warehouse teams, and clients about schedule updates, delivery status, and potential delays.",
    }),
  },
];

const benefits: Benefit[] = [
  {
    title: translate({
      id: "logisticsAndSupplyChain.benefits.improvedResourceUtilization.title",
      message: "Improved Resource Utilization",
    }),
    description: translate({
      id: "logisticsAndSupplyChain.benefits.improvedResourceUtilization.description",
      message:
        "Maximizes the use of trucks, docks, and equipment, reducing idle time and bottlenecks.",
    }),
  },
  {
    title: translate({
      id: "logisticsAndSupplyChain.benefits.increasedOpearionalEfficiency.title",
      message: "Increased Operational Efficiency",
    }),
    description: translate({
      id: "logisticsAndSupplyChain.benefits.increasedOpearionalEfficiency.description",
      message:
        "Streamlines workflows across the supply chain, ensuring timely deliveries and reduced costs.",
    }),
  },
  {
    title: translate({
      id: "logisticsAndSupplyChain.benefits.enhancedCommunication.title",
      message: "	Enhanced Communication",
    }),
    description: translate({
      id: "logisticsAndSupplyChain.benefits.enhancedCommunication.description",
      message:
        "Keeps drivers, warehouse staff, and clients informed with real-time updates and notifications.",
    }),
  },
];

const LogisticsAndSupplyChainSolutionPage: React.FC = () => {
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
        id: "logisticsAndSupplyChainPage.title",
        message: "ZenSched for Beauty Salons",
      })}
      description={translate({
        id: "logisticsAndSupplyChainPage.description",
        message:
          "Advanced Scheduling for Logistics and Supply Chain with ZenSched",
      })}
    >
      <main>
        <Container sx={{ my: 5 }}>
          <SolutionHeader
            lottieProps={{
              animationData: logisticAndSupplyChainAnimationData,
            }}
            solutionTitle={
              <Translate id="logisticsAndSupplyChainPage.intro.title">
                Advanced Scheduling for Logistics and Supply Chain with ZenSched
              </Translate>
            }
            solutionDescription={
              <Translate id="logisticsAndSupplyChainPage.intro.caption">
                Streamline shipment scheduling for logistics teams. Manage
                driver assignments, warehouse resources, and last-minute
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
                <Translate id="logisticsAndSupplyChainPage.solutionFeaturesSection.title">
                  Effortless booking management, simplified for your success.
                </Translate>
              }
              description={
                <Translate id="logisticsAndSupplyChainPage.solutionFeaturesSection.description">
                  A logistics company manages a complex network of warehouses,
                  delivery routes, and supply chain operations. The company
                  handles a variety of tasks, including shipment scheduling,
                  fleet management, warehouse space allocation, and loading dock
                  assignments. Coordinating drivers, warehouse staff, and shared
                  resources is critical to maintaining smooth operations and
                  timely deliveries. ZenSched provides an advanced scheduling
                  solution to optimize resource allocation, improve
                  communication, and streamline logistics workflows.
                </Translate>
              }
            />
          </Container>
        </Box>

        <Container>
          <Typography variant="h2" fontWeight="900">
            <Translate
              id="logisticsAndSupplyChainPage.workflowExampleSection.title"
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
                  Task Scheduling
                </Typography>

                <Typography>
                  A logistics manager wants to schedule a shipment delivery for
                  10 AM on a Tuesday.
                </Typography>

                <Typography>The ZenSched API checks:</Typography>

                <Typography>
                  • The availability of drivers and trucks;
                </Typography>

                <Typography>
                  • The availability of loading docks at the destination
                  warehouse.
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
                  If the requested time is unavailable due to resource conflicts
                  or delays, ZenSched automatically suggests the next available
                  slot, ensuring timely delivery.
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
                  logistics manager and the assigned driver receive confirmation
                  emails and real-time updates about the schedule, ensuring
                  seamless coordination.
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

export default LogisticsAndSupplyChainSolutionPage;
