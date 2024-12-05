import Translate from "@docusaurus/Translate";
import {
  Alert,
  type AlertProps,
  AlertTitle,
  Typography
} from "@mui/material";

const FeatureUnderDevelopmentAlert: React.FC<AlertProps> = (props) => {
  return (
    <Alert
      icon={false}
      severity="warning"
      sx={{
        marginBottom: "25px",
      }}
      {...props}
    >
      <AlertTitle>
        <Translate id="featureUnderDevelopmentAlert.title">
          🚧 Feature Under Development
        </Translate>
      </AlertTitle>

      <Typography sx={{marginTop: 2}}>
        <Translate id="featureUnderDevelopmentAlert.description">
          This feature is currently under development
        </Translate>
      </Typography>
    </Alert>
  );
};

export default FeatureUnderDevelopmentAlert;
