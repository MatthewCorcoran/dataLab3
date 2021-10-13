import React, { Component } from 'react';
import MovieItem from './movieitem';

class Movies extends Component{

    render(){
        
                
            return this.props.films.map((film)=>{
                return <MovieItem movie = {film} Key = {film.imbdID}></MovieItem>
            })
           
    }
}
export default Movies;