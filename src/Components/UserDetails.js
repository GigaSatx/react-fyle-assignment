import { Avatar, Button, Card, Paper, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Repos from "./Repos";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

export default function UserDatails({ user, repos }) {
  const [repoData, setRepoData] = useState(repos);
  const [currPage, setCurrPage] = useState(1);
  const [size, setSize] = useState(6);
  const [bool, setBool] = useState(false);

  const updatePage = (page) => {
    setCurrPage(page);
  };

  const handleRepos = (curr, perPage) => {
    return repos.slice((curr - 1) * perPage, curr * perPage);
  };

  return (
    <Paper style={{ height: "100%" }}>
      <Stack direction="row" spacing={2}>
        <Avatar alt={user.name} src="" />
      </Stack>

      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      <p>{user.blog}</p>
      <Button variant="contained" onClick={() => setBool(true)}>
        View Repos
      </Button>
      <Card
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "3rem",
        }}
      >
        {bool &&
          handleRepos(currPage, size).map((repo) => {
            return <Repos key={repo.id} repoData={repo} />;
          })}
      </Card>
      {bool && (
        <Pagination
          className="pagination-data"
          onChange={updatePage}
          pageSize={size}
          total={repos.length}
          current={currPage}
          style={{ paddingBottom: "3rem" }}
        />
      )}
    </Paper>
  );
}
