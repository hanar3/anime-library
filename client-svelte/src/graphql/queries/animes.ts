import getGQLString from "../../utils/getGQLString";
import { gql } from "apollo-boost";

const ANIMES_QUERY = gql`
  query listAnimes($page: Int!) {
    animes(input: { page: $page }) {
      id
      name
      englishName
      description
      japaneseName
    }
  }
`;

export default getGQLString(ANIMES_QUERY);
