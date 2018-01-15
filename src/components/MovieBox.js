import React from 'react';
import MovieList from './MovieList.js';



class MovieBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [
        { id: 1, title: 'La Haine', showtimes: 'Showtimes'},
        { id: 2, title: 'Mr Holmes', showtimes: 'Showtimes'},
        { id: 3, title: 'Up', showtimes: 'Showtimes'},
        { id: 4, title: 'Bla', showtimes: 'Showtimes'}
      ]
    };
  }

  render() {
    return (
     <div className="movie-box">
       <h4>UK Opening This Week</h4>
       <MovieList movies={ this.state.movies } />
       <a href="#">See more opening this week >> </a><br/><br/>
       <button> Get Showtimes >> </button>
     </div>
   );
  }

}

export default MovieBox;
