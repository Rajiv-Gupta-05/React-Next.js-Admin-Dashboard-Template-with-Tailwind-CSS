import * as React from "react";
import { useState, useEffect } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import AutoDeleteRoundedIcon from "@mui/icons-material/AutoDeleteRounded";
import { format } from "date-fns";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { ToastContainer, toast } from "react-toastify";

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("/api/users")
      .then((response) => {
        console.log("Data", response);
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const editRecord = (row) => {
    console.log("Row", row);
  };

  const deleteRecord = (row) => {
    console.log("Row", row);
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to delete this Record",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteRow(row),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const deleteRow = (row) => {
    let data = JSON.stringify({
      id: row.id,
    });
    let config = {
      method: "delete",
      url: "/api/users",
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log("Data", response);
        toast.success("👤 User Deleted Successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        getData();
      })
      .catch((err) => {
        console.log("Error", err);
        toast.error(err, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const dateFormatter = (dateString) => {
    const parsedDate = new Date(dateString);
    return format(parsedDate, "MMMM d, yyyy h:mm a");
  };

  return (
    <>
      <ToastContainer />
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 570 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="right" style={{ minWidth: 70 }}>
                  ID
                </TableCell>
                <TableCell align="right" style={{ minWidth: 70 }}>
                  Name
                </TableCell>
                <TableCell align="right" style={{ minWidth: 170 }}>
                  Email
                </TableCell>
                <TableCell align="right" style={{ minWidth: 170 }}>
                  Type
                </TableCell>
                <TableCell align="right" style={{ minWidth: 170 }}>
                  Created_At
                </TableCell>
                <TableCell align="center" style={{ minWidth: 170 }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      <TableCell key={index} align="right">
                        {row.id}
                      </TableCell>
                      <TableCell key={index} align="right">
                        {row.name}
                      </TableCell>
                      <TableCell key={index} align="right">
                        {row.email}
                      </TableCell>
                      <TableCell key={index} align="right">
                        {row.type}
                      </TableCell>
                      <TableCell key={index} align="right">
                        {dateFormatter(row.created_at)}
                      </TableCell>
                      <TableCell key={index} align="right">
                        <div className="flex justify-center">
                          <div
                            className="cursor-pointer text-green-800 m-3"
                            onClick={() => editRecord(row)}
                          >
                            <BorderColorRoundedIcon />
                          </div>
                          <div
                            className="cursor-pointer text-orange-800 m-3"
                            onClick={() => deleteRecord(row)}
                          >
                            <AutoDeleteRoundedIcon />
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
