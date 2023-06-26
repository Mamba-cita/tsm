import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CLIENT_MUTATION } from '../../../../Mutations/mutations';

const AddClient = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [accountNo, setAccountNo] = useState('');

  const [addClientMutation] = useMutation(ADD_CLIENT_MUTATION);

  const handleAddClient = () => {
    addClientMutation({
      variables: { name, email, accountNo },
    })
      .then((response) => {
        // Handle success
        console.log('Client added:', response.data.addClient);
      })
      .catch((error) => {
        // Handle error
        console.error('Error adding client:', error);
      });
  };

  return (
    <div>
      <h2>Add Client</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input
        type="text"
        value={accountNo}
        onChange={(e) => setAccountNo(e.target.value)}
        placeholder="Account No"
      />
      <button onClick={handleAddClient}>Add</button>
    </div>
  );
};

export default AddClient;
