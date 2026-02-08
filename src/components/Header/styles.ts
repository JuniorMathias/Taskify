import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background: #4f46e5;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  input {
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    font-size: 14px;
    width: 200px;

    &:focus {
      outline: 2px solid #c7d2fe;
    }
  }
`;
