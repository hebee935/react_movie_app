import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true, },
    director: { type: String, required: true, },
    genre: { type: String, required: true },
    poster: { type: String, },
    story: { type: String, },
}, {
    timestamps: true,
});

const Movie = mongoose.model('movie', MovieSchema);
export default Movie;