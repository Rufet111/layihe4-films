import React, { Component } from 'react';
import './MainPage.css';
import Movies from '../../components/Movies/Movies';
import Papular from '../../components/Papular/Papular';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/filmsearch/filmsearch';


class MainPage extends Component {
    render() { 
        return (
            <div className="main-page">
                <Header />
                <main className="main-page__content">
                    <section className="main-page__main-section">
                        <div className="main-page__search-box">
                            <SearchBox />
                        </div>
                        <div className="main-page__movies">
                            <Movies />
                        </div>
                    </section>
                    <aside className="main-page__favorites">
                        <Papular />
                    </aside>
                </main>
            </div>
        );
    }
}
 
export default MainPage;