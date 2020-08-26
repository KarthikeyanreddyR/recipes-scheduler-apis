import { ApolloServer, ApolloServerExpressConfig } from 'apollo-server-express';
import express from 'express';


export class GraphQLServer {

    public static initialize(app: express.Application, schema: ApolloServerExpressConfig): void {

        const server = new ApolloServer(schema);
        server.applyMiddleware({ app, path: '/apis' });
    }
}