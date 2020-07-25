import React from 'react';
import Queries from "../../graphql/queries";
const { FETCH_GODS } = Queries;
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

const GodsList = () => {
  return (
    <div className="outer">
      <ul>
        <Query query={FETCH_GODS}>
          {({ loading, error, data }) => {
            if (loading) return <p>loading..</p>;
            if (error) return <p>{error}</p>;

            return data.gods.map(({ id, name, description }) => (
              <li key={id}>
                <Link to={`/gods/${id}`}>
                  <h4>{name}</h4>
                </Link>
              </li>
            ));
          }}
        </Query>
      </ul>
    </div>
  );
};

export default GodsList;
