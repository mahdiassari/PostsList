import styled from "styled-components";
// import RightSignIcon from "../../Icon/RightSignIcon";
import { Col } from "../../Column";

export const StyledPaginationList = styled(Col)`
  width: 100%;
  margin-top: 1.25rem;
  flex-direction: row;
  position: absolute;
  bottom: -0.625rem;
  display: ${(props) => props.show === false && "none"};
  height: 2.5rem;
  svg {
    fill: #666666;
    width: 0.9375rem;
    height: 0.9375rem;
    transform: rotate(270deg);
  }
`;
export const StyledPagination = styled(Col)`
  text-align: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 0.875rem;
  margin-right: 0.3125rem;
  background-color: ${(props) =>
    props.selected === true
      ? props.theme.primary
      : props.disable === true
      ? props.theme.lightGray
      : "white"};
  color: ${(props) =>
    props.selected === true
      ? "white"
      : props.disable === true
      ? props.theme.greenBlue
      : "#333333"};
  cursor: pointer;
  :hover {
    background-color: ${(props) =>
      props.hoverable === true && props.theme.primary};
    color: ${(props) => props.hoverable === true && "white"};
    transition: all 300ms;
  }
`;
export const StyledArrow = styled(Col)``;
