import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { FETCH_GOD } from '../../graphql/queries';

const GodDetail = props => {
    return (
      <Query query={FETCH_GOD} variables={{ id: props.match.params.id }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading..</p>;
          if (error) return <p>{error}</p>;

          return <p>detail</p>;
        }}
      </Query>
    )
};

export default GodDetail;
