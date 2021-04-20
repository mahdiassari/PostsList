import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PostsActions from "../../Redux/Post/Actions";
import MaterialUiTable from "../../components/MaterialUiTable/MaterialUiTable";
import { MaterialUiTablePageWrapper, BackToHomeButton } from "./styles";

const MaterialUiTablePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const postState = useSelector((state) => state.Post);

  useEffect(() => {
    dispatch(PostsActions.getPosts());
  }, []);

  return (
    <MaterialUiTablePageWrapper>
      <BackToHomeButton onClick={() => history.push("/")}>
        Back to Home
      </BackToHomeButton>
      <MaterialUiTable postsState={postState} />
    </MaterialUiTablePageWrapper>
  );
};

export default MaterialUiTablePage;
