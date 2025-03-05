import { Grid2 as Grid, Stack } from "@mui/material";
import ReferralBuilderForm from "./components/ReferralBuilder/ReferralBuilderForm";
import ReferralBuilderList from "./components/ReferralBuilder/ReferralBuilderList";
import "./App.css";

function App() {
  return (
    <Stack>
      <Grid
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        container
      >
        <ReferralBuilderForm />
        <ReferralBuilderList />
      </Grid>
    </Stack>
  );
}

export default App;
