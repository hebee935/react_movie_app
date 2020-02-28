import React, { Component } from 'react';
import './App.css';
import Movie from './MovieCardView';
import { ApolloProvider } from 'react-apollo';
import { HashRouter as Router, Route } from 'react-router-dom';
import client from './apolloClient';

import MovieList from './MovieList';
import MovieDetailView from './MovieDetailView';

class App extends Component {

  // Lifecycle
  // Render: componentWillMount() => render() => componentDidMount()
  // Update: componentWillReceiveProps() => shouldComponentUpdate() === true => componentWillUpdate() => render() => componentDidUpdate()
  componentWillMount() {
    console.log('will Mount');
  }
  componentDidMount() {
    console.log('did Mount');
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie title={movie.title} poster={movie.poster} />
    });
    return movies;
  }

  state = {

  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Route exact={true} path={'/'} component={MovieList} />
          <Route exact={true} path={'/:id'} component={MovieDetailView} />
        </Router>
      </ApolloProvider>
    ); 
  }
}

export default App;
