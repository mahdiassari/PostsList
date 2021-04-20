import React, { useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PostsActions from "../../Redux/Post/Actions";
import { Row } from "../../Kit/Row";
import {
  PostDetailsWrapper,
  PostDetailsContainer,
  BackToPostsButton,
  PostDetailTitle,
  Details,
  CommentsContainer,
  CommentsTitle,
  Comment,
} from "./styles";

const PostDetails = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const postState = useSelector((state) => state.Post);
  const {
    postDetails,
    postComments,
    detailsLoading,
    commentsLoading,
  } = postState;

  useEffect(() => {
    dispatch(PostsActions.getPostDetails(props.match.params.postId));
    dispatch(PostsActions.getPostComments(props.match.params.postId));
  }, []);

  return (
    <PostDetailsWrapper>
      {detailsLoading === false ? (
        <PostDetailsContainer>
          <BackToPostsButton
            onClick={() => history.push(`/${props.match.params.tableType}`)}
          >
            Back to Posts
          </BackToPostsButton>
          <PostDetailTitle>Details</PostDetailTitle>
          <Details>
            <Row className="row">
              <Row className="title">User Id :</Row>
              <Row>{postDetails.userId}</Row>
            </Row>
            <Row className="row">
              <Row className="title">Title :</Row>
              <Row>{postDetails.title}</Row>
            </Row>
            <Row className="row">
              <Row className="title">Body :</Row>
              <Row>{postDetails.body}</Row>
            </Row>
          </Details>
          <CommentsTitle>Comments</CommentsTitle>
          <CommentsContainer>
            {postComments.map((item, index) => {
              return (
                <Comment key={index}>
                  {commentsLoading === false ? (
                    <>
                      <Row className="row">
                        <Row className="title">Post Id :</Row>
                        <Row>{item.postId}</Row>
                      </Row>
                      <Row className="row">
                        <Row className="title">Name :</Row>
                        <Row>{item.name}</Row>
                      </Row>
                      <Row className="row">
                        <Row className="title">Email :</Row>
                        <Row>{item.email}</Row>
                      </Row>
                      <Row className="row">
                        <Row className="title">Body :</Row>
                        <Row>{item.body}</Row>
                      </Row>
                    </>
                  ) : (
                    <Row>Loading ...</Row>
                  )}
                </Comment>
              );
            })}
          </CommentsContainer>
        </PostDetailsContainer>
      ) : (
        <Row>Loading ...</Row>
      )}
    </PostDetailsWrapper>
  );
};

export default withRouter(PostDetails);
