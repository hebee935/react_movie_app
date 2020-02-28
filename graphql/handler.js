import { ApolloServer, gql } from 'apollo-server';
import { merge } from 'lodash';
import database, { models } from './db/connect';

import { resolver as MovieResolver, schema as Movie, } from './src/movie';

const typeDefs = gql`
    type Movie {
        id: ID!
        title: String!
        genre: String!
        director: String!
        poster: String
        story: String
    }

    type Query {
        movie(id: ID!): Movie!
        movies: [Movie]
    }

    type Mutation {
        addMovie(
            title: String!
            genre: String!
            director: String!
            story: String
            poster: String
        ): Movie
    }
`
;

const resolvers = merge({},
    MovieResolver,    
);

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => {
        return {
            models,
            res,
        }
	},
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
    database();
});