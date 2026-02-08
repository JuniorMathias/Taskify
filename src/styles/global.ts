import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import type { Task } from "../types/Task";

interface TitleProps {
  status: Task["status"];
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, Arial, sans-serif;
  }

  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }

  button {
    background: ${({ theme }) => theme.primary};
    color: white;
    border-radius: 5px;
    border: none;
    padding: 4px 8px;
    cursor: pointer;
  }
`;

export const Title = styled.h3<TitleProps>`

  background: ${({ status }) => {
    switch (status) {
      case "todo":
        return "yellow";
      case "progress":
        return "#60a5fa";
      case "completed":
        return "#4ade80"; 
      default:
        return "#e5e7eb";
    }
  }};
`;