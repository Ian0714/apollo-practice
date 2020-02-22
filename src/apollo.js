import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: "https://movieql.now.sh",
    resolvers: {
        Movie:{
            isLiked: () => false
        }
    }
});

export default client;