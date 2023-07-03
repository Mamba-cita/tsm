import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { UPDATE_TRANSPORTER_MUTATION } from "../../../../Mutations/mutations"; 

export default function EditTransporter({ showModal, transporter, handleCloseModal }) {
  const [updatedTransporter, setUpdatedTransporter] = useState({});

  useEffect(() => {
    setUpdatedTransporter(transporter);
  }, [transporter]);

  const [updateTransporter] = useMutation(UPDATE_TRANSPORTER_MUTATION);

  const handleSaveChanges = async () => {
    try {
      await updateTransporter({
        variables: {
          id: transporter.id,
          ...updatedTransporter
        }
      });

      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (field, value) => {
    setUpdatedTransporter((prevTransporter) => ({
      ...prevTransporter,
      [field]: value
    }));
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Transporter</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Render the form to edit the transporter details */}
        <input
          type="text"
          value={updatedTransporter.name || ""}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={updatedTransporter.email || ""}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          value={updatedTransporter.account_no || ""}
          onChange={(e) => handleChange("account_no", e.target.value)}
          placeholder="Account No"
        />
        <input
          type="text"
          value={updatedTransporter.git || ""}
          onChange={(e) => handleChange("git", e.target.value)}
          placeholder="GIT"
        />
        <input
          type="text"
          value={updatedTransporter.git_expiry || ""}
          onChange={(e) => handleChange("git_expiry", e.target.value)}
          placeholder="GIT Expiry"
        />
        <input
          type="text"
          value={updatedTransporter.director || ""}
          onChange={(e) => handleChange("director", e.target.value)}
          placeholder="Director"
        />
        <input
          type="text"
          value={updatedTransporter.contact || ""}
          onChange={(e) => handleChange("contact", e.target.value)}
          placeholder="Contact No"
        />
        <input
          type="text"
          value={updatedTransporter.country || ""}
          onChange={(e) => handleChange("country", e.target.value)}
          placeholder="Country"
        />
        <input
          type="text"
          value={updatedTransporter.city || ""}
          onChange={(e) => handleChange("city", e.target.value)}
          placeholder="City"
        />
        <input
          type="text"
          value={updatedTransporter.address || ""}
          onChange={(e) => handleChange("address", e.target.value)}
          placeholder="Address"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
