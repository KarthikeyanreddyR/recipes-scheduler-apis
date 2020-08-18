export default {
    port: process.env.PORT,
    mongo: {
        host: process.env.MONGO_HOST,
        username: process.env.MONGO_USERNAME,
        passcode: process.env.MONGO_PASSCODE,
        db: process.env.MONGO_DATABASE
    }
}