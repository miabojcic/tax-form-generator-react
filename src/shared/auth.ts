import { LoginResponse } from '../login/login-response';
import { JwtToken } from '../login/jwt-token';
// @ts-ignore
import * as jwt_decode from 'jwt-decode';
import { User } from '../login/user';

const auth = {
  accessToken: () => localStorage.getItem('accessToken'),
  refreshToken: () => localStorage.getItem('refreshToken'),
  logout: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  },
  decodeToken: (jwtToken: string): User => {
    const decodedToken: JwtToken = jwt_decode(jwtToken);
    return {
      id: +decodedToken.id,
      email: decodedToken.email,
      firstName: decodedToken.firstName,
      lastName: decodedToken.lastName
    };
  },
  storeSessionData: (data: LoginResponse, user: User) => {
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    localStorage.setItem('user', JSON.stringify(user));
  }
};

export { auth };
