import getGQLString from "../../utils/getGQLString";
import { gql } from "apollo-boost";

export const PROFILE_QUERY = getGQLString(gql`
  query {
    profile {
      ... on Error {
        message
        code
      }

      ... on UserType {
        id
        email
        username
        statusMessage
      }
    }
  }
`);
