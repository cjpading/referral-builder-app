import {
  Box,
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
import { useEffect } from "react";
import { useReferralList } from "../../hooks/useReferralList.js";
import useScreenSize from "../../hooks/useScreenSize.js";

const StyledTableHead = styled(TableHead)({
  textTransform: "uppercase",
});

const StyledTypography = styled(Typography)({
  fontWeight: "bold",
});

const StyledBox = styled(Box)({
  paddingBottom: 16,
  paddingTop: 16,
});

const ReferralBuilderList = () => {
  const { isMediumScreen } = useScreenSize();
  const { referralDataList, setReferralDataList } = useReferralList();

  useEffect(() => {
    const getReferralDataList = async () => {
      const referralList = await getReferralApi();
      setReferralDataList(referralList.data);
    };
    getReferralDataList();
  }, [referralDataList]);

  let content;

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
        {referralDataList.map((data) => (
          <StyledBox>
            <Grid spacing={2} container gap={0.5}>
              <StyledTypography variant="body2">Given Name</StyledTypography>
              <Typography variant="body2">{data.givenName}</Typography>
            </Grid>
            <Grid spacing={2} container gap={0.5}>
              <StyledTypography variant="body2">Surname</StyledTypography>
              <Typography variant="body2">{data.surName}</Typography>
            </Grid>
            <Grid spacing={2} container gap={0.5}>
              <StyledTypography variant="body2">Email</StyledTypography>
              <Typography variant="body2">{data.email}</Typography>
            </Grid>
            <Grid spacing={2} container gap={0.5}>
              <StyledTypography variant="body2">Phone</StyledTypography>
              <Typography variant="body2">{data.phone}</Typography>
            </Grid>
          </StyledBox>
        ))}
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
                  <Typography variant="body2">Given Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">Surname</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">Email</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">Phone</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">Actions</Typography>
                </TableCell>
              </TableRow>
            </StyledTableHead>
            <TableBody>
              {referralDataList.map((data) => (
                <TableRow
                  key={data.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Typography variant="body2">{data.givenName}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{data.surName}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{data.email}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{data.phone}</Typography>
                  </TableCell>
                  <TableCell>
                    <EditIcon />
                    <DeleteIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  }

  return content;
};

export default ReferralBuilderList;
