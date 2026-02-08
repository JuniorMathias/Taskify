import styled from "styled-components";
import type { Task } from "../../types/Task";
import { statusColors } from "../../styles/statusColors";

interface TitleProps {
  status: Task["status"];
}

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 16px;
  width: 400px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);

  display: flex;
  flex-direction: column;  
  align-items: center;     
  gap: 16px;   
`;

export const Title = styled.h3<TitleProps>`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 14px;
  font-weight: 600;
  text-align: center;

  background: ${({ status }) => statusColors[status]};

  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Total = styled.div`
  font-size: 16px;
  background: ${({ theme }) => theme.primary};
  padding: 12px;
  width: 100%;
  color: #f9fafb;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const CirclesWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;        
`;