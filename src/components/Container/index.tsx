import { Container as MuiContainer, ContainerProps } from "@mui/material";

export default function Container({ sx, ...props }: ContainerProps) {
  return (
    <MuiContainer
      maxWidth={false}
      sx={{ ...sx, maxWidth: "1360px", padding: "5rem 1rem" }}
      {...props}
    >
      {props.children}
    </MuiContainer>
  );
}
