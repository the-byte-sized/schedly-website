import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Typography, Stack } from "@mui/material";

type Element = JSX.Element | string;

export type Feature = {
  title: Element;
  description: Element;
};

type Props = {
  title: Element;
  features: Feature[];
  imgUrl?: string;
};

export default function SolutionFeatures({ title, imgUrl, features }: Props) {
  return (
    <>
      <Typography
        variant="h4"
        component="h2"
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

        <Stack direction="column" flex="1" spacing={4}>
          {features.map((feature) => (
            <Stack>
              <Typography component="h2" variant="h6" fontWeight={700}>
                {feature.title}
              </Typography>

              <Typography variant="body1" fontWeight={300}>
                {feature.description}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </>
  );
}
