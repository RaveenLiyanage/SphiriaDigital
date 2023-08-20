import * as React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Avatar from "@mui/material/Avatar";

function createData(make, model, year, mileage, condition, price, image) {
  return { make, model, year, mileage, condition, price, image };
}

const SeeDatailButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 10,
  color: "black",
  border: "1px solid",
  borderRadius: "20px",
  lineHeight: 1.5,
  backgroundColor: "white",
  borderColor: "lightgrey",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0063cc",
    borderColor: "grey",
    boxShadow: "none",
  },
});

const rows = [];
const vehicles = [
  {
    make: "Honda",
    model: "CR-V",
    year: "2021",
    mileage: 22409,
    condition: "Great",
    price: "$30,450",
    image: "./../assets/CRV.png",
  },
  {
    make: "Audi",
    model: "A6",
    year: "2021",
    mileage: 19647,
    condition: "Need Servicing",
    price: "$54,900",
    image: "./../assets/Audi-A6-.png",
  },
  {
    make: "Audi",
    model: "Q3",
    year: "2019",
    mileage: 35000,
    condition: "Great",
    price: "$35,695",
    image: "./../assets/Q3.png",
  },
  {
    make: "Mercedes-Benz",
    model: "c-Class",
    year: "2019",
    mileage: 17520,
    condition: "Excellent",
    price: "$52,000",
    image: "./../assets/mercedes-benz-c-class.png",
  },
];

vehicles.map((vehicle) => {
  rows.push(
    createData(
      vehicle.make,
      vehicle.model,
      vehicle.year,
      vehicle.mileage,
      vehicle.condition,
      vehicle.price,
      vehicle.image
    )
  );
});

export default function DisplayTable() {
  console.log(rows);

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow sx={{fontWeight:'bold'}}>
            <TableCell>CAR MODEL</TableCell>
            <TableCell align="left">TOTAL RUN</TableCell>
            <TableCell align="left">CONDITION</TableCell>
            <TableCell align="left">AskingPrice</TableCell>
            <TableCell align="left"> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box sx={{display:'flex', alignItems:'center'}}>
                  <Avatar
                    src={row.image}
                    style={{ width: "10px", height: "10px" }}
                  />
                  {row.make}&nbsp;
                  {row.model}&nbsp;
                  {row.year}&nbsp;
                </Box>
              </TableCell>
              <TableCell align="left">{row.mileage}/Km</TableCell>
              <TableCell align="left">{row.condition}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">
                <SeeDatailButton
                  variant="contained"
                  endIcon={<ArrowRightIcon />}
                >
                  See Details
                </SeeDatailButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
