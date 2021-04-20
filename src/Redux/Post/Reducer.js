import types from "./Types";

const initState = {
  skip: 6,
  take: 6,
  res: 0,
  posts: [],
  postDetails: [],
  postComments: [],
  loading: true,
  detailsLoading: true,
  commentsLoading: true,
};

export default function Reducer(state = initState, action) {
  switch (action.type) {
    case types.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.data,
        loading: false,
      };
    case types.GET_POST_DETAILS:
      return {
        ...state,
        postDetails: [],
        detailsLoading: true,
      };
    case types.GET_POST_DETAILS_SUCCESS:
      return {
        ...state,
        postDetails: action.data,
        detailsLoading: false,
      };
    case types.GET_POST_COMMENTS:
      return {
        ...state,
        postComments: [],
        commentsLoading: true,
      };
    case types.GET_POST_COMMENTS_SUCCESS:
      return {
        ...state,
        postComments: action.data,
        commentsLoading: false,
      };
    case types.HANDLE_TABLE_PAGE:
      return {
        ...state,
        skip: action.data.skip,
        res: action.data.res,
      };
    default:
      return state;
  }
}
