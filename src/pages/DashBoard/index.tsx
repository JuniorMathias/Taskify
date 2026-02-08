import { useState } from "react";
import { Column } from "../../components/Column";
import { TaskForm } from "../../components/TaskForm";
import { useTasks } from "../../hooks/useTasks";
import { Container, Board } from "./styles";
import { Overview } from "../../components/Overview";
import { COLUMNS } from "../../components/Constants/tasksStatus";
import { Header } from "../../components/Header";

  interface DashboardProps {
    dark: boolean;
    toggleTheme: () => void;
  }
export function Dashboard({ dark, toggleTheme }: DashboardProps) {
  const { tasks, addTask, updateStatus, deleteTask } = useTasks();
  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <Header 
        search={search}
        setSearch={setSearch}
        toggleTheme={toggleTheme}
        isDark={dark}
      />
      <Container>

        <TaskForm onAdd={addTask} />

        <Board>
          {COLUMNS.map(({ status, title }) => (
            <Column
              key={status}
              title={title}
              status={status}
              tasks={filteredTasks}
              onMove={updateStatus}
              onDelete={deleteTask}
            />
          ))}
          
          <Overview tasks={tasks} />
        </Board>
      </Container>
    </>
  );
}
