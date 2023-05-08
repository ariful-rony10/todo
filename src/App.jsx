import { useState } from 'react';
import CustomForm from './components/CustomForm';

function App() {
  const [task, setTask] = useState([]);

  const addTask = (task) => {
    console.log(task);
    setTask((prevState) => [...prevState, task]);
  };

  return (
    <div className='container'>
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask} />
    </div>
  );
}

export default App;
