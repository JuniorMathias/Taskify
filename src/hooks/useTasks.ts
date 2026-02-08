import { useEffect, useState } from "react";
import type { Task } from "../types/Task";
import { fetchTasks } from "../services/taskService";

const STORAGE_KEY = "taskify_tasks";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const parsed = JSON.parse(stored);

    if (parsed.length > 0) {
      setTasks(parsed);
      setLoading(false);
      return;
    }
  }

  fetchTasks().then(data => {
    setTasks(data);
    setLoading(false);
  });
}, []);




  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title: string) {
    setTasks(prev => [
      ...prev,
      { id: Date.now(), title, status: "todo" }
    ]);
  }

  function deleteTask(id: number) {
    setTasks(prev => prev.filter(task => task.id !== id));
  }

  function updateStatus(id: number, status: Task["status"]) {
    setTasks(prev =>
      prev.map(t => t.id === id ? { ...t, status } : t)
    );
  }

  return { tasks, loading, addTask,deleteTask, updateStatus };
}
