import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Table, Dropdown } from "react-bootstrap";
import { GET_TRANSPORTERS_QUERY } from "../../../../Query/query";
import { DELETE_TRANSPORTER_MUTATION } from "../../../../Mutations/mutations";
import EditTransporter from "./EditTransporter";

export default function Transporters() {
  const [transporters, setTransporters] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTransporter, setSelectedTransporter] = useState(null);

  const { loading, data } = useQuery(GET_TRANSPORTERS_QUERY);

  useEffect(() => {
    if (data) {
      setTransporters(data.transporters);
    }
  }, [data]);

  const handleEdit = (id) => {
    const transporter = transporters.find((t) => t.id === id);
    setSelectedTransporter(transporter);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedTransporter(null);
    setShowModal(false);
  };

  const handleSaveChanges = (updatedTransporter) => {
    // Perform the mutation to update the transporter using the UPDATE_TRANSPORTER_MUTATION and the updatedTransporter object

    // After the mutation is successful, update the transporters list with the updated transporter object

    const updatedTransporters = transporters.map((t) =>
      t.id === updatedTransporter.id ? updatedTransporter : t
    );
    setTransporters(updatedTransporters);
    handleCloseModal();
  };

  const [deleteTransporter] = useMutation(DELETE_TRANSPORTER_MUTATION);

  const handleDelete = (id) => {
    deleteTransporter({
      variables: {
        id: id,
      },
    })
      .then(() => {
        // Filter out the deleted transporter from the list
        const updatedTransporters = transporters.filter(
          (transporter) => transporter.id !== id
        );
        setTransporters(updatedTransporters);
        console.log("Transporter deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting transporter", error);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Account Number</th>
            <th>GIT</th>
            <th>GIT Expiry</th>
            <th>Director</th>
            <th>Contact</th>
            <th>Country</th>
            <th>City</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transporters &&
            transporters.map((transporter) => (
              <tr key={transporter.id}>
                <td>{transporter.name}</td>
                <td>{transporter.email}</td>
                <td>{transporter.account_no}</td>
                <td>{transporter.git}</td>
                <td>{transporter.git_expiry}</td>
                <td>{transporter.director}</td>
                <td>{transporter.contact}</td>
                <td>{transporter.country}</td>
                <td>{transporter.city}</td>
                <td>{transporter.address}</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" size="sm" id="dropdown-basic">
                      Actions
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleEdit(transporter.id)}>
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleDelete(transporter.id)}>
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      {selectedTransporter && (
        <EditTransporter
          showModal={showModal}
          transporter={selectedTransporter}
          handleCloseModal={handleCloseModal}
          handleSaveChanges={handleSaveChanges}
        />
      )}
    </div>
  );
}
