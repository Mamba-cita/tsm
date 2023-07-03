import { gql } from '@apollo/client';

export const GET_TRANSPORTERS_QUERY = gql`
query GetTransporters {
    transporters {
    id
    name,
    email,
    account_no,
    git,
    git_expiry,
    director,
    contact,
    country,
    city,
    address,
  }
}
`;