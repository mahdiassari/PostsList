import styled from "styled-components";
import { Button } from "../../Kit/Button";

export const MaterialUiTablePageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  padding: 50px;
  overflow: auto;
  .tblCol {
    span {
      justify-content: flex-start;
    }
  }
`;

export const BackToHomeButton = styled(Button)`
  width: 200px;
  min-height: 3.5rem;
  margin-bottom: 20px;
`;
