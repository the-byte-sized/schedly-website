import {
  Box,
  Card,
  CardContent,
  type CardProps,
  Typography,
} from "@mui/material";
import React from "react";

interface CustomCardProps extends CardProps {
  cardTitle?: string;
  cardDescription?: string;
  cardIcon?: React.ReactElement;
}

const CustomCard: React.FC<CustomCardProps> = ({
  cardTitle,
  cardIcon,
  cardDescription,
  sx,
  ...props
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        textAlign: "center",
        padding: 4,
        backgroundColor: "transparent",
        color: "text.primary",
        borderRadius: "2rem",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "rgba(248, 249, 250,1)",
        transition: "all 0.3s ease",
        svg: {
          transition: "all 0.3s ease",
        },
        "&:hover,&:focus": {
          transform: "translateY(-10px)",
          borderColor: "var(--mui-palette-primary-main)",
          boxShadow: "0 10px 15px rgb(235, 237, 238, 0.1)",
          svg: {
            stroke: "var(--mui-palette-primary-main)",
          },
        },
        ...sx,
      }}
      {...props}
    >
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          {cardIcon}
        </Box>

        <Typography variant="h6" gutterBottom>
          {cardTitle}
        </Typography>

        <Typography variant="body2">{cardDescription}</Typography>

        {props.children}
      </CardContent>
    </Card>
  );
};

export default CustomCard;
