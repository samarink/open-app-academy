import React from 'react';
import { Mutation } from 'react-apollo';

import Mutations from '../../graphql/mutations';
const { NEW_EMBLEM } = Mutations;

import Queries from '../../graphql/queries';
const { FETCH_EMBLEMS } = Queries;

class EmblemCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      message: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e, newEmblem) {
    e.preventDefault();
    let name = this.state.name;

    newEmblem({
      variables: {
        name: name,
      },
    }).then((data) => {
      this.setState({
        name: '',
        message: 'New Emblem has been successfully created',
      });
    });
  }

  updateCache(cache, { data: { newEmblem } }) {
    let emblems;
    try {
      emblems = cache.readQuery({ query: FETCH_EMBLEMS });
    } catch (err) {
      return;
    }

    if (emblems) {
      let emblemArray = emblems.emblems;

      cache.writeQuery({
        query: FETCH_EMBLEMS,
        data: { emblems: emblemArray.concat(newEmblem) },
      });
    }
  }

  render() {
    return (
      <Mutation
        mutation={NEW_EMBLEM}
        update={(cache, data) => this.updateCache(cache, data)}
      >
        {(newEmblem, { data }) => {
          return (
            <div>
              <form onSubmit={(e) => this.handleSubmit(e, newEmblem)}>
                <label>
                  Name
                  <input
                    value={this.state.name}
                    onChange={(e) =>
                      this.setState({ name: e.currentTarget.value })
                    }
                  />
                </label>
                <button>Create Emblem</button>
              </form>
              <p>{this.state.message}</p>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default EmblemCreate;
