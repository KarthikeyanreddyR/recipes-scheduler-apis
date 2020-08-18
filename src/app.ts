import express, { Request, Response } from 'express';

export class ExpressApplication {
    private app: express.Application;
    private router: express.Router;

    constructor() {
        this.app = express();
        this.router = express.Router();
        this.manageEndpoints();
        this.middleware();
    }

    public getApp(): express.Application {
        return this.app;
    }

    private manageEndpoints() {
        this.router.get("/", (req: Request, res: Response) => {
            res.send("Hello Karthikeyan!!");
        });
    }

    private middleware() {
        this.app.use("/api", this.router);
    }
}