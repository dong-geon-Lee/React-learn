import React from "react";
import Card from "../UI/Card";
import classes from "../Users/UsersList.module.css";

const UsersList = ({ datas }) => {
  return (
    <Card>
      <ul className={classes.list}>
        {datas.map((data) => (
          <li key={data.id}>
            {data.username} {data.password}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
