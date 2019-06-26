import { LoginResponse } from '../login/login-response';
import { JwtToken } from '../login/jwt-token';
// @ts-ignore
import * as jwt_decode from 'jwt-decode';

const auth = {
    logout: () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
    },
    storeSessionData: (data: LoginResponse) => {
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);

        const accessToken = localStorage.getItem('accessToken');
        const decodedAccessToken: JwtToken = jwt_decode(accessToken);
        const loggedInUser = {
            id: +decodedAccessToken.id,
            email: decodedAccessToken.email,
            firstName: decodedAccessToken.firstName,
            lastName: decodedAccessToken.lastName
        };
        localStorage.setItem('user',JSON.stringify(loggedInUser));

    }
}

export {auth}
