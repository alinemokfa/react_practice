import React from 'react';
import Movie from './Movie.js';

class MovieList extends React.Component {

  render() {

    const MovieNodes = this.props.comments.map(function (comment) {
      return (
        <Movie key= {movie.id} author={ movie. }>

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
