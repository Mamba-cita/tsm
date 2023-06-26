import { gql } from '@apollo/client';

export const ADD_CLIENT_MUTATION = gql`
  mutation AddClient($name: String!, $email: String!, $accountNo: String!) {
    addClient(name: $name, email: $email, account_no: $accountNo) {
      // Specify the returned fields here
    }
  }
`;

export const DELETE_CLIENT_MUTATION = gql`
  mutation DeleteClient($id: ID!) {
    deleteClient(id: $id) {
      // Specify the returned fields here
    }
  }
`;

