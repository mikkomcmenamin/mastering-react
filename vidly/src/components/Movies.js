import React, { Component, Fragment } from "react";
import { getMovies } from "../services/fakeMovieService";
import Heart from "./common/Heart";
import Pagination from "./common/Pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
    pageSize: 4
  };

  onMovieDeleteButtonPressed = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({currentPage: page });
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage } = this.state; 

    if (count === 0) return <p> there are no movies in the database. </p>;

    return (
      <Fragment>
        <p>Showing {count} movies in the database </p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  {" "}
                  <Heart
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => this.onMovieDeleteButtonPressed(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </Fragment>
    );
  }
}

export default Movies;
