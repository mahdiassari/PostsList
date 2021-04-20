import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PostsActions from "../../Redux/Post/Actions";
import MyTable from "../../components/MyTable/MyTable";
import { MyTablePageWrapper, BackToHomeButton } from "./styles";

const MyTablePage = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const postState = useSelector((state) => state.Post);

  useEffect(() => {
    dispatch(PostsActions.getPosts());
  }, []);
  return (
    <MyTablePageWrapper>
      <BackToHomeButton onClick={() => history.push("/")}>
        Back to Home
      </BackToHomeButton>
      <MyTable postsState={postState} />
    </MyTablePageWrapper>
  );
};

export default MyTablePage;
