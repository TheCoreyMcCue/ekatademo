import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ipAddress } from "../data/apiData";
// import { Button } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rndInt = Math.floor(Math.random() * 4);

export default function BasicTable({ savedPii }) {
  const rows = [
    createData("Name", savedPii?.name),
    createData("Phone", savedPii?.phone),
    createData("Email", savedPii?.email),
    createData("Address", `${savedPii?.address1} ${savedPii?.address2}`),
    createData("Country", savedPii?.country),
    createData("IP Address", ipAddress[rndInt]),
  ];

  console.log(
    "🚀 ~ file: PiiList.jsx:24 ~ BasicTable ~ savedPii:",
    savedPii[0]
  );
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: "75%", minHeight: "60%" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Key</TableCell>
            <TableCell align="right">Value</TableCell>
            {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              {/* <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
