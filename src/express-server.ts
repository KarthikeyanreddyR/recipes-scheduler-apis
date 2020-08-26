import express, { Request, Response } from 'express';
import cors from 'cors';

export class ExpressApplication {
    private app: express.Application;

    constructor() {
        this.app = express();
        this.middleware();
    }

    public getApp(): express.Application {
        return this.app;
    }

    private middleware() {
        this.app.disable('x-powered-by')
        this.app.use(cors());
    }
}