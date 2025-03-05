// Get REST API and map all records

import { Paper, Typography } from "@mui/material";

const ReferralBuilderList = () => {
  return (
    <Paper sx={{ padding: 4, justifyContent: "flex-start" }} elevation={3}>
      <Typography
        sx={{ marginBottom: "30px", fontWeight: "bold" }}
        variant="h5"
      >
        Referral List
      </Typography>
    </Paper>
  );
};

export default ReferralBuilderList;
