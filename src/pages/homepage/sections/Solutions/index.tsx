import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import { Button, Container, Stack, Typography } from "@mui/material";
import Card from "@site/src/components/Card";
import {
    IconBooks,
    IconCar,
    IconHeartbeat,
    IconPlant2,
    IconUsers,
} from "@tabler/icons-react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const solutions = [
  {
    icon: <IconHeartbeat size={56} stroke={2} />,
    link: "/solutions/healthcare",
    title: translate({
      id: "solutions.healthcare.title",
      message: "Healthcare",
    }),
    description: translate({
      id: "solutions.healthcare.description",
      message:
        "A bustling multi-specialty clinic offers services ranging from general practice to specialized treatments. ZenSched helps managing appointments for numerous doctors with varying schedules, handling last-minute cancellations, and accommodating emergency visits present significant challenges.",
    }),
  },
  {
    icon: <IconBooks size={56} stroke={2} />,
    link: "/solutions/education",
    title: translate({
      id: "solutions.education.title",
      message: "Education",
    }),
    description: translate({
      id: "solutions.education.description",
      message:
        "An online education platform offers live classes across different time zones with instructors worldwide. ZenSched helps coordinating class times, managing instructor availability, and handling student bookings.",
    }),
  },
  {
    icon: <IconUsers size={56} stroke={2} />,
    link: "/solutions/coworking-space-management",
    title: translate({
      id: "solutions.coworkingSpaceManagement.title",
      message: "Coworking Spaces",
    }),
    description: translate({
      id: "solutions.coworkingSTypographyaceManagement.description",
      message:
        "A co-working space provides members with the ability to book conference rooms and shared facilities. ZenSched helps with managing bookings across multiple locations and prevent scheduling conflicts.",
    }),
  },
  {
    icon: <IconCar size={56} stroke={2} />,
    link: "/solutions/ride-sharing",
    title: translate({
      id: "solutions.rideSharingService.title",
      message: "Ride Sharing",
    }),
    description: translate({
      id: "solutions.rideSharingService.description",
      message:
        "A rapidly growing ride-sharing service operates in multiple cities, connecting passengers with drivers via a mobile app. The service faces complex scheduling challenges, such as adhering to local laws regarding driver working hour and mandatory breaks ZenSched helps streamline scheduling processes, reducing administrative overhead and manual interventions optimizing operations.",
    }),
  },
  {
    icon: <IconPlant2 size={56} stroke={2} />,
    link: "/solutions/beauty-salons",
    title: translate({
      id: "solutions.beautySalons.title",
      message: "Beauty Salons",
    }),
    description: translate({
      id: "solutions.beautySalons.description",
      message:
        "A busy beauty salon offers a wide range of services, including haircuts, coloring, styling, manicures, pedicures, facials, and massages. Each service requires different durations, specialized staff, and sometimes specific equipment or rooms. ZenSched can help in assigning services to staff members qualified to perform them, preventing scheduling errors or managing the availability of specific resources like treatment rooms or styling chairs to avoid double bookings.",
    }),
  },
];

const Solutions: React.FC = () => {
  const id = React.useId();

  return (
    <>
      <Container
        id="solutions"
        data-section="solutions"
        sx={{
          py: 5,
        }}
      >
        <Typography variant="h2">
          <Translate id="solutions.title">ZenSched in action</Translate>
        </Typography>

        <Typography variant="subtitle1" color="textSecondary">
          <Translate id="solutions.description">
            Imagine how ZenSched's innovative, tech-forward scheduling solutions
            can transform your business. Explore our solutions to see how we can
            revolutionize time management and streamline your workflows.
          </Translate>
        </Typography>
      </Container>

      <Stack sx={{ py: 5 }} alignItems="center">
        <Carousel
          autoPlay
          interval={2250}
          infiniteLoop
          stopOnHover
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          centerMode
          centerSlidePercentage={16}
        >
          {solutions.map((solution) => (
            <Link to={solution.link} key={id}>
              <Card
                sx={{
                  height: 250,
                }}
              >
                <Stack alignItems="center" justifyContent="center" gap={3}>
                  {solution.icon}

                  <Typography variant="h3" component="h1">
                    {solution.title}
                  </Typography>
                </Stack>
              </Card>
            </Link>
          ))}
        </Carousel>

        <Button
          variant="outlined"
          component={Link}
          to="/solutions"
          sx={{
            mt: 5,
          }}
        >
          <Translate id="solutions.learnMoreButton">Learn more</Translate>
        </Button>
      </Stack>
    </>
  );
};

export default Solutions;
