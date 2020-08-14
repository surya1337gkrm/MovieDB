import React, {Component} from "react";
import {
  searchMovie,
  fetchMovies,
  setLoading,
} from "../../actions/searchActions";
import {connect} from "react-redux";
import Spinner from "./../spinner";
import MoviesContainer from "./moviesContainer";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      ErrorMessage: "",
    };
  }
  componentDidMount() {
    this.setState({searchString: ""});
  }
  handlechange = (e) => {
    // this.props.searchMovie(e.target.value);
    this.setState({ErrorMessage: ""});
    this.setState({searchString: e.target.value});
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.fetchMovies(this.state.searchString);

    // this.props.setLoading();
    this.setState({searchString: ""});
    console.log(this.props.movies.movies);
    if (this.props.movies.movies.Response === "False") {
      this.setState({ErrorMessage: "Movie Not Found"});
    }
  };
  render() {
    console.log(this.state.ErrorMessage);
    return (
      <div>
        <div className="jumbotron jumbotron-fluid mt-5 text-center">
          <div className="container">
            <h1 className="display-4 mb-3">
              <i className="fa fa-search" /> Search for a Movie,TV Series...
            </h1>
            <form id="searchForm" onSubmit={this.handleSubmit}>
              <input
                text="text"
                className="form-control"
                name="searchtext"
                value={this.state.searchString}
                placeholder="Search Movies,Tv Series..."
                onChange={this.handlechange}
              />
              <button type="submit" className="btn btn-primary btn-bg mt-3">
                Search
              </button>
            </form>
          </div>
        </div>
        {this.props.loading ? (
          <Spinner />
        ) : this.props.movies &&
          this.props.movies.movies.Response === "True" ? (
          <MoviesContainer />
        ) : (
          <p style={{color: "red"}}>{this.state.ErrorMessage}</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    loading: state.movies.loading,
    text: state.movies.text,
  };
};

export default connect(mapStateToProps, {searchMovie, fetchMovies, setLoading})(
  Search
);
