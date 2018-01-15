import React from 'react';

class Movie extends React.Component {
  render(){
    return (
     <div className="movie">
      <h4>{ this.props.author }</h4>
        {this.props.children}
     </div>
  };

}

export default Movie;
