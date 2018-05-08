import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TagList from './TagList';

class LinkList extends Component {
  render() {
    return (
      this.props.links.map(link => (
        <div className="link-box">
          <div className="link-date">{new Date(link.date * 1000).toLocaleString('pl-PL')}</div>
          <a href={link.url} target="_blank">{link.title}</a>
          <TagList tags={link.tags} />
        </div>
      ))
    );
  }
}
LinkList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LinkList;
