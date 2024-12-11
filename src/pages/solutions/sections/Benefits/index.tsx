import Translate from "@docusaurus/Translate";
import {
  Box,
  CardContent,
  List,
  ListItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Card from "@site/src/components/Card";
import Container from "@site/src/components/Container";
import JoinWaitlistInput from "@site/src/components/JoinWaitlistInput/JoinWaitlistInput";
import { IconCheck } from "@tabler/icons-react";

type Element = JSX.Element | string;

export type Benefit = {
  title: Element;
  description: Element;
};

type Props = {
  title?: Element;
  benefits: Benefit[];
  imgUrl?: string;
};

const defaultTitle: Props["title"] = (
  <Typography variant="h4" component="h2" fontWeight="900">
    Key benefits of ZenSched
  </Typography>
);

const Benefits: React.FC<Props> = ({ title = defaultTitle, benefits }) => {
  const { palette } = useTheme();

  return (
    <Container>
      {title}

      <Box my={1}>
        <List>
          {benefits.map((benefit) => (
            <ListItem
              sx={{ p: 0, my: 4, gap: 1, alignItems: "start" }}
              key={crypto.randomUUID()}
            >
              <IconCheck size={32} stroke={2} color={palette.primary.main} />

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" fontWeight="500">
                  {benefit.title}
                </Typography>
                <Typography variant="body1" fontWeight={300}>
                  {benefit.description}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box mt={8}>
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
      </Box>
    </Container>
  );
};

export default Benefits;
