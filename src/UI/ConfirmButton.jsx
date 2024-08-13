import styled from "styled-components";

const ConfirmButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  background-color: var(--red);
  color: #fff;
  font-weight: 600;
  border-radius: 20px;
  border: none;
  outline: none;
  font-size: 16px;
  cursor: pointer;
  transition: all 150ms linear;
  &:hover {
    background-color: var(--red-500);
  }
`;

export default ConfirmButton;
