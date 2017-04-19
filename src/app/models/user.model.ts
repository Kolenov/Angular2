export interface UserInfo {
  id: number;
  login: string;
  name?: {
    first: string,
    last: string
  };
  password: string;
  fakeToken: string;
}
