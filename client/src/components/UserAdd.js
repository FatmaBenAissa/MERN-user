import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { adduser } from "../Redux/userSlice";
import { useDispatch } from "react-redux";
function UserAdd({ ping, setping }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newuser, setnewuser] = useState({
    name: "",
    lastname: "",
    age: "",
    email: "",
  });
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter user name"
                onChange={(e) =>
                  setnewuser({ ...newuser, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User lastname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter user lastname"
                onChange={(e) =>
                  setnewuser({ ...newuser, lastname: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User age</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter user age"
                onChange={(e) =>
                  setnewuser({ ...newuser, age: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter user email"
                onChange={(e) =>
                  setnewuser({ ...newuser, email: e.target.value })
                }
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
              dispatch(adduser(newuser));
              setping(!ping);
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserAdd;
