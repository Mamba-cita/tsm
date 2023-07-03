import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ADD_TRANSPORTER_MUTATION } from "../../../../Mutations/mutations"; 

export default function Transporter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [git, setGit] = useState("");
  const [gitExpiry, setGitExpiry] = useState("");
  const [director, setDirector] = useState("");
  const [contact, setContact] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [addTransporter] = useMutation(ADD_TRANSPORTER_MUTATION);

  const handleSubmit = (e) => {
    e.preventDefault();

    addTransporter({
      variables: {
        name,
        email,
        account_no: accountNo,
        git,
        git_expiry: gitExpiry,
        director,
        contact,
        country,
        city,
        address,
      },
    })
      .then((response) => {
        console.log("Transporter added successfully", response);
      })
      .catch((error) => {
        console.error("Error adding transporter", error);
      });

    // Reset the form
    setName("");
    setEmail("");
    setAccountNo("");
    setGit("");
    setGitExpiry("");
    setDirector("");
    setContact("");
    setCountry("");
    setCity("");
    setAddress("");
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button type="button" onClick={handleModalToggle}>
        Add Transporter
      </button>
      <Modal show={showModal} onHide={handleModalToggle}>
        <Modal.Header closeButton>
          <Modal.Title>Add Transporter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
                  <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Account Number"
        value={accountNo}
        onChange={(e) => setAccountNo(e.target.value)}
        required
      />
        <input
        type="text"
        placeholder="GIT"
        value={git}
        onChange={(e) => setGit(e.target.value)}
        required
      />
       <input
        type="text"
        placeholder="setGitExpiry"
        value={gitExpiry}
        onChange={(e) => setGitExpiry(e.target.value)}
        required
      />
        <input
        type="text"
        placeholder="setDirector"
        value={director}
        onChange={(e) => setDirector(e.target.value)}
        required
      />
        <input
        type="text"
        placeholder="setContact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
      />
          <input
        type="text"
        placeholder="setCountry"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        required
      />
          <input
        type="text"
        placeholder="setCity"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
          <input
        type="text"
        placeholder="setAddress"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalToggle}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Add Transporter
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
