import React, { Component } from 'react';
import './List.css';

class List extends Component {
    state = {
        names:'',
        movies: [ ]
    }
    componentDidMount() {
        const id = this.props.match.params;
       
        fetch("https://acb-api.algoritmika.org/api/movies/list/"+id.id)
        .then(res=>res.json())
        .then(data=>{console.log(data);
            this.setState(
                {
                    movies:data.movies,
                    names:data.title
                }
                    )})
    }

    componentWillUnmount(){
    }

    render() { 
        return (
            <div className="list">
                <h1 className="page_title">{this.state.names}</h1>
                <ul>
                    {this.state.movies.map((e) => {
                        return (
                            <li key={e.id}>
                                <a href={"https://www.imdb.com/title/"+e.id} 
                                target="_blank" rel="noreferrer">{e.name} ({e.year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
 
export default List;