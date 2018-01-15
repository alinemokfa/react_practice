import React from 'react';
import Movie from './Movie.js';

class MovieList extends React.Component {

  render() {

    const movieNodes = this.props.movies.map(function (movie) {
      return (
        <Movie key= {movie.id} title={ movie.title }>
          { movies.showtimes }
        </Movie>
      );
    });

    return (
     <div className="movie-list">
       { movieNodes }
     </div>
   );
  }

}

export default MovieList;
