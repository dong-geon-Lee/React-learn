import React, { useState } from "react";
import data from "./components/Data/data";
import ErrorModal from "./components/UI/ErrorModal";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [user, setUser] = useState(data);
  const [modalState, setModalState] = useState(false);

  const addUserHandler = (newUser) => {
    setUser((prevState) => {
      return [newUser, ...prevState];
    });
  };

  const deleteUserHandler = (id) => {
    setUser((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  const modalStateHandler = (modal) => {
    setModalState(modal);
  };

  console.log(user);

  return (
    <>
      {modalState && <ErrorModal modalState={modalStateHandler}></ErrorModal>}
      <AddUser
        onAddUser={addUserHandler}
        modalState={modalStateHandler}
      ></AddUser>
      <UsersList items={user} onDeleteUser={deleteUserHandler}></UsersList>
    </>
  );
};

export default App;
