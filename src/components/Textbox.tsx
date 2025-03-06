import { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import TextboxProps from "../types/props/TextboxProps";

const TextboxComponent: React.FC<TextboxProps> = ({
  control,
  fieldName,
  fieldLabel,
  type,
  rules,
}) => {
  const [value, setValue] = useState("");
  return (
    <Box>
      <Controller
        name={fieldName}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <Box>
            <Typography
              className="grey"
              sx={{ paddingTop: 2, textTransform: "uppercase" }}
              variant="body2"
            >
              {fieldLabel}
            </Typography>
            <TextField
              {...field}
              type={type}
              variant="outlined"
              error={!!error}
              sx={{ height: 45, margin: 0 }}
              fullWidth
              value={value}
              onChange={(e) => {
                field.onChange(e);
                setValue(e.target.value);
              }}
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
