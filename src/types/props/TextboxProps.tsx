import { Control } from "react-hook-form";

interface TextboxProps {
  control: Control<any>;
  fieldName: string;
  fieldLabel: string;
  type: "text" | "email";
  rules?: object;
}

export default TextboxProps;
