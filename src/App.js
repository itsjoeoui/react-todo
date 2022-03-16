import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    { id: "1", text: "XDD", day: "Feb 5th at 2:30pm", reminder: false },
    { id: "2", text: "BRUH", day: "Feb 15th at 4:30pm", reminder: true },
    { id: "3", text: "HIHIHIHA", day: "Feb 25th at 6:30pm", reminder: false },
  ]);

  const addTask = (task) => {
    const id =
      tasks.length !== 0 ? parseInt(tasks[tasks.length - 1].id) + 1 : 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    console.log(`[${id}] Task Added`);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log(`[${id}] Task Deleted`);
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log(`[${id}] Reminder Toggled`);
  };

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks!"
      )}
    </div>
  );
}

export default App;
