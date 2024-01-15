"use client";
import React from "react";
import { useState } from "react";
import Layout from "../components/layout";
import UsersList from "./userslist";
import Button from "@mui/material/Button";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import UserDetails from "./userDetails";
import ReplyAllRoundedIcon from "@mui/icons-material/ReplyAllRounded";

export default function Users() {
  const [addUser, setAddUser] = useState(false);
  return (
    <>
      <Layout>
        <>
          {addUser ? (
            <div>
              <div className="flex justify-start">
                <ReplyAllRoundedIcon
                  className="mr-2"
                  onClick={() => setAddUser(false)}
                />
                <h2 className="font-bold">Users</h2>
              </div>
              <UserDetails />
            </div>
          ) : (
            <div>
              <div className="flex justify-between">
                <h2 className="font-bold mb-4">Users</h2>
                <Button
                  variant="outlined"
                  onClick={() => setAddUser(true)}
                  className="mb-2"
                  endIcon={<GroupAddIcon />}
                >
                  Add User
                </Button>
              </div>
              <UsersList />
            </div>
          )}
        </>
      </Layout>
    </>
  );
}
