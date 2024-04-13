import React from "react";
import HeadingOne from "./HeadingOne";
import HeadingTwo from "./HeadingTwo";
import MovieList from "./MovieList";
import Navbar1 from "./Navbar";
import Navbar from "./NavbarModule";
import { movies } from "./moviesData";

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
        movies:movies,
        cartCount:0
    }

    // title: "The Avengers",
    // plot: "All Superhero Combine in the one Movie",
    // price: 199,
    // rating: 8.9,
    // stars: 0,
    // fav: false,
    // cart: true
    // this.addStars = this.addStars.bind(this);//binding 
}
// addStars = () => {
//     //increase in variriable
//     // this.state.stars+= 0.5;
//     // console.log(this.state.stars)

//     //form 1
//     // this.setState({
//     //     stars:this.state.stars +0.5
//     // });

//     //form 2
//     if (this.state.stars >= 5) {
//         return;
//     }
//     this.setState((prevState) => {
//         return {
//             stars: prevState.stars + 0.5
//         }
//     });

// }
// decStars = () => {
//     if (this.state.stars <= 0) {
//         return;
//     }
//     this.setState((prevState) => {
//         return {
//             stars: prevState.stars - 0.5
//         }
//     })

// }
// handleFav = () => {
//     this.setState({
//         fav: !this.state.fav
//     });
// }
// cart = () => {
//     this.setState({
//         cart: !this.state.cart
//     });
// }

handleIncStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].stars >= 5) {
        return;
    }
    movies[mid].stars += 0.5;
    this.setState({
        movies: movies
    })
}
handleDecStars = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].stars <= 0) {
        return;
    }
    movies[mid].stars -= 0.5;
    this.setState({
        movies: movies
    })
}
handleToggleFav = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({
        movies
    })
}
handleToggleCart = (movie) => {
    let { movies , cartCount} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].isInCart = !movies[mid].isInCart;
    if(movies[mid].isInCart){
      cartCount = cartCount+1
    }
    else{
      cartCount -=1;
    }
    this.setState({
        movies,
        cartCount
    })
}
  render(){
    const {movies, cartCount} = this.state;
    return (
      <>
    {/* <h1>Movie App</h1> */}
      {/* <Navbar/> */}
      <Navbar1 cartCount={cartCount}/>
      <MovieList 
      movies =  {movies}
      addStars = {this.handleIncStar}
      decStars = {this.handleDecStars}
      toggleFav = {this.handleToggleFav}
      toggleCart = {this.handleToggleCart}
      />
      {/* <HeadingOne/> */}
      {/* <HeadingTwo/> */}
    </>
  );
}
}

export default App;
