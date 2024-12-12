import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Masonry } from "@mui/lab";
import {
  Box,
  CardContent,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Card from "@site/src/components/Card";
import JoinWaitlistInput from "@site/src/components/JoinWaitlistInput/JoinWaitlistInput";
import useSolutions from "@site/src/hooks/useSolutions";
import Layout from "@theme/Layout";

const AOS = {
  effect: "fade-up",
  duration: "500",
  easing: "ease-out",
};

const SolutionsPage: React.FC = () => {
  const { palette } = useTheme();
  const { siteConfig } = useDocusaurusContext();
  const solutions = useSolutions();

  return (
    <Layout
      title={`${siteConfig.title} - Solutions`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <Box p={4} sx={{ backgroundColor: palette.primary.light }}>
          <Container>
            <Typography
              variant="h1"
              fontWeight="900"
              dangerouslySetInnerHTML={{
                __html: translate({
                  id: "solutions.title",
                  message:
                    "ZenSched in <span style='color: var(--mui-palette-primary-main);'>action</span>",
                }),
              }}
              data-aos={AOS.effect}
              data-aos-duration={AOS.duration}
              data-aos-easing={AOS.easing}
            />

            <Typography
              variant="subtitle1"
              sx={{ maxWidth: "75%", mt: 2 }}
              data-aos={AOS.effect}
              data-aos-duration={AOS.duration}
              data-aos-easing={AOS.easing}
              data-aos-delay="250"
            >
              <Translate id="solutions.description">
                Unlock the full potential of streamlined booking processes with
                ZenSched, a powerful API designed to cater to the diverse needs
                of various industries such as healthcare, education,
                hospitality, and beyond.
              </Translate>
            </Typography>

            <JoinWaitlistInput
              sx={{ mt: 3 }}
              data-aos={AOS.effect}
              data-aos-duration={AOS.duration}
              data-aos-easing={AOS.easing}
              data-aos-delay="500"
            />
          </Container>
        </Box>

        <Container>
          <Masonry
            columns={2}
            spacing={2}
            key={crypto.randomUUID()}
            sx={{ mt: 3 }}
          >
            {solutions.map(({ title, description, icon, link }) => (
              <Link to={link} key={crypto.randomUUID()}>
                <Card sx={{ textDecoration: "none" }}>
                  <CardContent>
                    <Stack gap={1} alignItems="center" justifyContent="center">
                      {icon}

                      <Typography variant="h5">{title}</Typography>

                      <Typography variant="body1">{description}</Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </Masonry>

          <Box mt={8}>
            <Card
              sx={{ backgroundColor: "primary.main", color: "white", mb: 7 }}
            >
              <CardContent>
                <Stack gap={1} alignItems="center" justifyContent="center">
                  <Typography variant="h4">
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
          </Box>
        </Container>
      </main>
    </Layout>
  );
};

export default SolutionsPage;
