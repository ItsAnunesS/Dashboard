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
  interface PageInterface {
    id: string
    url: string
    title: string
  }
}

export { UserType, CredentialsType, PageInterface };
