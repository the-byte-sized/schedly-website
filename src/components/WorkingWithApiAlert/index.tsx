import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import {
  Alert,
  type AlertProps,
  AlertTitle,
  Button,
  Typography,
} from "@mui/material";
import { IconChevronRight } from "@tabler/icons-react";

const WorkingWithApiAlert: React.FC<AlertProps> = (props) => {
  return (
    <Alert
      icon={false}
      severity="success"
      sx={{
        marginBottom: "25px",
      }}
      {...props}
    >
      <AlertTitle>
        <Translate id="workingWithApiAlert.title">
          👍 Working with the API
        </Translate>
      </AlertTitle>

      <Typography sx={{marginTop: 2}}>
        <Translate id="workingWithApiAlert.description">
          Take a look at our API reference to learn more about the different
          endpoints in the API and how to authenticate.
        </Translate>
      </Typography>

      <Button
        component={Link}
        to="/restful-api-reference/"
        variant="outlined"
        endIcon={<IconChevronRight />}
        sx={{
          marginTop: 2,
        }}
      >
        API Reference
      </Button>
    </Alert>
  );
};

export default WorkingWithApiAlert;
