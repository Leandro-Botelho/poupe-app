export interface IAuthResponse {
  user: {
    id: number;
    email: string;
    name: string;
    accountId: number;
  };
  accessToken: string;
}
