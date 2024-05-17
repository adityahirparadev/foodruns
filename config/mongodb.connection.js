
import mongoose from 'mongoose';
const {
    MONGODB_USERNAME,
    MONGODB_PASSWORD,
    MONGODB_CLUSTER,
    MONGODB_DATABASE_NAME,
    MONGODB_RETRYWRITES,
    MONGODB_W,
    MONGODB_APPNAME
} = process.env;
const uri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}/${MONGODB_DATABASE_NAME}?retryWrites=${MONGODB_RETRYWRITES}&w=${MONGODB_W}&appName=${MONGODB_APPNAME}`;

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
});
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});
mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
});

export default async () => {
    try {
        await mongoose.connect(uri);
        return mongoose;
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error}`);
    }
}