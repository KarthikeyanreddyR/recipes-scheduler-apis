import { ExpressApplication } from './app'
import { MongoConfiguration } from './mongoConfig'
import envs from './config';

const port = envs.port;

// MongoDB Configuration
MongoConfiguration.initialize();

// Express Application
const app = new ExpressApplication().getApp();

// start the Express server
app.listen(port, () => {
    console.log(`server started on port: ${port}`);
});
