import gql from 'graphql-tag';

export const HOME_PAGE = gql `
    query {
        movies {
            id
            title
            director
            poster
            story
        }
    }
`;

export const getOneMovie = gql `
    query {
        movie {
            id
            title
            director
            poster
            story
        }
    }
`