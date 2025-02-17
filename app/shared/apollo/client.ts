import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const Client = new ApolloClient({
  uri: "https://vortex.korabli.su/api/graphql/glossary/",
  cache: new InMemoryCache(),
});

export default Client;
