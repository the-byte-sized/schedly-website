import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
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
  Container,
  Grid2 as Grid,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import JoinWaitlistInput from "@site/src/components/JoinWaitlistInput/JoinWaitlistInput";
import {
  IconCalendarCog,
  IconCheck,
  IconNotification,
  IconUser,
} from "@tabler/icons-react";
import Layout from "@theme/Layout";
import React from "react";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function HealthcareSolutionPage(): JSX.Element {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Layout
      title="Schedly for Healthcare"
      description="Revolutionizing Medical Scheduling"
    >
      <main>
        <Container sx={{ my: 5 }}>
          <Grid
            container
            spacing={5}
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <Typography variant="h1" fontWeight="900">
                <Translate id="healthcareSolutionPage.intro.title">
                  Appointment Scheduling for a Multi-Specialty Clinic
                </Translate>
              </Typography>

              <Typography variant="subtitle1">
                <Translate id="healthcareSolutionPage.intro.caption">
                  Simplify appointment management for doctors with different
                  schedules. Handle last-minute cancellations, emergency visits,
                  and resource allocation—all with one tool.
                </Translate>
              </Typography>

              <JoinWaitlistInput sx={{ mt: 3 }} />
            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
              textAlign="center"
              display={{
                xs: "none",
                md: "block",
              }}
            >
              <img
                className="shadow-lg rounded-5"
                src={useBaseUrl("/img/hero-embedded-lending.jpg")}
                alt="hero pattern"
              />
            </Grid>
          </Grid>

          <Typography variant="h2"></Typography>
        </Container>

        <Box
          sx={{
            backgroundColor: "hsl(260, 60%, 98%)",
            py: 5,
          }}
        >
          <Container>
            <Typography
              variant="h4"
              component="h2"
              fontWeight="900"
              maxWidth={{
                xs: "100%",
                md: "50%",
              }}
            >
              <Translate>
                Effortless booking management, simplified for your success.
              </Translate>
            </Typography>

            <Stack direction="row" spacing={5} mt={3}>
              <Stack
                flex="1"
                justifyContent="center"
                alignItems="center"
                display={{
                  xs: "none",
                  md: "flex",
                }}
              >
                <img
                  className="shadow-lg rounded-5"
                  src={useBaseUrl("/img/hero-embedded-lending.jpg")}
                  alt="hero pattern"
                />
              </Stack>

              <Stack direction="column" flex="1" spacing={4}>
                <Stack>
                  <Typography component="h2" variant="h6" fontWeight={700}>
                    Synchronize availability across multiple specialists.
                  </Typography>

                  <Typography variant="subtitle1" fontWeight={300}>
                    Effortlessly manage and coordinate schedules for all your
                    specialists.
                  </Typography>
                </Stack>

                <Stack>
                  <Typography component="h2" variant="h6" fontWeight={700}>
                    Handle shared resources.
                  </Typography>

                  <Typography variant="subtitle1" fontWeight={300}>
                    Ensure optimal use of rooms, equipment, and shared resources
                    without conflicts.
                  </Typography>
                </Stack>

                <Stack>
                  <Typography component="h2" variant="h6" fontWeight={700}>
                    Support different booking rules per specialty.
                  </Typography>

                  <Typography variant="subtitle1" fontWeight={300}>
                    Customize booking policies to match the unique needs of each
                    specialty.
                  </Typography>
                </Stack>

                <Stack>
                  <Typography component="h2" variant="h6" fontWeight={700}>
                    Notify and remind patients about their appointments.
                  </Typography>

                  <Typography variant="subtitle1" fontWeight={300}>
                    Send timely reminders and updates to keep patients informed
                    and on time.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </Box>

        <Box
          sx={{
            py: 5,
          }}
        >
          <Container>
            <Typography variant="h4" component="h2" fontWeight="900">
              <Translate>Workflow Example</Translate>
            </Typography>

            <Timeline position="alternate">
              <TimelineItem>
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
                    A patient would like to book a physiotherapy session for 2
                    PM on a Wednesday.
                  </Typography>

                  <Typography>The GoSchedule API checks:</Typography>

                  <Typography>• The physiotherapist’s availability;</Typography>

                  <Typography>
                    • The availability of the consultation room.
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
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
                    If the consultation room is occupied, Schedly suggests the
                    next available slot.
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
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
                    Thanks to the WebHooks functionalities of GoSchedule, the
                    patient and physiotherapist can receive confirmation emails.
                  </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />

                  <TimelineDot color="secondary">
                    <IconCheck />
                  </TimelineDot>

                  <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                </TimelineSeparator>

                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    That's how simple it's with GoSchedule!
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Container>
        </Box>

        <Box sx={{ width: "100%", py: 5 }}>
          <Container>
            <Typography variant="h4" component="h2" fontWeight="900">
              GoSchedule Implementation
            </Typography>

            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: {
                  optional?: React.ReactNode;
                } = {};
                if (isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography variant="caption">Optional</Typography>
                  );
                }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>

            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Step {activeStep + 1}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  {isStepOptional(activeStep) && (
                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                      Skip
                    </Button>
                  )}
                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Container>
        </Box>

        <Box
          sx={{
            backgroundColor: "hsl(260, 60%, 98%)",
            py: 5,
          }}
        >
          <Container>
            <Typography variant="h4" component="h2" fontWeight="900">
              Key benefits of GoSchedule
            </Typography>

            <Typography component="div">
              <ol style={{ paddingLeft: "20px" }}>
                <li>Simplified and efficient scheduling for the clinic.</li>
                <li>Reduced booking conflicts.</li>
                <li>
                  Improved patient satisfaction through automated reminders and
                  smooth booking processes.
                </li>
              </ol>
            </Typography>

            <Typography textAlign="center">
              Join the companies that have revolutionized their scheduling with
              our innovative solutions.
            </Typography>

            <Typography textAlign="center">
              Ready to take the next step?
            </Typography>

            <JoinWaitlistInput
              sx={{
                mt: 3,
              }}
            />
          </Container>
        </Box>
      </main>
    </Layout>
  );
}
