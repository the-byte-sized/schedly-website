import { Typography } from "@mui/material";
import Container from "@site/src/components/Container";
import JoinWaitlistInput from "@site/src/components/JoinWaitlistInput/JoinWaitlistInput";

type Element = JSX.Element | string;

export type Feature = {
  title: Element;
  description: Element;
};

type Props = {
  title?: Element;
  features: Feature[];
  imgUrl?: string;
};

const defaultTitle: Props["title"] = (
  <Typography variant="h4" component="h2" fontWeight="900">
    Key benefits of GoSchedule
  </Typography>
);

export default function Benefits({ title = defaultTitle }: Props) {
  return (
    <Container>
      {title}

      <Typography component="div">
        <ol style={{ paddingLeft: "20px" }}>
          <li>Simplified and efficient scheduling for the clinic.</li>
          <li>Reduced booking conflicts.</li>
          <li>
            Improved patient satisfaction through automated reminders and smooth
            booking processes.
          </li>
        </ol>
      </Typography>

      <Typography textAlign="center">
        Join the companies that have revolutionized their scheduling with our
        innovative solutions.
      </Typography>

      <Typography textAlign="center">Ready to take the next step?</Typography>

      <JoinWaitlistInput
        sx={{
          mt: 3,
        }}
      />
    </Container>
  );
}
