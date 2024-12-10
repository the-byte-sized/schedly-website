import useBaseUrl from "@docusaurus/useBaseUrl";
import { Grid2 as Grid, Typography, type Grid2Props } from "@mui/material";
import JoinWaitlistInput from "@site/src/components/JoinWaitlistInput/JoinWaitlistInput";
import Lottie, { type LottieComponentProps } from "lottie-react";
import React from "react";

interface SolutionHeaderProps extends Grid2Props {
  solutionTitle: JSX.Element | string;
  solutionDescription: JSX.Element | string;
  imgUrl?: string;
  lottieProps?: LottieComponentProps;
}

const SolutionHeader: React.FC<SolutionHeaderProps> = ({
  solutionTitle,
  solutionDescription,
  imgUrl,
  lottieProps,
  ...props
}) => {
  return (
    <Grid
      container
      spacing={5}
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      <Grid
        size={{
          xs: 12,
          md: 6,
        }}
      >
        <Typography variant="h1" fontWeight="900">
          {solutionTitle}
        </Typography>

        <Typography variant="subtitle1">{solutionDescription}</Typography>

        <JoinWaitlistInput sx={{ mt: 3 }} />
      </Grid>

      <Grid
        size={{
          xs: 12,
          md: 6,
        }}
        textAlign="center"
        display={{
          xs: "none",
          md: "block",
        }}
      >
        {imgUrl && (
          <img
            className="shadow-lg rounded-5"
            src={useBaseUrl(`/img/${imgUrl}`)}
            alt="hero pattern"
          />
        )}
        {lottieProps && <Lottie {...lottieProps} />}
      </Grid>
    </Grid>
  );
};

export default SolutionHeader;
