import React, { Component } from 'react';
import './Item.css';
import store from "../../redux/store";
import { addToList } from "../../redux/proses";
class Item extends Component {
    state={
        poster:this.props.Poster,
        id:this.props.imdbID,
        title:this.props.Title,
        year:this.props.Year
    }
      
       
    addToListHandler=(name,year,id)=>{
       
        store.dispatch(addToList(name,year,id));
    }
    render() {
        
        return (
            <article className="movie-item">
                <img className="movieItemPoster" src={this.state.poster} alt={this.state.title} />
                <div >
                    <h3 className="movieItemTitle">{this.state.title}&nbsp;({this.state.year})</h3>
                    <button type="button" className="addButton" 
                    onClick={()=>this.addToListHandler(this.state.title,this.state.year,this.state.id)}>
                        Добавить в список</button>
                </div>
            </article>
        );
    }
}
 
export default Item;

