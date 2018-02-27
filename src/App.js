import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import links from './links.json';

class SearchTag extends Component {
  handleChange(e) {
    this.props.onChange(e.target.value);
  }
  render() {
    return <input onChange={this.handleChange.bind(this)} />
  }
}

const TagList = ({tags}) => {
  const tagDivs = tags.map((tag) => <div className="tag-name">{tag}</div>);
  return <div className="tag-list">{tagDivs}</div>
}

class LinkList extends Component {
  render() {
    return (
      this.props.links.map((link) => (
        <div className="link-box">
          <div className="link-date">{new Date(link.date * 1000).toLocaleString('pl-PL')}</div>
          <a href={link.url} target="_blank">{link.title}</a>
          <TagList tags={link.tags} />
        </div>
      ))
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {links: links.sort((e1, e2) => e1.date - e2.date)};
  }
  tagFilter(tag) {
    if (tag) {
      this.setState({links: links.filter((e) => e.tags.includes(tag))});
    }
    else {
      this.setState({links})
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SearchTag onChange={this.tagFilter.bind(this)} />
        <LinkList links={this.state.links} />
      </div>
    );
  }
}

export default App;
