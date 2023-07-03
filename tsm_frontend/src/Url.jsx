import { ApolloClient, InMemoryCache } from "@apollo/client";

const tsm = new ApolloClient({
  uri: "http://localhost:5000/tsm",
  cache: new InMemoryCache(),
});

export default tsm;
