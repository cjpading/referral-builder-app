import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

export const useResponsive = (key: Breakpoint) => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(key));
};
