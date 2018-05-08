import React, { Component } from 'react';
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

export default LinkList;
