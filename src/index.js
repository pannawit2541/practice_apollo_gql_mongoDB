import { ApolloServer, gql } from "apollo-server-express";
import express from "express"
import mongoose from 'mongoose'

import { resolvers } from "./resolvers"
import { typeDefs } from "./typeDefs"

const startServer = async () => {
    const app = express()
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    server.applyMiddleware({ app });

    await mongoose.connect('mongodb+srv://test:1234@cluster0.wygeh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true })
        .then(() => console.log('MongoDB Connected!'))
        .catch((err) => console.log('Error', err));


    app.listen({ port: 4000 }, () =>
        console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    );


}

startServer();