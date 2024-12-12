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
import restorationAndFoodDeliveryAnimationData from "../../../assets/lottie/restaurant-and-food-sharing.json";
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
      id: "restorationAndFoodDelivery.features.manageTableReservations.title",
      message: "Manage Table Reservations",
    }),
    description: translate({
      id: "restorationAndFoodDelivery.features.manageTableReservations.description",
      message:
        "Handle customer reservations for dine-in services, ensuring proper table allocation and avoiding overbooking.",
    }),
  },
  {
    title: translate({
      id: "restorationAndFoodDelivery.features.coordinateDeliverySchedules.title",
      message: "Coordinate Delivery Schedules",
    }),
    description: translate({
      id: "restorationAndFoodDelivery.features.coordinateDeliverySchedules.description",
      message:
        "Optimize delivery driver routes and availability to handle customer orders efficiently.",
    }),
  },
  {
    title: translate({
      id: "restorationAndFoodDelivery.features.handlePrivateDiningAndEvents.title",
      message: "Handle Private Dining and Events",
    }),
    description: translate({
      id: "restorationAndFoodDelivery.features.handlePrivateDiningAndEvents.description",
      message:
        "Schedule private rooms and coordinate staff and kitchen resources for special events.",
    }),
  },
  {
    title: translate({
      id: "restorationAndFoodDelivery.features.notifications.title",
      message: "Notify and remind customers about their appointments.",
    }),
    description: translate({
      id: "restorationAndFoodDelivery.features.notifications.description",
      message:
        "Send timely reminders and updates to keep customers informed and on time.",
    }),
  },
];

const benefits: Benefit[] = [
  {
    title: translate({
      id: "restorationAndFoodDelivery.benefits.streamlinedOperations.title",
      message: "Streamlined Operations",
    }),
    description: translate({
      id: "restorationAndFoodDelivery.benefits.streamlinedOperations.description",
      message:
        "Automates reservations, delivery schedules, and staff coordination, reducing manual effort.",
    }),
  },
  {
    title: translate({
      id: "restorationAndFoodDelivery.benefits.reducedBookingConflicts.title",
      message: "Reduced booking conflicts.",
    }),
    description: translate({
      id: "restorationAndFoodDelivery.benefits.reducedBookingConflicts.description",
      message:
        "Intelligent algorithms prevent overlapping bookings, ensuring seamless beauty salon operations.",
    }),
  },
  {
    title: translate({
      id: "restorationAndFoodDelivery.benefits.improvedCustomerSatisfaction.title",
      message:
        "Improved customer satisfaction through automated reminders and smooth booking processes",
    }),
    description: translate({
      id: "restorationAndFoodDelivery.benefits.improvedCustomerSatisfaction.description",
      message:
        "Notifications keep customers informed, while intuitive systems enable effortless appointment creation and changes.",
    }),
  },
];

const RestorationAndFoodDeliverySolutionPage: React.FC = () => {
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
        id: "restorationAndFoodDeliveryPage.title",
        message: "ZenSched for Restaurants and Food Delivery",
      })}
      description={translate({
        id: "restorationAndFoodDeliveryPage.description",
        message: "How ZenSched Supports Restaurants with Food Delivery",
      })}
    >
      <main>
        <Container sx={{ my: 5 }}>
          <SolutionHeader
            lottieProps={{
              animationData: restorationAndFoodDeliveryAnimationData,
            }}
            solutionTitle={
              <Translate id="restorationAndFoodDeliveryPage.intro.title">
                ZenSched for Restaurants and Food Delivery
              </Translate>
            }
            solutionDescription={
              <Translate id="restorationAndFoodDeliveryPage.intro.caption">
                Streamline reservations and delivery scheduling for restaurants
                with dynamic demands. Manage table bookings, optimize delivery
                routes, and handle last-minute changes—all with one powerful
                tool.
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
                <Translate id="restorationAndFoodDeliveryPage.solutionFeaturesSection.title">
                  Effortless booking management, simplified for your success.
                </Translate>
              }
              description={
                <Translate id="restorationAndFoodDeliveryPage.solutionFeaturesSection.description">
                  A popular restaurant offering dine-in services, private dining
                  experiences, and food delivery. The restaurant manages table
                  reservations, private event bookings, and delivery schedules,
                  while ensuring optimal utilization of its staff, kitchen
                  resources, and delivery drivers. Coordinating schedules across
                  these operations is crucial to providing seamless service and
                  enhancing customer satisfaction. ZenSched offers a powerful
                  scheduling solution to manage reservations, optimize delivery
                  logistics, and streamline communication with customers and
                  staff.
                </Translate>
              }
            />
          </Container>
        </Box>

        <Container>
          <Typography variant="h2" fontWeight="900">
            <Translate
              id="restorationAndFoodDeliveryPage.workflowExampleSection.title"
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
                  A customer wants to book a table for 7 PM on a Friday.
                </Typography>

                <Typography>The ZenSched API checks:</Typography>

                <Typography>
                  • The availability of tables matching the party size;
                </Typography>

                <Typography>
                  • The availability of waitstaff for the reservation.
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
                  If the requested time is unavailable due to fully booked
                  tables, ZenSched automatically suggests the next available
                  slot, ensuring no disruption in customer service.
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
                  Thanks to the WebHooks functionality of ZenSched, the customer
                  and assigned staff receive confirmation emails and reminders,
                  ensuring smooth coordination for the reservation.
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

export default RestorationAndFoodDeliverySolutionPage;
