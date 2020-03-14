import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Ids.scss';

class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Links: []
    };
  }

  componentDidMount() {
    this.getLinks();
  }

  getLinks = () => {
    fetch('api/getFilms')
      .then(res => res.json())
      .then(Links => this.setState({ Links }));
  };

  render() {
    const { Links } = this.state;

    return (
      <div align='center'>
        {Links.map(Links => {
          return (
            <h1 key={Links.url}>
              <Link to={`/Links/${Links.ids}`}>{Links.url}</Link>
            </h1>
          );
        })}
      </div>
    );
  }
}

export default Links;
