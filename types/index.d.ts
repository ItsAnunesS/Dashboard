export { UserType };

declare global {
  type UserType = {
    id: number;
    name: string;
    email: string;
  };
  type CredentialsType = {
    email: string;
    password: string;
  };
}
