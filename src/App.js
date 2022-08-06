import "./App.css";
import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import InputForm from "./Components/InputForm";
import UserDatails from "./Components/UserDetails";

function App() {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState(null);
  const [bool, setBool] = useState(true);

  const handleResponse = (name) => {
    async function fetchData() {
      const url = `https://api.github.com/users/${name}`;
      const repoUrl = `https://api.github.com/users/${name}/repos`;
      const response = await axios.get(url).catch((e) => alert(e.message));
      const repoRes = await axios.get(repoUrl);
      setUserData(response.data);
      setRepos(repoRes.data);
    }
    fetchData();
  };

  return (
    <div className="App">
      {bool && <InputForm handleResponse={handleResponse} />}

      {repos && <UserDatails user={userData} repos={repos} />}
    </div>
  );
}

export default App;
