import { Box, TextField, Typography } from "@mui/material";

interface TextboxProps {
  field: string;
  type: "text" | "email";
}

const TextboxComponent: React.FC<TextboxProps> = ({ field, type }) => {
  return (
    <Box>
      <Typography
        sx={{ paddingTop: 2, textTransform: "uppercase" }}
        variant="body2"
      >
        {field}
      </Typography>
      <TextField
        sx={{ height: 45, margin: 0 }}
        type={type}
        variant="outlined"
      />
    </Box>
  );
};

export default TextboxComponent;
