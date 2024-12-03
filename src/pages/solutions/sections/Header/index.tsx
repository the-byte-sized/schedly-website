import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Grid2 as Grid, Typography } from "@mui/material";
import JoinWaitlistInput from "@site/src/components/JoinWaitlistInput/JoinWaitlistInput";
import React from "react";

type Props = {
  title: JSX.Element | string;
  description: JSX.Element | string;
  imgUrl: string;
};

function SolutionHeader({ title, description, imgUrl }: Props) {
  return (
    <Grid container spacing={5} alignItems="center" justifyContent="center">
      <Grid
        size={{
          xs: 12,
          md: 6,
        }}
      >
        <Typography variant="h1" fontWeight="900">
          {title}
        </Typography>

        <Typography variant="subtitle1">{description}</Typography>

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
        <img
          className="shadow-lg rounded-5"
          src={useBaseUrl(`/img/${imgUrl}`)}
          alt="hero pattern"
        />
      </Grid>
    </Grid>
  );
}

export default SolutionHeader;
