import React from 'react';
import { REGISTER_USER } from '../graphql/mutations';
import { Mutation } from 'react-apollo';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  updateCache(client, { data }) {
    client.writeData({
      data: { isLoggedIn: data.register.isLoggedIn }
    });
  }

render() {
    return (
      <Mutation
        mutation={REGISTER_USER}
        onCompleted={data => {
          console.log(data);
          const { token } = data.register;
          localStorage.setItem('auth-token', token);
        }}
        update={(client, data) => this.updateCache(client, data)}
      >
        {registerUser => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                registerUser({
                  variables: {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password
                  }
                });
              }}
            >
              <input
                value={this.state.name}
                onChange={this.update('name')}
                placeholder='Name'
              />
              <input
                value={this.state.email}
                onChange={this.update('email')}
                placeholder='Email'
              />
              <input
                value={this.state.password}
                onChange={this.update('password')}
                type='password'
                placeholder='Password'
              />
              <button type='submit'>Register</button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}

export default Register;
