import React from 'react';

const TagList = ({ tags }) => {
  const tagDivs = tags.map(tag => <div className="tag-name">{tag}</div>);
  return <div className="tag-list">{tagDivs}</div>;
};

export default TagList;
