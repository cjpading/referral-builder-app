import { Alert, Snackbar, Typography } from "@mui/material";
import AlertMessageProps from "../types/props/AlertMessageProps";

const AlertMessage: React.FC<AlertMessageProps> = ({
  isOpen,
  handleClose,
  message,
  severity,
}) => {
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={severity} variant="filled">
        <Typography>{message}</Typography>
      </Alert>
    </Snackbar>
  );
};

export default AlertMessage;
