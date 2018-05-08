import React, { Component } from 'react';

class SearchTag extends Component {
  handleChange(e) {
    this.props.onChange(e.target.value);
  }
  render() {
    return <input onChange={this.handleChange.bind(this)} />
  }
}

export default SearchTag;
