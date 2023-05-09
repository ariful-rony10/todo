import { useState } from 'react';
import CustomForm from './components/CustomForm';
import TaskList from './components/TaskList';
import EditForm from './components/EditForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addTask = (task) => {
    console.log(task);
    setTasks((prevState) => [...prevState, task]);
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };
  const toggleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };
  const updateTask = (task) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );
    // TODO: close the edit mode
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditing(false);
    // TODO: previous state focus
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    // TODO: set focus back to original
  };

  return (
    <div className='container'>
      <header>
        <h1>My Task List</h1>
      </header>
      {isEditing && (
        <EditForm editedTask={editedTask} updateTask={updateTask} />
      )}
      <CustomForm addTask={addTask} />
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  );
}

export default App;
