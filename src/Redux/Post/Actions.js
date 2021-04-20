import types from "./Types";
import DelegateAction from "../ActionDelegator";

const PostActions = {
  getPosts: DelegateAction(types.GET_POSTS),
  handleTablePage: DelegateAction(types.HANDLE_TABLE_PAGE),
  getPostDetails: DelegateAction(types.GET_POST_DETAILS),
  getPostComments: DelegateAction(types.GET_POST_COMMENTS),
};

export default PostActions;
