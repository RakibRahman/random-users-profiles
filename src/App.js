import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ActionButtons from "./ActionButtons";

import Card from "./Card";
const App = (_) => {
  const [users, setUsers] = useState([]);
  const [userNumber, setUserNumber] = useState(1);
  const [refresh, setRefresh] = useState(new Date());

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?results=${userNumber}`)
      .then(({ data }) => {
        setUsers(data.results);
      });
    document.title = "Random Users Profiles";
  }, [userNumber, refresh]);
  const addNewUser = () => {
    setUserNumber(userNumber + 1);
  };
  const refreshUser = () => {
    setRefresh(new Date());
  };
  const resetUser = () => {
    setUserNumber(1);
  };
  return (
    <main className="main">
      <h1 className="title">Random Users Profiles</h1>
      <ActionButtons
        refresh={refreshUser}
        newUser={addNewUser}
        reset={resetUser}
      />
      <Card users={users} />
    </main>
  );
};
export default App;
