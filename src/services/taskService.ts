import type { Task } from "../types/Task";

export async function fetchTasks(): Promise<Task[]> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=15"
  );

  const data = await response.json();

  return data.map((item: any) => ({
    id: item.id,
    title: item.title,
    status: item.completed ? "completed" : "todo"
  }));
}
