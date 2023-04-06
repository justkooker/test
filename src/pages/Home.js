import React from 'react';
import InputSearch from '../components/InputSearch';
import MovieList from '../components/MovieList'
import Preloader from '../components/Preloader';
const API_KEY = process.env.REACT_APP_API_KEY;

class Home extends React.Component {
    state = {
        movieList: [],
        loading: true

    }
    componentDidMount() {
        let url = ` http://www.omdbapi.com/?apikey=${API_KEY}&s=all`;
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ movieList: data.Search, loading: false }))
    }
    searchMovies = (stringSearch, type = 'all') => {
        this.setState({ loading: true })
        let url = ` http://www.omdbapi.com/?apikey=${API_KEY}&s=${stringSearch}${type !== 'all' ? `&type=${type}` : ''}`;
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ movieList: data.Search, loading: false }))
    }

    render() {
       
        const { movieList, loading } = this.state;
        console.log(movieList)
        return <main className="main container">
            <h4>SPA Movies Content</h4>
            <InputSearch searchMovies={this.searchMovies} />
            {
                loading ? <Preloader /> : <MovieList movieList={movieList} />

            }

        </main>
    }
}

export { Home };