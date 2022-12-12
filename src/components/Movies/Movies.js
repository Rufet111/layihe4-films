import React, { Component } from 'react';
import store from "../../redux/store";
import MovieItem from '../Item/Item';
import './Movies.css';

class Movies extends Component {
    state = { 
        films: []
    }
    componentDidMount(){
        store.subscribe(()=>{
            const state=store.getState();
            fetch(`http://www.omdbapi.com/?s=${state.searchState}&apikey=a741b8e`)
            .then((res)=>res.json())
            .then((data)=>{console.log(data.Search);
                this.setState({films:data.Search})});
        })
    }

    render() { 
        return ( 
            <ul className="movies">
                {this.state.films.map((movie) => (
                    <li className="searchingmovies" key={movie.imdbID}>
                        <MovieItem {...movie} />
                    </li>
                ))}
            </ul>
        );
    }
}
 
export default Movies;