import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import links from './links.json';

const TagList = ({tags}) => {
  const tagDivs = tags.map((tag) => <div class="tag-name">{tag}</div>);
  return <div class="tag-list">{tagDivs}</div>
}

class LinkList extends Component {
  render() {
    return (
      links.map((link) => (
        <p>
        {new Date(link.date * 1000).toLocaleString('pl-PL')}
        <a href={link.url} target="_blank">{link.title}</a>
          <TagList tags={link.tags} />
        </p>
      ))
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <LinkList />
      </div>
    );
  }
}

export default App;
