import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
    Box,
    CardContent,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
import Card from "@site/src/components/Card";
import JoinWaitlistInput from "@site/src/components/JoinWaitlistInput/JoinWaitlistInput";
import {
    IconBooks,
    IconCar,
    IconHeartbeat,
    IconPlant2,
    IconUsers,
} from "@tabler/icons-react";
import Layout from "@theme/Layout";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <Container>
          <Box p={4}>
            <Typography
              variant="h3"
              dangerouslySetInnerHTML={{
                __html: translate({
                  id: "solutions.title",
                  message:
                    "ZenSched in <span style='color: var(--mui-palette-primary-main);'>action</span>",
                }),
              }}
            />

            <Typography variant="subtitle1" sx={{ maxWidth: "75%", mt: 2 }}>
              <Translate id="solutions.description">
                Imagine how ZenSched's innovative, tech-forward scheduling
                solutions can transform your business. Explore our solutions to
                see how we can revolutionize time management and streamline your
                workflows.
              </Translate>
            </Typography>

            <Grid container spacing={5} mt={5}>
              <Grid item xs={12} md={6}>
                <Link to="solutions/healthcare">
                  <Card sx={{ textDecoration: "none" }}>
                    <CardContent>
                      <Stack
                        gap={1}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <IconHeartbeat size={56} />

                        <Typography variant="h5">
                          <Translate id="solutions.healthcare.title">
                            Healthcare
                          </Translate>
                        </Typography>

                        <Typography variant="body1">
                          <Translate id="solutions.healthcare.description">
                            A bustling multi-specialty clinic offers services
                            ranging from general practice to specialized
                            treatments. ZenSched helps managing appointments for
                            numerous doctors with varying schedules, handling
                            last-minute cancellations, and accommodating
                            emergency visits present significant challenges.
                          </Translate>
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>

              <Grid item xs={12} md={6}>
                <Link to="solutions/education">
                  <Card sx={{ textDecoration: "none" }}>
                    <CardContent>
                      <Stack
                        gap={1}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <IconBooks size={56} />

                        <Typography variant="h5">
                          <Translate id="solutions.education.title">
                            Education
                          </Translate>
                        </Typography>

                        <Typography variant="body1">
                          <Translate id="solutions.education.description">
                            An online education platform offers live classes
                            across different time zones with instructors
                            worldwide. ZenSched helps coordinating class times,
                            managing instructor availability, and handling
                            student bookings.
                          </Translate>
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>

              <Grid item xs={12} xl={5}>
                <Link to="solutions/coworking-space-management">
                  <Card sx={{ textDecoration: "none" }}>
                    <CardContent>
                      <Stack
                        gap={1}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <IconUsers size={56} />

                        <Typography variant="h5">
                          <Translate id="solutions.coworkingSpaceManagement.title">
                            Coworking Space Management
                          </Translate>
                        </Typography>

                        <Typography variant="body1">
                          <Translate id="solutions.coworkingSpaceManagement.description">
                            A co-working space provides members with the ability
                            to book conference rooms and shared facilities.
                            ZenSched helps with managing bookings across multiple
                            locations and prevent scheduling conflicts.
                          </Translate>
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>

              <Grid item xs={12} xl={7}>
                <Link to="solutions/ride-sharing">
                  <Card sx={{ textDecoration: "none" }}>
                    <CardContent>
                      <Stack
                        gap={1}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <IconCar size={56} />

                        <Typography variant="h5">
                          <Translate id="solutions.rideSharingService.title">
                            Ride Sharing Service
                          </Translate>
                        </Typography>

                        <Typography variant="body1">
                          <Translate id="solutions.rideSharingService.description">
                            A rapidly growing ride-sharing service operates in
                            multiple cities, connecting passengers with drivers
                            via a mobile app. The service faces complex
                            scheduling challenges, such as adhering to local
                            laws regarding driver working hour and mandatory
                            breaks ZenSched helps streamline scheduling
                            processes, reducing administrative overhead and
                            manual interventions optimizing operations.
                          </Translate>
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>

              <Grid item xs={12}>
                <Link to="solutions/beauty-salons">
                  <Card sx={{ textDecoration: "none" }}>
                    <CardContent>
                      <Stack
                        gap={1}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <IconPlant2 size={56} />

                        <Typography variant="h5">
                          <Translate id="solutions.beautySalons.title">
                            Beauty Salons
                          </Translate>
                        </Typography>

                        <Typography variant="body1">
                          <Translate id="solutions.beautySalons.description">
                            A busy beauty salon offers a wide range of services,
                            including haircuts, coloring, styling, manicures,
                            pedicures, facials, and massages. Each service
                            requires different durations, specialized staff, and
                            sometimes specific equipment or rooms. ZenSched can
                            help in assigning services to staff members
                            qualified to perform them, preventing scheduling
                            errors or managing the availability of specific
                            resources like treatment rooms or styling chairs to
                            avoid double bookings.
                          </Translate>
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>

              <Grid item xs={12}>
                <Card sx={{ backgroundColor: "primary.main", color: "white" }}>
                  <CardContent>
                    <Stack gap={1} alignItems="center" justifyContent="center">
                      <Typography variant="h5">
                        <Translate id="yourBusinessCouldBeNext.title">
                          Your Business Could Be Next
                        </Translate>
                      </Typography>

                      <Typography sx={{ maxWidth: "75%" }}>
                        <Translate id="yourBusinessCouldBeNext.description">
                          Imagine the transformation ZenSched can bring to your
                          business. Join the companies that have revolutionized
                          their scheduling with our innovative solutions.
                        </Translate>
                      </Typography>

                      <Typography fontWeight="bold">
                        <Translate id="yourBusinessCouldBeNext.hype">
                          Ready to take the next step?
                        </Translate>
                      </Typography>

                      <JoinWaitlistInput />
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </main>
    </Layout>
  );
}
