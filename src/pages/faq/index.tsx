import Translate, { translate } from "@docusaurus/Translate";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import { IconChevronDown, IconMessage } from "@tabler/icons-react";
import Layout from "@theme/Layout";

const faqs = [
  {
    question: translate({
      id: "faq.whatIsGoSchedule.question",
      message: "What is GoSchedule?",
    }),
    answer: translate({
      id: "faq.whatIsGoSchedule.answer",
      message:
        "GoSchedule is a powerful scheduling platform designed to manage availability, bookings, and events for businesses of all sizes. With features like dynamic rules, conflict management, and external calendar integration, it ensures seamless and smart scheduling",
    }),
  },
  {
    question: translate({
      id: "faq.whoCanUseGoSchedule.question",
      message: "Who can use GoSchedule?",
    }),
    answer: translate({
      id: "faq.whoCanUseGoSchedule.answer",
      message:
        "GoSchedule is perfect for professionals, teams, and organizations across various industries:\n- Service providers (e.g., salons, clinics)\n- Resource managers (e.g., co-working spaces, event planners)\n- Anyone who needs streamlined scheduling.",
    }),
  },
  {
    question: translate({
      id: "faq.schedulingConflictsHandling.question",
      message: "How does GoSchedule handle conflicts?",
    }),
    answer: translate({
      id: "faq.schedulingConflictsHandling.answer",
      message:
        "Our platform dynamically evaluates rules, events, and availability to ensure that no double bookings or invalid schedules occur. If a conflict is detected, you’ll receive clear feedback to resolve it efficiently.",
    }),
  },
  {
    question: translate({
      id: "faq.externalCalendarsIntegrations.question",
      message: "Can GoSchedule integrate with external calendars?",
    }),
    answer: translate({
      id: "faq.externalCalendarsIntegrations.answer",
      message:
        "Yes! GoSchedule seamlessly integrates with Google Calendar, Outlook, and other platforms. Synchronize your events effortlessly and keep everything in one place.",
    }),
  },
  {
    question: translate({
      id: "faq.customization.question",
      message: "Is GoSchedule customizable?",
    }),
    answer: translate({
      id: "faq.customization.answer",
      message:
        "Absolutely! With flexible rules, metadata for events, and hierarchical entity management, GoSchedule adapts to your unique needs.",
    }),
  },
  {
    question: translate({
      id: "faq.recurringSchedules.question",
      message: "Does GoSchedule work with recurring schedules?",
    }),
    answer: translate({
      id: "faq.recurringSchedules.answer",
      message:
        "Yes, GoSchedule supports both one-time and recurring schedules. Define weekly business hours, set exceptions for holidays, and manage recurring appointments with ease.",
    }),
  },
  {
    question: translate({
      id: "faq.dataSecurity.question",
      message: "How secure is my data on GoSchedule?",
    }),
    answer: translate({
      id: "faq.dataSecurity.answer",
      message:
        "GoSchedule prioritizes data security and employs encryption, secure APIs, and role-based access controls to protect your information.",
    }),
  },
  {
    question: translate({
      id: "faq.getStarted.question",
      message: "How can I get started with GoSchedule?",
    }),
    answer: translate({
      id: "faq.getStarted.answer",
      message:
        "Sign up for a free trial to explore all our features. Once you’re ready, choose a plan that suits your needs and start scheduling smarter today!",
    }),
  },
];

export default function FaqPage(): JSX.Element {
  return (
    <Layout title="Schedly - FAQ">
      <main>
        <Container>
          <Box textAlign="center" mt={10}>
            <Typography variant="h1" fontWeight="900">
              <Translate id="faqPage.title">FAQ</Translate>
            </Typography>

            <Box mt={2}>
              <Typography variant="h5" component="h2" fontWeight="300">
                <Translate id="faqPage.subtitle1">
                  Frequently asked questions regarding our booking and
                  scheduling API - GoSchedule
                </Translate>
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {faqs.map((faq, index) => (
              <Grid item xs={12} md={8} key={index}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<IconChevronDown />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                    sx={{
                        p: 2
                    }}
                  >
                    <Typography variant="h6" fontWeight="500">{faq.question}</Typography>
                  </AccordionSummary>

                  <AccordionDetails>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>

          <Box textAlign="center" py={5}>
            <Typography variant="body1">
              Still have questions? Contact our support team or explore our
              detailed documentation to learn more!
            </Typography>

            <Button
              variant="contained"
              startIcon={<IconMessage />}
              sx={{
                mt: 3,
              }}
            >
              <Translate id="contactSupportTeam">
                Contact our support team
              </Translate>
            </Button>
          </Box>
        </Container>
      </main>
    </Layout>
  );
}
