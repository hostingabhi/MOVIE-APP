// import React from "react";

// export default class MovieCard extends React.Component{

// }
import { Component } from "react";

export default class MovieCard extends Component {




    render() {
        const { title, plot, poster, price, rating, stars, fav, isInCart } = this.props.movies;
        const { addStars, movies, decStars, toggleFav, toggleCart } = this.props;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src={poster} />
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">RS.{price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">

                                <img alt="decrease" src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png"
                                    className="str-btn"
                                    onClick={() => { decStars(movies) }} />
                                &nbsp;&nbsp;
                                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars" />
                                &nbsp;&nbsp;
                                <img alt="Increase" src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                                    className="str-btn"
                                    onClick={() => { addStars(movies) }} />
                                &nbsp;&nbsp;
                                <span className="starCount">{stars}</span>
                            </div>
                            {/* {fav ?
                                <button className="unfavourite-btn" onClick={this.handleFav} >Unfavourite</button> :
                                <button className="favourite-btn" onClick={this.handleFav} >Favourite</button>
                            } */}
                            {
                                <button className={fav ? "unfavourite-btn" : "favourite-btn"}
                                    onClick={() => { toggleFav(movies) }} >{fav? "Unfavourite" : "Favourite"}</button>
                            }


                            {/* {isInCart?
                                <button className="cart-btn" onClick={this.cart}>Add to cart</button> :
                                <button className="unfavourite-btn" onClick={this.cart}>Remove from cart</button>} */}
                            {
                                <button className={isInCart ? "unfavourite-btn" : "cart-btn"}
                                    onClick={() => { toggleCart(movies) }} >{isInCart? "Remove from Cart" : "Add to Cart"}</button>
                            }

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}