import styled from "styled-components";
import { Row } from "../../Kit/Row";
import { Col } from "../../Kit/Column";
import { Button } from "../../Kit/Button";

export const PostDetailsWrapper = styled(Row)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  padding: 50px;
  overflow: auto;
`;

export const PostDetailsContainer = styled(Col)`
  width: 80%;
  .title {
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
  }
`;

export const BackToPostsButton = styled(Button)`
  width: 200px;
  margin-bottom: 20px;
`;

export const PostDetailTitle = styled(Row)`
  font-size: 24px;
  font-weight: 600;
`;

export const Details = styled(Col)`
  margin-bottom: 20px;
  .row {
    margin: 10px 0;
  }
`;

export const CommentsContainer = styled(Col)`
  justify-content: flex-start;
  max-height: 480px;
  overflow: auto;
  .row {
    margin: 15px 0;
  }
`;

export const CommentsTitle = styled(Col)`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Comment = styled(Col)`
  background-color: white;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
`;
