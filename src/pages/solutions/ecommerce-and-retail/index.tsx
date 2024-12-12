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
import ecommerceAndRetailAnimationData from "../../../assets/lottie/ecommerce-and-retail.json";
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
      id: "ecommerceAndRetail.features.manageInStoreAppointments.title",
      message: "Manage In-Store Appointments",
    }),
    description: translate({
      id: "ecommerceAndRetail.features.manageInStoreAppointments.description",
      message:
        "Customers can book personal shopping consultations or product pickups, and ZenSched ensures staff and space availability.",
    }),
  },
  {
    title: translate({
      id: "ecommerceAndRetail.features.coordinateDeliverySchedules.title",
      message: "Coordinate Delivery Schedules.",
    }),
    description: translate({
      id: "ecommerceAndRetail.features.coordinateDeliverySchedules.description",
      message:
        "Sync delivery drivers’ routes and availability with customer-preferred time slots.",
    }),
  },
  {
    title: translate({
      id: "ecommerceAndRetail.features.bookingRules.title",
      message: "Set Custom Booking Rules.",
    }),
    description: translate({
      id: "ecommerceAndRetail.features.bookingRules.description",
      message:
        "Apply unique rules such as specific pickup windows for e-commerce orders or time slots for delivery services.",
    }),
  },
  {
    title: translate({
      id: "ecommerceAndRetail.features.notifications.title",
      message: "Notify and remind customers about their appointments.",
    }),
    description: translate({
      id: "ecommerceAndRetail.features.notifications.description",
      message:
        "Send timely reminders and updates to keep customers informed and on time.",
    }),
  },
];

const benefits: Benefit[] = [
  {
    title: translate({
      id: "ecommerceAndRetail.benefits.simplifiedScheduling.title",
      message: "Simplified and efficient scheduling for retail operations.",
    }),
    description: translate({
      id: "ecommerceAndRetail.benefits.simplifiedScheduling.description",
      message:
        "Streamline in-store and delivery appointment management with tools that centralize scheduling, reducing manual effort.",
    }),
  },
  {
    title: translate({
      id: "ecommerceAndRetail.benefits.reducedBookingConflicts.title",
      message: "Optimized resource allocation.",
    }),
    description: translate({
      id: "ecommerceAndRetail.benefits.reducedBookingConflicts.description",
      message:
        "Intelligent algorithms ensure shared resources like pickup counters and delivery slots are allocated without conflicts, enhancing operational efficiency.",
    }),
  },
  {
    title: translate({
      id: "ecommerceAndRetail.benefits.improvedCustomerSatisfaction.title",
      message:
        "Enhanced customer satisfaction through notifications and flexibility.",
    }),
    description: translate({
      id: "ecommerceAndRetail.benefits.improvedCustomerSatisfaction.description",
      message:
        "Automated reminders and real-time updates keep customers informed, while flexible scheduling options make bookings and rescheduling effortless.",
    }),
  },
];

const EcommerceAndRetailSolutionPage: React.FC = () => {
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
        id: "ecommerceAndRetailPage.title",
        message: "ZenSched for E-commerce and Retail",
      })}
      description={translate({
        id: "ecommerceAndRetailPage.description",
        message: "Advanced Scheduling for E-Commerce and Retail with ZenSched",
      })}
    >
      <main>
        <Container sx={{ my: 5 }}>
          <SolutionHeader
            lottieProps={{
              animationData: ecommerceAndRetailAnimationData,
            }}
            solutionTitle={
              <Translate id="ecommerceAndRetailPage.intro.title">
                Advanced Scheduling for E-Commerce and Retail with ZenSched
              </Translate>
            }
            solutionDescription={
              <Translate id="ecommerceAndRetailPage.intro.caption">
                Streamline scheduling for retail and e-commerce operations.
                Manage in-store appointments, delivery slots, and shared
                resources effortlessly—all in one powerful platform.
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
                <Translate id="ecommerceAndRetailPage.solutionFeaturesSection.title">
                  Effortless booking management, simplified for your success.
                </Translate>
              }
              description={
                <Translate id="ecommerceAndRetailPage.solutionFeaturesSection.description">
                  RetailChain & Co. operates a network of physical stores
                  alongside an e-commerce platform. The company offers services
                  such as in-store product pickups, personal shopping
                  appointments, inventory management, and delivery scheduling.
                  Coordinating between in-store staff, delivery drivers, and
                  shared resources (e.g., storage space and checkout counters)
                  is complex, especially during peak shopping seasons. ZenSched
                  helps RetailChain & Co. streamline scheduling, optimize
                  resource allocation, and improve the overall customer
                  experience.
                </Translate>
              }
            />
          </Container>
        </Box>

        <Container>
          <Typography variant="h2" fontWeight="900">
            <Translate
              id="ecommerceAndRetailPage.workflowExampleSection.title"
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
                  A customer wants to schedule an in-store product pickup for 3
                  PM on a Saturday.
                </Typography>

                <Typography>The ZenSched API checks:</Typography>

                <Typography>
                  • The availability of staff members assigned to manage
                  pickups.
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
                  If all pickup slots for 3 PM are fully booked, ZenSched
                  automatically suggests the next available slot, ensuring a
                  smooth customer experience.
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
                  Thanks to the Webhooks functionality of ZenSched, both the
                  customer and the assigned staff receive confirmation emails
                  and reminders, ensuring everyone is on the same page.
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

export default EcommerceAndRetailSolutionPage;
