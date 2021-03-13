import getGQLString from "../../utils/getGQLString";
import { gql } from "apollo-boost";

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    sessionCreate(input: { username: $username, password: $password }) {
      token
    }
  }
`;

export interface SessionData {
  token: string;
}

export default getGQLString(LOGIN_MUTATION);
