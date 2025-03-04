import { Box, TextField, Typography } from "@mui/material";
import { Controller, Control } from "react-hook-form";

interface TextboxProps {
  control: Control<any>;
  fieldName: string;
  fieldLabel: string;
  type: "text" | "email";
  rules?: object;
}

const TextboxComponent: React.FC<TextboxProps> = ({
  control,
  fieldName,
  fieldLabel,
  type,
  rules,
}) => {
  return (
    <Box>
      <Controller
        name={fieldName}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <Box>
            <Typography
              sx={{ paddingTop: 2, textTransform: "uppercase" }}
              variant="body2"
            >
              {fieldLabel}
            </Typography>
            <TextField
              {...field}
              sx={{ height: 45, margin: 0 }}
              type={type}
              variant="outlined"
              error={!!error}
            />
            {error ? (
              <Typography sx={{ color: "red", marginTop: 2 }} variant="body2">
                {error.message}
              </Typography>
            ) : (
              ""
            )}
          </Box>
        )}
      />
    </Box>
  );
};

export default TextboxComponent;
