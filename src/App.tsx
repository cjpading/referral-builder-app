import { Grid2 as Grid, Stack } from "@mui/material";
import ReferralBuilderForm from "./components/ReferralBuilder/ReferralBuilderForm";
import ReferralBuilderList from "./components/ReferralBuilder/ReferralBuilderList";
import "./App.css";

function App() {
  return (
    <Stack
      sx={{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
      }}
    >
      <Grid spacing={2} container>
        <ReferralBuilderForm />
        <ReferralBuilderList />
      </Grid>
    </Stack>
  );
}

export default App;
