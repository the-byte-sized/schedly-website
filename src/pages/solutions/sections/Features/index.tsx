import useBaseUrl from "@docusaurus/useBaseUrl";
import { Stack, Typography } from "@mui/material";
import Lottie, { type LottieComponentProps } from "lottie-react";
import React from "react";

const AOS = {
  effect: "fade-up",
  duration: "500",
  easing: "ease-out",
};

type Element = JSX.Element | string;

export type Feature = {
  title: Element;
  description: Element;
  icon?: Element;
};

type SolutionFeaturesProps = {
  title: Element;
  description?: Element;
  features: Feature[];
  imgUrl?: string;
  lottieProps?: LottieComponentProps;
};

const SolutionFeatures: React.FC<SolutionFeaturesProps> = ({
  title,
  description,
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
        data-aos={AOS.effect}
        data-aos-duration={AOS.duration}
        data-aos-easing={AOS.easing}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          variant="subtitle1"

          data-aos={AOS.effect}
          data-aos-duration={AOS.duration}
          data-aos-easing={AOS.easing}
          data-aos-delay="150"
          mt={2}
        >
          {description}
        </Typography>
      )}

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
            data-aos={"fade-right"}
            data-aos-duration={AOS.duration}
            data-aos-easing={AOS.easing}
            data-aos-delay="250"
          >
            <img
              className="shadow-lg rounded-5"
              src={useBaseUrl(`/img/${imgUrl}`)}
              alt="hero pattern"
            />
          </Stack>
        )}

        {lottieProps && (
          <Lottie
            {...lottieProps}
            data-aos={"fade-right"}
            data-aos-duration={AOS.duration}
            data-aos-easing={AOS.easing}
            data-aos-delay="250"
          />
        )}

        <Stack direction="column" flex="1" spacing={4}>
          {features.map((feature, index) => (
            <Stack
              direction="row"
              gap={1}
              alignItems="center"
              key={crypto.randomUUID()}
              data-aos={AOS.effect}
              data-aos-duration={AOS.duration}
              data-aos-easing={AOS.easing}
              data-aos-delay={index * 100}
            >
              {feature.icon}

              <Stack>
                <Typography variant="h5" component="h2" fontWeight={700}>
                  {feature.title}
                </Typography>

                <Typography variant="subtitle1" fontWeight={300}>
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
