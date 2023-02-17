import React from "react";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { deleteuser } from "../Redux/userSlice";
import UserEdit from "./UserEdit";

function UserCard({ user, ping, setping }) {
  const dispatch = useDispatch();
  return (
    <Card style={{ width: "18rem", margin: "20px" }}>
      <Card.Body>
        <Card.Title>
          {user.name} {user.lastname}
        </Card.Title>

        <Card.Text>
          <h6>{user.email}</h6>
          <h6>{user.age}</h6>
        </Card.Text>
        <button
          onClick={() => {
            dispatch(deleteuser(user._id));
            setping(!ping);
          }}
        >
          X
        </button>
        <UserEdit user={user} ping={ping} setping={setping} />
      </Card.Body>
    </Card>
  );
}

export default UserCard;
