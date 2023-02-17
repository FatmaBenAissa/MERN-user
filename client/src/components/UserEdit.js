import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { useDispatch } from "react-redux";
import { edituser } from "../Redux/userSlice";

function UserEdit({ user, ping, setping }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edit, setedit] = useState({
    name: user.name,
    lastname: user.lastname,
    age: user.age,
    email: user.email,
  });
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User name</Form.Label>
              <Form.Control
                type="text"
                placeholder={user.name}
                onChange={(e) => setedit({ ...edit, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User lastname</Form.Label>
              <Form.Control
                type="text"
                placeholder={user.lastname}
                onChange={(e) => setedit({ ...edit, lastname: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User age</Form.Label>
              <Form.Control
                type="text"
                placeholder={user.age}
                onChange={(e) => setedit({ ...edit, age: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User email</Form.Label>
              <Form.Control
                type="email"
                placeholder={user.email}
                onChange={(e) => setedit({ ...edit, email: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(edituser({ id: user._id, edit }));
              setping(!ping);
            }}
          >
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserEdit;
