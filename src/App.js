import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Card from "./Card";
const App = (_) => {
  const [users, setUsers] = useState([]);
  const [userNumber, setUserNumber] = useState(6);

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?results=${userNumber}`)
      .then(({ data }) => {
        setUsers(data.results);
        console.log(users);
      });
  }, []);

  return (
    <Fragment>
      <h1>Fetching Data</h1>
      <Card users={users} />
    </Fragment>
  );
};
export default App;
