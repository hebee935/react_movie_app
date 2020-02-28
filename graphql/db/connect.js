import mongoose from 'mongoose';
import Movie from './models/movie';

const PATH = 'mongodb://localhost:27017/graphql';

function database() {
    mongoose.connect(PATH, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (err) {
            console.error('🚀 mongodb connection error', err);
        }
        console.log(`🚀 mongodb connected at ${PATH}`);
    });
}
export default database;
export const models = {
    Movie,
};