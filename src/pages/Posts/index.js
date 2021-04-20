import React from "react";
import { useHistory } from "react-router-dom";
import {
  PostsWrapper,
  PostsContainer,
  Description,
  ActionContainer,
  StyledButton,
} from "./styles";

const Posts = () => {
  const history = useHistory();

  const pageHandler = (link) => {
    history.push(link);
  };

  return (
    <PostsWrapper>
      <PostsContainer>
        <Description>Choose Table to show posts</Description>
        <ActionContainer>
          <StyledButton onClick={() => pageHandler("/mytable")}>
            My Table
          </StyledButton>

          <StyledButton onClick={() => pageHandler("/materialuitable")}>
            Material Ui Table
          </StyledButton>
        </ActionContainer>
      </PostsContainer>
    </PostsWrapper>
  );
};

export default Posts;
