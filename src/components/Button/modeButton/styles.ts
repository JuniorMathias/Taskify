import styled from "styled-components";

export const ModeBtn = styled.button`
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;
