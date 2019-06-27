import React, { createContext } from 'react';

let initialState = {
  isLoggedIn: false, //(null as any as boolean),
  updateState: (x: boolean, callback?: () => void) => {}
};

//initial context
export const AuthContext = createContext(initialState);

//exportable consumer that can be injected into components
export const AuthConsumer = AuthContext.Consumer;

//provider
export class AuthProvider extends React.Component {
  state = {
    isLoggedIn: false,
    updateState: (state: boolean, callback?: () => void) => {
      this.setState({ isLoggedIn: state }, callback);
    }
  };

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
