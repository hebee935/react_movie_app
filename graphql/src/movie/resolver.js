export const resolver = {
	Query: {
        movies: async (_parent, {}, { models, }) => {
			const movies = await models.Movie.find();
			return movies;
		},
		movie: async (_parent, { id }, { models, }) => {
			const movie = await models.Movie.findById(id);
			return movie;
		},
	},
	Mutation: {
		addMovie: async (_parent, {
			title, genre, director, poster, story,
		}, { models, }) => {
			const movie = new models.Movie({ title, genre, director, poster, story, });
			await movie.save();
			return movie;
		},
	}
}