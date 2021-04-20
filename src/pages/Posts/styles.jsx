import styled from "styled-components";
import { Button } from "../../Kit/Button";
import { Col } from "../../Kit/Column";
import { Row } from "../../Kit/Row";

export const PostsWrapper = styled(Row)`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const PostsContainer = styled(Col)`
  width: 90%;
  height: 95%;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 20px;
`;

export const Description = styled(Row)`
  margin-bottom: 20px;
`;

export const ActionContainer = styled(Row)`
`;

export const StyledButton = styled(Button)`
  width: 200px;
  margin: 0 20px;
  background-color: ${(props) => props.theme.primary};
`;
