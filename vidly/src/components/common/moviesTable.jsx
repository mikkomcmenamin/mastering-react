import Heart from "./Heart";
import React, { Component } from "react";
import Table from "./table";
import {Link} from "react-router-dom";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title", content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (<Heart liked={movie.liked} onClick={() => this.props.onLike(movie)} />)
    },
    {
      key: "delete",
      content: (
        movie => (<button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>)
      )
    }
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
        <Table columns={this.columns} sortColumn={sortColumn} onSort={onSort} data={movies} />
    );
  }
}

export default MoviesTable;
