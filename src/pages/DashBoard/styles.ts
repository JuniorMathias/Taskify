import styled from "styled-components";

export const Container = styled.div`
  padding: 30px 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Board = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  

  @media (max-width: 768px) {
    gap: 12px;
    margin-top: 20px;
    justify-content: center;
    flex-wrap: wrap; 
  }
`;
