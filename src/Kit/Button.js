import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  background-color: ${(props) => props.theme.primary};
  color: #212121;
  font-family: irs;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

export const Text = styled.div`
  margin-right: 0.625rem;
`;

const StyledButton = (props) => {
  return (
    <Button className="buttonContainer">
      <Text className="button_Text">
        {props.children ? props.children : "ادامه"}
      </Text>
    </Button>
  );
};

export default StyledButton;
