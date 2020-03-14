import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Id from './Ids';
import './Ids.scss';

class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    };
  }

  componentDidMount() {
    this.getFilms();
  }

  getFilms = () => {
    fetch('/api/getFilms', {
      "method": "GET", headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(films => this.setState({ films }))
      .catch();
  };

  render() {
    const { films } = this.state;

    return (
      <div align='center' className='films'>
        {films.map(films => {
          return (
              <h1 key={films.id}>
                <Link to={`{/films/${films.Id}`}>{films.title}</Link>
                <Link to={`{/ids/${Id.description}`}>{films.description}</Link>
              </h1>
           
          );
        })}
      </div>
    );
  }
}

export default Films;
