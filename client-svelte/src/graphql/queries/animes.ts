import getGQLString from "../../utils/getGQLString";
import { gql } from "apollo-boost";

const ANIMES_QUERY = gql`
  query listAnimes($page: Int!) {
    animes(input: { page: $page, limit: 10 }) {
      items {
        id
        name
        englishName
        description
        japaneseName
      }
      total
      hasMore
    }
  }
`;

export default getGQLString(ANIMES_QUERY);
