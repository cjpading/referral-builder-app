export type SeverityType = "success" | "info" | "warning" | "error";

interface AlertMessageProps {
  isOpen: boolean;
  handleClose: () => void;
  message: string;
  severity: SeverityType;
}

export default AlertMessageProps;
