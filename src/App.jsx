import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import {  useEffect } from "react";
function App() {
  return (
    <>
      <TaskForm />
      <TaskList />
    </>
  );
}
export default App;
