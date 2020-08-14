import React, {Component} from "react";
import Search from "./search";
import {connect} from "react-redux";

class Landing extends Component {
 
  render() {
    
    return (
      <div className="container">
        <Search />
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {loading: state.movies.loading};
};

export default connect(mapStateToProps, {})(Landing);
