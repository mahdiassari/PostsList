import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { MyTableConfig } from "./MyTableConfig";
import Table from "../../Kit/Table";
import PostsActions from "../../Redux/Post/Actions";

const MyTable = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const postsState = useSelector((state) => state.Post);
  const pageHandler = (res) => {
    dispatch(
      PostsActions.handleTablePage({
        skip: res === 0 ? postsState.take : res + postsState.take,
        res,
      })
    );
  };
  const postDetailsPageHandler = (row)=>{
    history.push(`/mytable/posts/${row.id}`);
  }
  return (
    <Table
      noRecordMsg="There is no post"
      tblData={postsState.posts.slice(postsState.res, postsState.skip)}
      tblConfig={MyTableConfig()}
      onClickRow={(row) => {
        postDetailsPageHandler(row);
      }}
      showPaging={true}
      pageHandler={(res) => {
        pageHandler(res);
      }}
      skip={postsState.skip}
      take={postsState.take}
      count={postsState.posts.length}
    />
  );
};

export default MyTable;
