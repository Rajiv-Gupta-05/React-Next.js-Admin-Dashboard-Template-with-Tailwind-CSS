import React from "react";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { object } from "prop-types";
import ReplyAllRoundedIcon from "@mui/icons-material/ReplyAllRounded";

const schema = yup
  .object({
    name: yup.string().required("Please Enter the Name"),
    email: yup.string().email().required("Please Enter the Email"),
  })
  .required();

export default function userDetails({ handleIsAddClose, rows }) {
  const [utype, setUtype] = useState("User");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (rows) {
      setUtype(rows.type);
      reset({
        id: rows.id,
        name: rows.name,
        email: rows.email,
      });
    }
  }, []);

  const onSubmit = (data) => {
    Object.assign(data, { type: utype });
    console.log(data);

    if (rows) {
      axios
        .put("/api/users", data)
        .then((response) => {
          console.log("Data", response);
          toast.success("👤 User Added Successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          handleIsAddClose();
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
    } else {
      axios
        .post("/api/users", data)
        .then((response) => {
          console.log("Data", response);
          toast.success("👤 User Added Successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          handleIsAddClose();
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
    }
  };

  const handleChange = (event) => {
    setUtype(event.target.value);
  };

  return (
    <>
      <div className="flex justify-start">
        <ReplyAllRoundedIcon
          className="mr-2 cursor-pointer"
          onClick={() => handleIsAddClose()}
        />
        <h2 className="font-bold"> Add Users</h2>
      </div>
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <TextField
              fullWidth
              label="Name"
              {...register("name")}
              variant="outlined"
              size="small"
            />
            <p className="text-red-700 text-xs ml-1">{errors.name?.message}</p>
          </div>
          <div>
            <TextField
              fullWidth
              label="Email"
              {...register("email")}
              variant="outlined"
              size="small"
            />
            <p className="text-red-700 text-xs ml-1">{errors.email?.message}</p>
          </div>
          <div>
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                value={utype}
                label="Type"
                size="small"
                onChange={handleChange}
              >
                <MenuItem value="User">User</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Guest">Guest</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="mt-2 flex justify-end">
          <Button type="submit" variant="outlined" className="mb-2">
            Save
          </Button>
        </div>
      </form>
    </>
  );
}
