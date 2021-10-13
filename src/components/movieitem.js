import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class MovieItem extends Component{

    render(){
        return(
            <div>
                <Card>
  <Card.Header>{this.props.movie.Title}</Card.Header>
  <Card.Body>
    <blockquote >
    <img src={this.props.movie.Poster} width="200" height="200"></img>
      <footer>
      {this.props.movie.Year} 
      </footer>
    </blockquote>
  </Card.Body>
</Card>
            
          
            
            
        </div>
        );
    }
}
export default MovieItem;