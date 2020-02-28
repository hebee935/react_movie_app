export const typeDef = `
    type Movie {
        id: ID!
        title: String!
        genre: String!
    }

    extend type Query {
        movie(id: ID!): Movie!
        movies: [Movie]
    }

    extend type Mutation {
        addMovie(
            title: String!
            genre: String!
        ): Movie
    }
`;