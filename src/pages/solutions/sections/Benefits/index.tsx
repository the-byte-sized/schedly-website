import { Box, List, ListItem, Typography } from "@mui/material";
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
    Key benefits of GoSchedule
  </Typography>
);

export default function Benefits({ title = defaultTitle, benefits }: Props) {
  return (
    <Container>
      {title}

      <Box my={1}>
        <List>
          {benefits.map((benefit) => (
            <ListItem sx={{ p: 0, my: 4, gap: 1, alignItems: "start" }}>
              <IconCheck size={32} stroke={2} />
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
        <Card
          cardTitle="Your Business Could Be Next"
          cardDescription="Join the companies that have revolutionized their scheduling with our innovative solutions."
          sx={{
            color: "#fff",
            textAlign: "center",
            backgroundColor: "hsl(209, 39%, 17%)",
            border: "1px solid hsl(209, 39%, 17%)",

            "&:hover,&:focus": {
              backgroundColor: "hsl(209, 39%, 17%)",
            },
          }}
        >
          <Typography fontWeight={700}>Ready to take the next step?</Typography>

          <Box my={2} mx="auto" maxWidth="60%">
            <JoinWaitlistInput
              sx={{
                mt: 3,
              }}
            />
          </Box>
        </Card>
      </Box>
    </Container>
  );
}
