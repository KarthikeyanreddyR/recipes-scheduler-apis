import express from 'express';
import {ExpressApplication} from './app'
import envs  from './config';

const port = envs.port;

// Express Application
const app = new ExpressApplication().getApp();

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started on port: ${ port }` );
} );
