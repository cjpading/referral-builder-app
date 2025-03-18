import { useEffect } from "react";
import {
  Box,
  Button,
  Grid2 as Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { getReferralApi } from "../../services/ReferralBuilderFormHttp.js";
import { useReferralList } from "../../hooks/useReferralList.js";
import useScreenSize from "../../hooks/useScreenSize.js";
import ReferralBuilder from "../../types/request/ReferralBuilder.js";

const StyledTableHead = styled(TableHead)({
  textTransform: "uppercase",
});

const StyledTypography = styled(Typography)({
  fontWeight: "bold",
  color: "grey",
});

const StyledBox = styled(Box)({
  paddingBottom: 16,
  paddingTop: 16,
});

const ReferralBuilderList = () => {
  const { isMediumScreen } = useScreenSize();
  const { referralDataList, setReferralDataList, refreshReferralDataList } =
    useReferralList();

  useEffect(() => {
    const getReferralDataList = async () => {
      const referralList = await getReferralApi();
      const responseData: ReferralBuilder[] = referralList.data;
      if (responseData.length != referralDataList.length) {
        setReferralDataList(responseData);
      }
    };
    getReferralDataList();
  }, [refreshReferralDataList]);

  let content;
  const hasReferralData = referralDataList.length > 0;

  if (isMediumScreen) {
    content = (
      <Paper
        sx={{ width: "100%", padding: 4, justifyContent: "flex-start" }}
        elevation={3}
      >
        <Typography
          sx={{ marginBottom: "20px", fontWeight: "bold" }}
          variant="h5"
        >
          Referral List
        </Typography>
        {hasReferralData ? (
          referralDataList.map((data) => (
            <StyledBox>
              <Grid spacing={2} container gap={0.5}>
                <StyledTypography variant="body2">Given Name</StyledTypography>
                <Typography className="grey" variant="body2">
                  {data.givenName}
                </Typography>
              </Grid>
              <Grid spacing={2} container gap={0.5}>
                <StyledTypography variant="body2">Surname</StyledTypography>
                <Typography className="grey" variant="body2">
                  {data.surName}
                </Typography>
              </Grid>
              <Grid spacing={2} container gap={0.5}>
                <StyledTypography variant="body2">Email</StyledTypography>
                <Typography className="grey" variant="body2">
                  {data.email}
                </Typography>
              </Grid>
              <Grid spacing={2} container gap={0.5}>
                <StyledTypography variant="body2">Phone</StyledTypography>
                <Typography className="grey" variant="body2">
                  {data.phone}
                </Typography>
              </Grid>
              <Grid spacing={2} container gap={0.5}>
                <Grid size={6}>
                  <Button
                    sx={{ borderColor: "black" }}
                    fullWidth
                    variant="outlined"
                  >
                    <Typography
                      sx={{ color: "black", padding: "2px" }}
                      variant="body2"
                    >
                      Edit
                    </Typography>
                  </Button>
                </Grid>
                <Grid size={6}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="error"
                  >
                    <Typography
                      sx={{ color: "white", padding: "2px" }}
                      variant="body2"
                    >
                      Delete
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </StyledBox>
          ))
        ) : (
          <StyledBox>
            <Typography variant="h6">No data found.</Typography>
          </StyledBox>
        )}
      </Paper>
    );
  } else {
    content = (
      <Paper sx={{ padding: 4, justifyContent: "flex-start" }} elevation={3}>
        <TableContainer component={Paper}>
          <Table>
            <StyledTableHead>
              <TableRow>
                <TableCell>
                  <StyledTypography className="grey" variant="body2">
                    Given Name
                  </StyledTypography>
                </TableCell>
                <TableCell>
                  <StyledTypography className="grey" variant="body2">
                    Surname
                  </StyledTypography>
                </TableCell>
                <TableCell>
                  <StyledTypography className="grey" variant="body2">
                    Email
                  </StyledTypography>
                </TableCell>
                <TableCell>
                  <StyledTypography className="grey" variant="body2">
                    Phone
                  </StyledTypography>
                </TableCell>
                <TableCell>
                  <StyledTypography className="grey" variant="body2">
                    Actions
                  </StyledTypography>
                </TableCell>
              </TableRow>
            </StyledTableHead>
            <TableBody>
              {hasReferralData ? (
                referralDataList.map((data) => (
                  <TableRow
                    key={data.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <Typography className="grey" variant="body2">
                        {data.givenName}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className="grey" variant="body2">
                        {data.surName}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className="grey" variant="body2">
                        {data.email}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className="grey" variant="body2">
                        {data.phone}
                      </Typography>
                    </TableCell>
                    <TableCell className="grey">
                      <EditIcon sx={{ color: "grey" }} />
                      <DeleteIcon sx={{ color: "grey" }} />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell colSpan={5}>
                    <Typography variant="body2">No data found.</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  }

  return content;
};

export default ReferralBuilderList;
