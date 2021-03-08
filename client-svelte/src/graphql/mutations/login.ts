import getGQLString from "../../utils/getGQLString";
import { gql } from "apollo-boost";

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    sessionCreate(input: { username: $username, password: $password }) {
      ... on Session {
        token
      }
      ... on Error {
        message
        code
      }
    }
  }
`;

export interface SessionData {
  token: string;
}

export interface ErrorData {
  message: string;
  code: number;
}

export default getGQLString(LOGIN_MUTATION);
