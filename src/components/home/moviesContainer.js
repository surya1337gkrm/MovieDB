import React, {Component} from "react";
import {connect} from "react-redux";
import MovieCard from "./movieCard";

class MoviesContainer extends Component {
  componentDidMount() {
    this.props.movies.Search = [];
  }
  render() {
    const {movies} = this.props;

    let content = "";
    content = movies.Search.map((movie, index) => (
      <MovieCard key={index} movie={movie} />
    ));

    return <div className="row">{content}</div>;
  }
}
const mapStateToProps = (state) => {
  return {text: state.movies.text, movies: state.movies.movies};
};
export default connect(mapStateToProps)(MoviesContainer);
