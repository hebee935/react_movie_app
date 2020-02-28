import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
});


class MovieCardView extends Component {
  render() {
    return (
      <MovieCard movie={this.props.movie} />
    )
  }
}

function MovieCard({ movie }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} key={movie.id}>
      <CardActionArea>
        <CardMedia
          component="img"
          // alt="Contemplative Reptile"
          // height="200"
          image={movie.poster}
          title={movie.title}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.director}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  )
}

export default MovieCardView