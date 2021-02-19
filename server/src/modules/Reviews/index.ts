import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
} from "graphql";
import ReviewType, { ReviewListOrError, ReviewOrError } from "./ReviewType";
import {
  createReview,
  deleteReview,
  getReviews,
  getUserReviews,
} from "./ReviewLoader";

export const queries = {
  reviews: {
    type: GraphQLList(ReviewType),
    resolve: getReviews,
  },

  userReviews: {
    type: ReviewListOrError,
    resolve: getUserReviews,
  },
};

export const mutations = {
  createReview: {
    type: ReviewOrError,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: "ReviewCreateInput",
          fields: {
            anime: {
              type: GraphQLString,
            },
            user: {
              type: GraphQLInt,
            },
            rating: {
              type: GraphQLInt,
            },
          },
        }),
      },
    },
    resolve: createReview,
  },

  deleteReview: {
    type: ReviewOrError,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: "ReviewDeleteInput",
          fields: {
            reviewId: {
              type: GraphQLString,
            },
          },
        }),
      },
    },

    resolve: deleteReview,
  },
};
