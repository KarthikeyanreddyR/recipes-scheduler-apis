import { ExpressApplication } from './express-server'
import { MongoConfiguration } from './mongo-config'
import { GraphQLServer } from './graphql-server'
import { ApolloServerExpressConfig } from 'apollo-server-express';
import envs from './envs';
import typeDefs  from './graphql/type-defs/index-type-defs';
import resolvers  from './graphql/resolvers/index-resolvers';

const port = envs.port;

// MongoDB Configuration
MongoConfiguration.initialize();

// Express Application
const app = new ExpressApplication().getApp();

// GraphQL Server
const graphqlConfig: ApolloServerExpressConfig = {
  typeDefs,
  resolvers,
  playground : envs.env?.trim() === 'dev'
}
GraphQLServer.initialize(app, graphqlConfig);

// start the Express server
app.listen(port, () => {
    console.log(`server started on port: ${port}`);
});
