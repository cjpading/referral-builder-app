import { Box, Button, Grid2 as Grid, Paper, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useForm } from "react-hook-form";
import TextboxComponent from "../Textbox";
import useScreenSize from "../../hooks/useScreenSize";
import { createReferralApi } from "../../services/ReferralBuilderFormHttp";
import { useState } from "react";
import AlertMessage from "../AlertMessage";

const ReferralBuilderForm = () => {
  const { isMediumScreen } = useScreenSize();
  const { control, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };

  const handleCreateReferral = (data: any) => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      createReferralApi(data);
      setIsAlertOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  };

  return (
    <>
      <AlertMessage
        isOpen={isAlertOpen}
        handleClose={handleAlertClose}
        message={"Creating referral successful"}
        severity="success"
      />
      <Paper
        sx={{
          width: isMediumScreen ? "100%" : {},
          padding: 4,
          justifyContent: "flex-start",
        }}
        elevation={3}
      >
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
            />
            <TextboxComponent
              control={control}
              fieldName="street"
              fieldLabel="Street"
              type="text"
            />
          </Grid>
          <Grid spacing={2} container>
            <TextboxComponent
              control={control}
              fieldName="suburb"
              fieldLabel="Suburb"
              type="text"
            />
            <TextboxComponent
              control={control}
              fieldName="state"
              fieldLabel="State"
              type="text"
            />
          </Grid>
          <Grid spacing={2} container>
            <TextboxComponent
              control={control}
              fieldName="postcode"
              fieldLabel="Postcode"
              type="text"
            />
            <TextboxComponent
              control={control}
              fieldName="country"
              fieldLabel="Country"
              type="text"
            />
          </Grid>
          <Grid sx={{ paddingTop: 4 }} spacing={2} container>
            <Grid size={6}>
              <Button fullWidth variant="outlined">
                <Typography sx={{ padding: "2px" }} variant="body2">
                  Upload Avatar
                </Typography>
              </Button>
            </Grid>
            <Grid size={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
              >
                {isLoading ? (
                  <CircularProgress color="inherit" size={"24px"} />
                ) : (
                  <Typography sx={{ padding: "2px" }} variant="body2">
                    Create Referral
                  </Typography>
                )}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default ReferralBuilderForm;
