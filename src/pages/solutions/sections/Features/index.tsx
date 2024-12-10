import useBaseUrl from "@docusaurus/useBaseUrl";
import { Stack, Typography } from "@mui/material";
import Lottie, { type LottieComponentProps } from "lottie-react";
import React from "react";

type Element = JSX.Element | string;

export type Feature = {
  title: Element;
  description: Element;
  icon?: Element;
};

type SolutionFeaturesProps = {
  title: Element;
  features: Feature[];
  imgUrl?: string;
  lottieProps?: LottieComponentProps;
};

const SolutionFeatures: React.FC<SolutionFeaturesProps> = ({
  title,
  imgUrl,
  features,
  lottieProps,
}) => {
  return (
    <>
      <Typography
        variant="h2"
        fontWeight="900"
        maxWidth={{
          xs: "100%",
          md: "50%",
        }}
      >
        {title}
      </Typography>

      <Stack direction="row" alignItems="center" spacing={5} mt={3}>
        {imgUrl && (
          <Stack
            flex="1"
            justifyContent="center"
            alignItems="center"
            display={{
              xs: "none",
              md: "flex",
            }}
          >
            <img
              className="shadow-lg rounded-5"
              src={useBaseUrl(`/img/${imgUrl}`)}
              alt="hero pattern"
            />
          </Stack>
        )}

        {lottieProps && <Lottie {...lottieProps} />}

        <Stack direction="column" flex="1" spacing={4}>
          {features.map((feature) => (
            <Stack direction="row" gap={1} alignItems="center">
              {feature.icon}

              <Stack>
                <Typography component="h2" variant="h6" fontWeight={700}>
                  {feature.title}
                </Typography>

                <Typography variant="body1" fontWeight={300}>
                  {feature.description}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default SolutionFeatures;
