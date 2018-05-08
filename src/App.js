import React, { Component } from 'react';
import './App.css';
import NewLink from './NewLink';
import SearchTag from './SearchTag';
import LinkList from './LinkList';
import links from './links.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      links: links.sort((e1, e2) => e2.date - e1.date),
      openNewLink: false,
    };
  }
  tagFilter(tag) {
    if (tag) {
      this.setState({links: links.filter((e) => e.tags.includes(tag))});
    }
    else {
      this.setState({links});
    }
  }
  handleClick() {
    this.setState({openNewLink: true});
  }
  render() {
    return (
      <div className="App">
        <SearchTag onChange={this.tagFilter.bind(this)} />
        <div>
          <button onClick={this.handleClick}>NOWY</button>
        </div>
        {this.state.openNewLink && <NewLink />}
        <LinkList links={this.state.links} />
      </div>
    );
  }
}

export default App;
