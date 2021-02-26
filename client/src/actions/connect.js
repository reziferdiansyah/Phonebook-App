import ApolloClient from 'apollo-boost';

const API_URL = 'http://localhost:3001/graphql/'

const client = new ApolloClient({
    uri: API_URL
});

export default client;