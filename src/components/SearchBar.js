import React from "react";

class SearchBar extends React.Component {
  state = { term: "Cars" };

  onFormSubmit = (event) => {
    //onForm should be function if you want to see the result
    event.preventDefault(); //prevent the page from refreshing and when user press enter it would submit the form
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term} //   value - whatever the value of state is it is shown on seacrh bar
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
