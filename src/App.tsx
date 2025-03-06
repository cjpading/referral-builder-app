import { Grid2 as Grid, Stack } from "@mui/material";
import ReferralBuilderForm from "./components/ReferralBuilder/ReferralBuilderForm";
import ReferralBuilderList from "./components/ReferralBuilder/ReferralBuilderList";
import { ReferralBuilderProvider } from "./store/ReferralBuilderContext";
import "./App.css";

function App() {
  return (
    <ReferralBuilderProvider>
      <Stack>
        <Grid
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          container
        >
          <Grid size={{ xs: 3, sm: 7, md: 6 }}>
            <ReferralBuilderForm />
          </Grid>
          <Grid size={{ xs: 3, sm: 7, md: 6 }}>
            <ReferralBuilderList />
          </Grid>
        </Grid>
      </Stack>
    </ReferralBuilderProvider>
  );
}

export default App;
