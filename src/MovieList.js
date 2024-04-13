// export default class MovieCard extends React.Component{
    
    // }
    import { Component } from "react";
    import MovieCard from "./Moviecard";

export default class MovieList extends Component {
    

    render() {

        // const {title,plot,price,rating,stars,fav,isIncart,poster} = this.state.movies;
        const { movies, addStars, decStars, toggleFav, toggleCart } = this.props;
        return (
            <>
                {movies.map((movie) => <MovieCard movies={movie}
                    addStars={addStars}
                    decStars={decStars}
                    toggleFav={toggleFav}
                    toggleCart={toggleCart}
                    key={movie.id}
                />)}
                {/* <MovieCard
            movies={this.state}
            />
            <Student stuname="Abhishek" marks="25"/> */}
            </>
        )
    }
}
MovieCard.defaultProps = {
    mname: "Null"
}