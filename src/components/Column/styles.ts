import styled from "styled-components";
import type { Task } from "../../types/Task";
import { statusColors } from "../../styles/statusColors";

interface TitleProps {
  status: Task["status"];
}

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 16px;
  width: 280px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
`;

export const Title = styled.h3<TitleProps>`
  margin-bottom: 12px;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 16px;

  background: ${({ status }) => statusColors[status]};
`;
