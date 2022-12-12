import React, { Component } from 'react';
import { setFilm } from '../../redux/proses';
import './filmsearch.css';
import store from "../../redux/store";

class Filmsearch extends Component {
    state = {
        search: ''
    }
    searchBoxAndChoose = (e) => {
        e.preventDefault();
        store.dispatch(setFilm(this.state.search));
    }
    searchLineChangeform = (e) => {
        this.setState(
            { 
                search: e.target.value
             }
            );
    }
   
    render() {
        const { search } = this.state;

        return (
            <div >
                <form className="BoxForm" onSubmit={this.searchBoxAndChoose}>
                    <label className="boxlabel">
                        Искать фильм по названию:
                        <input
                            value={search}
                            type="text"
                            className="boxinput"
                            placeholder="Например, Shawshank Redemption"
                            onChange={this.searchLineChangeform}
                        />
                    </label>
                    <button
                        type="submit"
                        className="submit"
                        disabled={!search}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
}
 
export default Filmsearch;