import { ExpressApplication } from './app'
import { MongoConfiguration } from './mongo-config'
import envs from './envs';

const port = envs.port;

// MongoDB Configuration
MongoConfiguration.initialize();

// Express Application
const app = new ExpressApplication().getApp();

// start the Express server
app.listen(port, () => {
    console.log(`server started on port: ${port}`);
});
