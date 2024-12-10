import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import {
    IconChevronRight,
    IconCode,
    IconHelpCircle,
} from "@tabler/icons-react";
import Layout from "@theme/Layout";
import React from "react";

const styles: Record<string, React.CSSProperties> = {
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  iconContainer: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
  },
  lightGreen: {
    backgroundColor: "rgba(0, 200, 83, 0.1)", // Light green for "Developer resources"
    color: "#00C853", // Green color
  },
  lightBlue: {
    backgroundColor: "rgba(33, 150, 243, 0.1)", // Light blue for "General help center"
    color: "#2196F3", // Blue color
  },
  button: {
    marginTop: "16px",
    textTransform: "none",
    color: "#2196F3",
    fontWeight: "bold",
  },
};

const DeveloperCard: React.FC = () => (
  <Link to="/docs/intro/welcome">
    <Card sx={styles.card}>
      <Box style={{ ...styles.iconContainer, ...styles.lightGreen }}>
        <IconCode size={32} />
      </Box>

      <Typography variant="h6" fontWeight="bold" color="text.primary">
        <Translate id="developerResourcesCard.title">
          Developer resources
        </Translate>
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ marginBottom: "16px" }}
      >
        <Translate id="developerResourcesCard.description">
          This is a collection of technical resources if you are working with
          our API.
        </Translate>
      </Typography>

      <Button
        component={Link}
        sx={styles.button}
        to="/docs/intro/welcome"
        endIcon={<IconChevronRight />}
      >
        <Translate id="developerResourcesCard.button">
          Visit developer center
        </Translate>
      </Button>
    </Card>
  </Link>
);

const HelpCenterCard: React.FC = () => (
  <Card sx={styles.card}>
    <Box style={{ ...styles.iconContainer, ...styles.lightBlue }}>
      <IconHelpCircle size={32} />
    </Box>

    <Typography variant="h6" fontWeight="bold">
      <Translate id="genearlHelpCenterCard.title">
        General help center
      </Translate>
    </Typography>

    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ marginBottom: "16px" }}
    >
      <Translate id="genearlHelpCenterCard.description">
        This is our main help center. Find answers to configurations, billing,
        and more.
      </Translate>
    </Typography>

    <Button
      sx={styles.button}
      href="#help-center"
      endIcon={<IconChevronRight />}
    >
      <Translate id="genearlHelpCenterCard.button">Visit help center</Translate>
    </Button>
  </Card>
);

export default function HelpPage(): JSX.Element {
  return (
    <Layout title="ZenSched - Get Help">
      <main>
        <Container>
          <Box textAlign="center" mt={10}>
            <Typography variant="h1" fontWeight="900">
              <Translate id="helpPage.title">Get Help</Translate>
            </Typography>

            <Box mt={2}>
              <Typography variant="h5" component="h2" fontWeight="300">
                <Translate id="helpPage.subtitle1">
                  Got questions or something doesn't work?
                </Translate>
              </Typography>

              <Typography variant="h6" component="h2" fontWeight="300">
                <Translate id="helpPage.subtitle2">
                  Find your answer below.
                </Translate>
              </Typography>
            </Box>
          </Box>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ padding: "24px" }}
            justifyContent="center"
            alignItems="center"
          >
            <DeveloperCard />

            <HelpCenterCard />
          </Stack>
        </Container>
      </main>
    </Layout>
  );
}
