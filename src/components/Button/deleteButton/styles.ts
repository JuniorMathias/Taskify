import styled from "styled-components";

export const DeleteBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.text};
  padding: 4px;
  border-radius: 6px;

  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: rgba(255, 0, 0, 0.1);
    color: #ef4444; /* vermelho */
  }
`;
