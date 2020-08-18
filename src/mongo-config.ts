import envs from './envs';
import mongoose from 'mongoose';


export class MongoConfiguration {

    private static config: mongoose.ConnectionOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

    public static initialize(): void {

        mongoose.connect(this.getMongoURI(), this.config)
            .then(() => {
                console.log("mongodb connection success")
            })
            .catch((err) => {
                console.error("Error while creating mongodb connection", err);
            });

    }

    private static getMongoURI(): string {
        return `mongodb+srv://${envs.mongo.username}:${envs.mongo.passcode}@${envs.mongo.host}/${envs.mongo.db}?retryWrites=true&w=majority`;
    }

}