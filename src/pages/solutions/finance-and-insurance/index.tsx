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
import financeAndInsuranceAnimationData from "../../../assets/lottie/finance-and-insurance.json";
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
      id: "financeAndInsurance.features.synchronizeAvailability.title",
      message: "Manage Client Consultations",
    }),
    description: translate({
      id: "financeAndInsurance.features.synchronizeAvailability.description",
      message:
        "Schedule appointments for financial planning, investment reviews, insurance consultations, and claims assistance while aligning with advisor and agent availability.",
    }),
  },
  {
    title: translate({
      id: "financeAndInsurance.features.handleSharedResources.title",
      message: "Optimize Shared Resources",
    }),
    description: translate({
      id: "financeAndInsurance.features.handleSharedResources.description",
      message:
        "Allocate shared meeting rooms, conference facilities, and specialized tools like video conferencing systems for hybrid appointments.",
    }),
  },
  {
    title: translate({
      id: "financeAndInsurance.features.bookingRules.title",
      message: "Support Custom Booking Policies",
    }),
    description: translate({
      id: "financeAndInsurance.features.bookingRules.description",
      message:
        "Implement unique rules for consultations, including buffer times between appointments, priority handling for VIP clients, and advance booking requirements.",
    }),
  },
  {
    title: translate({
      id: "financeAndInsurance.features.notifications.title",
      message: "Notify and remind customers about their appointments.",
    }),
    description: translate({
      id: "financeAndInsurance.features.notifications.description",
      message:
        "Send timely reminders and updates to keep customers informed and on time.",
    }),
  },
];

const benefits: Benefit[] = [
  {
    title: translate({
      id: "financeAndInsurance.benefits.simplifiedScheduling.title",
      message: "Streamlined Appointment Management",
    }),
    description: translate({
      id: "financeAndInsurance.benefits.simplifiedScheduling.description",
      message:
        "Automates scheduling for consultations, claims support, and financial reviews, reducing manual effort.",
    }),
  },
  {
    title: translate({
      id: "financeAndInsurance.benefits.reducedBookingConflicts.title",
      message: "Reduced booking conflicts.",
    }),
    description: translate({
      id: "financeAndInsurance.benefits.reducedBookingConflicts.description",
      message:
        "Intelligent algorithms prevent overlapping bookings, ensuring seamless operations.",
    }),
  },
  {
    title: translate({
      id: "financeAndInsurance.benefits.improvedCustomerSatisfaction.title",
      message:
        "Improved customer satisfaction through automated reminders and smooth booking processes",
    }),
    description: translate({
      id: "financeAndInsurance.benefits.improvedCustomerSatisfaction.description",
      message:
        "Notifications keep customers informed, while intuitive systems enable effortless appointment creation and changes.",
    }),
  },
];

const FinanceAndInsuranceSolutionPage: React.FC = () => {
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
        id: "financeAndInsurancePage.title",
        message: "ZenSched for Beauty Salons",
      })}
      description={translate({
        id: "financeAndInsurancePage.description",
        message: "ZenSched for Beauty Salons",
      })}
    >
      <main>
        <Container sx={{ my: 5 }}>
          <SolutionHeader
            lottieProps={{
              animationData: financeAndInsuranceAnimationData,
            }}
            solutionTitle={
              <Translate id="financeAndInsurancePage.intro.title">
                Advanced Scheduling for Finance and Insurance with ZenSched
              </Translate>
            }
            solutionDescription={
              <Translate id="financeAndInsurancePage.intro.caption">
                Streamline appointment scheduling for financial advisors and
                insurance agents. Manage client consultations, resource
                allocation, and last-minute changes—all with one powerful tool.
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
                <Translate id="financeAndInsurancePage.solutionFeaturesSection.title">
                  Effortless booking management, simplified for your success.
                </Translate>
              }
              description={
                <Translate id="financeAndInsurancePage.solutionFeaturesSection.description">
                  A company offers financial planning, investment advisory, and
                  wealth management services, while SecureInsure specializes in
                  insurance policy consultations, claims processing, and
                  renewals. Both sectors require managing appointments with
                  clients, coordinating staff availability, and handling shared
                  resources like meeting rooms and specialized tools. ZenSched
                  provides a streamlined solution to manage these scheduling
                  needs, ensure efficient resource allocation, and enhance
                  client communication.
                </Translate>
              }
            />
          </Container>
        </Box>

        <Container>
          <Typography variant="h2" fontWeight="900">
            <Translate
              id="financeAndInsurancePage.workflowExampleSection.title"
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
                  A client wants to schedule a financial consultation for 10 AM
                  on a Friday.
                </Typography>

                <Typography>The ZenSched API checks:</Typography>

                <Typography>
                  • The availability of the financial advisor;
                </Typography>
                <Typography>• The availability of the meeting room.</Typography>
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
                  If the requested time is fully booked, ZenSched automatically
                  suggests the next available slot, ensuring no delays in
                  service.
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
                Thanks to the WebHooks functionality of ZenSched, both the client and the assigned financial advisor receive confirmation emails and reminders, ensuring a smooth and well-prepared consultation.
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

export default FinanceAndInsuranceSolutionPage;
