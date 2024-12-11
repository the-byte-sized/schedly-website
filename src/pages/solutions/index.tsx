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

export default function Home(): JSX.Element {
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
            />

            <Typography variant="subtitle1" sx={{ maxWidth: "75%", mt: 2 }}>
              <Translate id="solutions.description">
                Imagine how ZenSched's innovative, tech-forward scheduling
                solutions can transform your business. Explore our solutions to
                see how we can revolutionize time management and streamline your
                workflows.
              </Translate>
            </Typography>

            <JoinWaitlistInput sx={{ mt: 3 }} />
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
              <Link to={link}>
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

          <Card sx={{ backgroundColor: "primary.main", color: "white", mb: 7 }}>
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
                    business. Join the companies that have revolutionized their
                    scheduling with our innovative solutions.
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
        </Container>
      </main>
    </Layout>
  );
}
