import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField, { type TextFieldProps } from "@mui/material/TextField";
import { IconChevronRight } from "@tabler/icons-react";
import React, { useId } from "react";

const JoinWaitlistInput: React.FC<TextFieldProps> = (props) => {
  const id = useId();
  const [email, setEmail] = React.useState<string>("");
  const [error, setError] = React.useState<boolean>(false); // Stato per l'errore
  const [helperText, setHelperText] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setEmail(value);

    // Controlla la validità in tempo reale
    if (value && !validateEmail(value)) {
      setError(true);
      setHelperText("Inserisci un indirizzo email valido.");
    } else {
      setError(false);
      setHelperText("");
    }
  };

  return (
    <TextField
      id={id}
      label={translate({
        id: "enterYourEmail",
        message: "Enter your email",
      })}
      fullWidth
      value={email}
      onChange={handleChange}
      error={error}
      helperText={helperText}
      // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
      //   setEmail(event.target.value);
      // }}
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" sx={{ marginRight: -1 }}>
            <Button
              disabled={email.length === 0 || error}
              variant="contained"
              color="primary"
              sx={{
                borderRadius: 2,
                textTransform: "none",
              }}
              endIcon={<IconChevronRight />}
              LinkComponent={Link}
              href={`https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAa__e6EKmNURUpXVDBYWUVBMUVOQjRGS05KOVNZVkMwMy4u&r41d97b59b6194312b8aaa93246d4d61a=${encodeURIComponent(
                email
              )}`}
            >
              <Translate id="joinWaitlistNow">Join Waitlist Now</Translate>
            </Button>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default JoinWaitlistInput;
