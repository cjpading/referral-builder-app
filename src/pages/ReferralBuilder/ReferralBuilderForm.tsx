import { Button, Grid2 as Grid, Paper, Typography } from "@mui/material";
import TextboxComponent from "../../components/Textbox";

const ReferralBuilderForm = () => {
  return (
    <Paper sx={{ padding: 4, justifyContent: "flex-start" }} elevation={3}>
      <Typography
        sx={{ marginBottom: "30px", fontWeight: "bold" }}
        variant="h5"
      >
        Referral Builder
      </Typography>
      <Typography
        sx={{
          borderBottom: 1,
          borderBottomColor: "grey",
          textTransform: "uppercase",
        }}
        variant="body1"
      >
        Personal Details
      </Typography>
      <Grid spacing={2} container>
        <TextboxComponent field="Given Name" type="text" />
        <TextboxComponent field="Surname" type="text" />
      </Grid>
      <Grid spacing={2} container>
        <TextboxComponent field="Email" type="email" />
        <TextboxComponent field="Phone" type="text" />
      </Grid>
      <Typography
        sx={{
          paddingTop: 4,
          borderBottom: 1,
          borderBottomColor: "grey",
          textTransform: "uppercase",
        }}
        variant="body1"
      >
        Address
      </Typography>
      <Grid spacing={2} container>
        <TextboxComponent field="Home Name OR #" type="text" />
        <TextboxComponent field="Street" type="text" />
      </Grid>
      <Grid spacing={2} container>
        <TextboxComponent field="Suburb" type="text" />
        <TextboxComponent field="State" type="text" />
      </Grid>
      <Grid spacing={2} container>
        <TextboxComponent field="Postcode" type="text" />
        <TextboxComponent field="Country" type="text" />
      </Grid>
      <Grid sx={{ paddingTop: 4 }} spacing={2} container>
        <Grid size={6}>
          <Button fullWidth variant="outlined">
            Upload Avatar
          </Button>
        </Grid>
        <Grid size={6}>
          <Button fullWidth variant="contained" color="success">
            Create Referral
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ReferralBuilderForm;
