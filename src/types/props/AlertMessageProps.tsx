interface AlertMessageProps {
  isOpen: boolean;
  handleClose: () => void;
  message: string;
  severity: "success" | "info" | "warning" | "error";
}

export default AlertMessageProps;
