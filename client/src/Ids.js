import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Ids.scss';

const fetch = require('node-fetch');

class Id extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: []
    };
  }

  componentDidMount() {
    this.getId();
  }

  getId = () => {
    fetch(`api/getFilms`)
      .then(res => res.json())
      .then(Id => this.setState({ Id }));
  };

  render() {
    const { Id } = this.state;

    return (
      <div className='Ids'>
        {Id.map(Id => {
          return (
            <div key={Id.id}>
              <Link to={`{/ids/${Id.description}`}>
                <h1> {Id.description}</h1>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Id;
