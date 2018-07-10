import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { history } from '../routes';

class Search extends Component {
  static propTypes = {
    // onSubmit: PropTypes.func.isRequired,
    searchVisible: PropTypes.bool
  }
  constructor(props) {
    super(props);
    this.state = {
      searchVisible: false,
      searchText: ''
    }
    this.showSearch = this.showSearch.bind(this);
    this.updateSearchInput = this.updateSearchInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateSearchInput(e) {
    const val = e.target.value;
    this.setState({
      searchText: val
    });
  }

  // toggle visibility when run on the state
  showSearch() {
    this.setState({
      searchVisible: !this.state.searchVisible
    })
  }

  submitForm(e) {
    e.preventDefault();
    const {searchText} = this.state;
    this.setState({
      searchText: ''
    })
    this.props.searchForCenters({name:searchText});
    history.push("/search")
  }


  render() {
    
    // Classes to add to the <input /> element
    let searchInputClasses = ["searchInput, form-control mr-sm-2"];
    // Update the class array if the state is visible
    if (this.state.searchVisible) {
      searchInputClasses.push("active");
    }
    return (
      <div>
        {this.state.searchVisible &&
        <form className="form-inline" onSubmit={this.submitForm}>
          <input
            type="text"
            value={this.state.searchText}
            className={searchInputClasses.join(' ')}
            onChange={this.updateSearchInput.bind(this)}
            placeholder="Search for centers..."
          />
        </form>
        }
        {!this.state.searchVisible && <div style={{cursor: "pointer"}}
          onClick={this.showSearch}
          className="fa fa-search searchIcon">
        </div>
        }
      </div>
    );
  }
}

export default Search;
