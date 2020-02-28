import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { HOME_PAGE } from './queries';
import MovieCardView from './MovieCardView';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
    },
    gridItem: {
        padding: 20,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
}));

class MovieList extends Component {
    render() {
        return (
            <Query query={HOME_PAGE}>{({ loading, data, error}) => {
                if (loading) return <span>loading</span>;
                if (error) return <span>something happened</span>
                if (data) {
                    return <MovieListItem movies={data.movies}/>
                }
            }}</Query>
        )
    }
}

function MovieListItem({ movies }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <GridList cellHeight={180} className={classes.gridList}>
            {movies.map(movie => <MovieCardView className={classes.gridItem} movie={movie}/>)}
          </GridList>
        </div>
      );
}

export default MovieList;