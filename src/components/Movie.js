import React from 'react';

class Movie extends React.Component {

  render() {
    return (
     <div className="movie">
      <h4>{ this.props.title }, <a href='#'>{this.props.children}</a></h4>
     </div>
   );
  }

}

export default Movie;
