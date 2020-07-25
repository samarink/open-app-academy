import React from 'react';
import { Mutation } from 'react-apollo';

import Mutations from '../../graphql/mutations';
const { NEW_ABODE } = Mutations;

import Queries from '../../graphql/queries';
const { FETCH_ABODES } = Queries;

class AbodeCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      coordinates: '',
      message: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e, newAbode) {
    e.preventDefault();
    let name = this.state.name;

    newAbode({
      variables: {
        name: name,
      }
    }).then((data) => {
      this.setState({
        name: '',
        coordinates: '',
        message: 'New Abode has been successfully created'
      });
    });
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  updateCache(cache, { data: { newAbode } }) {
    let abodes;
    try {
      abodes = cache.readQuery({ query: FETCH_ABODES });
    } catch (err) {
      return;
    }

    if (abodes) {
      let embmemArray = abodes.abodes;

      cache.writeQuery({
        query: FETCH_ABODES,
        data: { abodes: embmemArray.concat(newAbode) }
      });
    }
  }

  render() {
    return (
      <Mutation
        mutation={NEW_ABODE}
        update={(cache, data) => this.updateCache(cache, data)}
      >
        {(newAbode, { data }) => {
          return (
            <div>
              <form onSubmit={(e) => this.handleSubmit(e, newAbode)}>
                <label>
                  Name
                  <input
                    value={this.state.name}
                    onChange={this.update('name')}
                  />
                </label>

                <label>
                  Coordinates
                  <input
                    value={this.state.name}
                    onChange={this.update('coordinates')}
                  />
                </label>
                <button>Abode Create</button>
              </form>
              <p>{this.state.message}</p>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default AbodeCreate;
