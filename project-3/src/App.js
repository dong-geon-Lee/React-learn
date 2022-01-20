import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  //  userList의 상태관리는 app에서 시작한다.
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prev) => {
      return [
        {
          id: Math.floor(Math.random() * 100).toString(),
          name: uName,
          age: uAge,
        },
        ...prev,
      ];
    });
  };

  return (
    <div className="container">
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
};

export default App;
