export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    accessExpiresIn: number,
    refreshExpiresIn: number
}
