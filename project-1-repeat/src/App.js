import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [userItem, setUserItem] = useState([]);

  const createUser = (user, password) => {
    setUserItem((prev) => {
      return [
        {
          id: Math.floor(Math.random() * 100).toString(),
          username: user,
          password: password,
        },
        ...prev,
      ];
    });
  };

  return (
    <>
      <AddUser onAdduser={createUser}></AddUser>
      <UsersList datas={userItem}></UsersList>
    </>
  );
};

export default App;
