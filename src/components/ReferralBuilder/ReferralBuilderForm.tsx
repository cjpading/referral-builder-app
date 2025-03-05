import { Box, Button, Grid2 as Grid, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import TextboxComponent from "../Textbox";

const ReferralBuilderForm = () => {
  const { control, handleSubmit } = useForm();
  const handleCreateReferral = (data: any) => {
    console.log("data", data);
  };

  return (
    <Paper sx={{ padding: 4, justifyContent: "flex-start" }} elevation={3}>
      <Typography
        sx={{ marginBottom: "30px", fontWeight: "bold" }}
        variant="h5"
      >
        Referral Builder
      </Typography>
      <Box component="form" onSubmit={handleSubmit(handleCreateReferral)}>
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
          <TextboxComponent
            control={control}
            fieldName="givenName"
            fieldLabel="Given Name"
            type="text"
            rules={{ required: "Given Name is required" }}
          />
          <TextboxComponent
            control={control}
            fieldName="surName"
            fieldLabel="Surname"
            type="text"
            rules={{ required: "Surname is required" }}
          />
        </Grid>
        <Grid spacing={2} container>
          <TextboxComponent
            control={control}
            fieldName="email"
            fieldLabel="Email"
            type="email"
            rules={{ required: "Email is required" }}
          />
          <TextboxComponent
            control={control}
            fieldName="phone"
            fieldLabel="Phone"
            type="text"
            rules={{ required: "Phone is required" }}
          />
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
          <TextboxComponent
            control={control}
            fieldName="homeName"
            fieldLabel="Home Name OR #"
            type="text"
            rules={{ required: "Home Name OR # is required" }}
          />
          <TextboxComponent
            control={control}
            fieldName="street"
            fieldLabel="Street"
            type="text"
            rules={{ required: "Street is required" }}
          />
        </Grid>
        <Grid spacing={2} container>
          <TextboxComponent
            control={control}
            fieldName="suburb"
            fieldLabel="Suburb"
            type="text"
            rules={{ required: "Suburb Name is required" }}
          />
          <TextboxComponent
            control={control}
            fieldName="state"
            fieldLabel="State"
            type="text"
            rules={{ required: "State is required" }}
          />
        </Grid>
        <Grid spacing={2} container>
          <TextboxComponent
            control={control}
            fieldName="postcode"
            fieldLabel="Postcode"
            type="text"
            rules={{ required: "Postcode is required" }}
          />
          <TextboxComponent
            control={control}
            fieldName="country"
            fieldLabel="Country"
            type="text"
            rules={{ required: "Country is required" }}
          />
        </Grid>
        <Grid sx={{ paddingTop: 4 }} spacing={2} container>
          <Grid size={6}>
            <Button fullWidth variant="outlined">
              Upload Avatar
            </Button>
          </Grid>
          <Grid size={6}>
            <Button type="submit" fullWidth variant="contained" color="success">
              Create Referral
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default ReferralBuilderForm;
