export interface IAuthResponse {
  user: {
    id: number;
    email: string;
    name: string;
  };
  accessToken: string;
}
