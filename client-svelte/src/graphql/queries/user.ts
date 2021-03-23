import getGQLString from "../../utils/getGQLString";
import { gql } from "apollo-boost";

export const PROFILE_QUERY = getGQLString(gql`
  query {
    profile {
        id
        email
        username
        statusMessage
    }
  }
`);
