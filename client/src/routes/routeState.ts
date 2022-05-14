export interface Route {
  path: string;
  key: string;
  exact: boolean;
  component: any; // need to change this to something concrete TODO
}
