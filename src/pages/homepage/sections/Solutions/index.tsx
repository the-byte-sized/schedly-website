import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import Button from "@site/src/components/Button";
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

/*
healthcare: https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
beauty: https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2726&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
education: https://images.unsplash.com/photo-1620663823969-631e014e5e97?q=80&w=2727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
*/

const solutions = [
  {
    icon: <IconHeartbeat size={56} stroke={2} />,
    link: "/solutions/healthcare",
    image:
      "https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: translate({
      id: "solutions.healthcare.title",
      message: "Healthcare",
    }),
    // description: translate({
    //   id: "solutions.healthcare.description",
    //   message:
    //     "A bustling multi-specialty clinic offers services ranging from general practice to specialized treatments. ZenSched helps managing appointments for numerous doctors with varying schedules, handling last-minute cancellations, and accommodating emergency visits present significant challenges.",
    // }),
    description: translate({
      id: "solutions.healthcare.description",
      message:
        "Simplify appointment management for doctors with different schedules.",
    }),
  },
  {
    icon: <IconBooks size={56} stroke={2} />,
    link: "/solutions/education",
    image:
      "https://images.unsplash.com/photo-1620663823969-631e014e5e97?q=80&w=2727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: translate({
      id: "solutions.education.title",
      message: "Education",
    }),
    // description: translate({
    //   id: "solutions.education.description",
    //   message:
    //     "An online education platform offers live classes across different time zones with instructors worldwide. ZenSched helps coordinating class times, managing instructor availability, and handling student bookings.",
    // }),
    description: translate({
      id: "solutions.education.description",
      message:
        "An online education platform offers live classes across different time zones with instructors worldwide.",
    }),
  },
  {
    icon: <IconUsers size={56} stroke={2} />,
    link: "/solutions/coworking-space-management",
    image:
      "https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: translate({
      id: "solutions.coworkingSpaceManagement.title",
      message: "Coworking Spaces",
    }),
    // description: translate({
    //   id: "solutions.coworkingSTypographyaceManagement.description",
    //   message:
    //     "A co-working space provides members with the ability to book conference rooms and shared facilities. ZenSched helps with managing bookings across multiple locations and prevent scheduling conflicts.",
    // }),
    description: translate({
      id: "solutions.coworkingSTypographyaceManagement.description",
      message:
        "A co-working space provides members with the ability to book conference rooms and shared facilities.",
    }),
  },
  {
    icon: <IconCar size={56} stroke={2} />,
    link: "/solutions/ride-sharing",
    image:
      "https://images.unsplash.com/photo-1525851736119-f9fe9545a1ee?q=80&w=2578&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: translate({
      id: "solutions.rideSharingService.title",
      message: "Ride Sharing",
    }),
    // description: translate({
    //   id: "solutions.rideSharingService.description",
    //   message:
    //     "A rapidly growing ride-sharing service operates in multiple cities, connecting passengers with drivers via a mobile app. The service faces complex scheduling challenges, such as adhering to local laws regarding driver working hour and mandatory breaks ZenSched helps streamline scheduling processes, reducing administrative overhead and manual interventions optimizing operations.",
    // }),
    description: translate({
      id: "solutions.rideSharingService.description",
      message:
        "From real-time scheduling to superior operational efficiency, we provide solutions to keep your business running smoothly.",
    }),
  },
  {
    icon: <IconPlant2 size={56} stroke={2} />,
    link: "/solutions/beauty-salons",
    image:
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2726&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: translate({
      id: "solutions.beautySalons.title",
      message: "Beauty Salons",
    }),
    // description: translate({
    //   id: "solutions.beautySalons.description",
    //   message:
    //     "A busy beauty salon offers a wide range of services, including haircuts, coloring, styling, manicures, pedicures, facials, and massages. Each service requires different durations, specialized staff, and sometimes specific equipment or rooms. ZenSched can help in assigning services to staff members qualified to perform them, preventing scheduling errors or managing the availability of specific resources like treatment rooms or styling chairs to avoid double bookings.",
    // }),
    description: translate({
      id: "solutions.beautySalons.description",
      message:
        "A busy beauty salon offers a wide range of services, including haircuts, coloring, styling, manicures, pedicures, facials, and massages.",
    }),
  },
];

const Solutions: React.FC = () => {
  const id = React.useId();
  const { palette, typography } = useTheme();

  return (
    <>
      <Container
        id="solutions"
        data-section="solutions"
        sx={{
          py: 5,
        }}
      >
        <Stack
          maxWidth="740px"
          margin="0 auto"
          textAlign="center"
          alignItems="center"
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              letterSpacing: 1,
              fontSize: ".75rem",
              marginBottom: 2,
            }}
          >
            Do Less, better
          </Typography>
          <Typography variant="h1">
            <Translate id="solutions.title">ZenSched in action</Translate>
          </Typography>

          <Typography marginTop="1.5rem" variant="body1">
            <Translate id="solutions.description">
              Imagine how ZenSched's innovative, tech-forward scheduling
              solutions can transform your business. Explore our solutions to
              see how we can revolutionize time management and streamline your
              workflows.
            </Translate>
          </Typography>
        </Stack>
      </Container>

      <Stack sx={{ py: 5 }} alignItems="center">
        <Carousel
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          centerMode
          centerSlidePercentage={30}
        >
          {solutions.map((solution) => (
            <Link
              style={{ display: "block", height: "650px", width: "100%" }}
              to={solution.link}
              key={id}
            >
              <Box
                sx={{
                  overflow: "hidden",
                  borderRadius: 2,
                  position: "relative",
                  height: "100%",
                  width: "100%",

                  "&:hover": {
                    div: {
                      opacity: 1,
                      transform: "translate(-50%, -50%)",
                    },

                    "&::after": {
                      opacity: 0.8,
                    },
                  },

                  "&::after": {
                    content: '""',
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: 0,
                    transition: "all .3s ease",
                    backgroundColor: palette.primary.light,
                  },
                }}
              >
                <img
                  src={solution.image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "grayscale(1)",
                  }}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  gap={1}
                  sx={{
                    opacity: 0,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, 0%)",
                    transition: "all .3s ease",
                    zIndex: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Playfair Display, serif",
                      fontWeight: 500,
                      fontStyle: "italic",
                    }}
                    variant="h2"
                  >
                    {solution.title}
                  </Typography>
                  <Typography variant="body1">
                    {solution.description}
                  </Typography>
                </Box>
              </Box>
            </Link>
          ))}
        </Carousel>

        <Box my={12} display="flex" flexDirection="column" textAlign="center">
          <Typography variant="h1">One API </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 500,
              fontStyle: "italic",
              fontSize: typography.pxToRem(Number(typography.h1.fontSize)),
            }}
          >
            Unlimited solutions
          </Typography>
          <Box mt={5}>
            <Link to="https://forms.office.com/r/8LmMHy2bUF" target="_blank">
              <Button>
                <Translate id="joinWaitlistNow">Join Waitlist Now</Translate>
              </Button>
            </Link>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Solutions;
