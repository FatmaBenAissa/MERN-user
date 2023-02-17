import React from "react";
import { useSelector } from "react-redux";
import UserAdd from "./UserAdd";
import UserCard from "./UserCard";

function UserList({ ping, setping }) {
  const users = useSelector((state) => state.user?.userList);
  // const sortedone = users;

  console.log(users);
  // const sorted = sortedone.sort((a, b) => a.age - b.age);

  const compare = (a, b) => {
    if (a.age < b.age) {
      return -1;
    }
    if (a.age > b.age) {
      return 1;
    }
    return 0;
  };

  return (
    <>
      <div className="add">
        <UserAdd ping={ping} setping={setping} />
      </div>
      <div className="box">
        {users
          ?.map((el) => <UserCard user={el} ping={ping} setping={setping} />)
          .sort()}
      </div>
    </>
  );
}

export default UserList;
