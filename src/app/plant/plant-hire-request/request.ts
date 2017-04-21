export interface Request {
  name: string;
  account: {
    email: string;
    confirm: string;
  };
}
