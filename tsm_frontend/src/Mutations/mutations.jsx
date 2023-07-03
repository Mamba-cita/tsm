import { gql } from '@apollo/client';


export const ADD_TRANSPORTER_MUTATION = gql`
  mutation AddTransporter(
    $name: String!
    $email: String!
    $account_no: String!
    $git: String!
    $git_expiry: String!
    $director: String!
    $contact: String!
    $country: String!
    $city: String!
    $address: String!
  ) {
    addTransporter(
      name: $name
      email: $email
      account_no: $account_no
      git: $git
      git_expiry: $git_expiry
      director: $director
      contact: $contact
      country: $country
      city: $city
      address: $address
    ) {
      id
      name
      email
      account_no
      git
      git_expiry
      director
      contact
      country
      city
      address
    }
  }
`;


export const DELETE_TRANSPORTER_MUTATION = gql`
  mutation DeleteTransporter($id: ID!) {
    deleteTransporter(id: $id) {
      id
    }
  }
`;


export const UPDATE_TRANSPORTER_MUTATION = gql`
  mutation UpdateTransporter(
    $id: ID!
    $name: String
    $email: String
    $account_no: String
    $git: String
    $git_expiry: String
    $director: String
    $contact: String
    $country: String
    $city: String
    $address: String
  ) {
    updateTransporter(
      id: $id
      name: $name
      email: $email
      account_no: $account_no
      git: $git
      git_expiry: $git_expiry
      director: $director
      contact: $contact
      country: $country
      city: $city
      address: $address
    ) {
      id
      name
      email
      account_no
      git
      git_expiry
      director
      contact
      country
      city
      address
    }
  }
`;
