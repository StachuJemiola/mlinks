import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchTag extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onChange(e.target.value);
  }
  render() {
    return <input onChange={this.handleChange} />;
  }
}
SearchTag.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchTag;
