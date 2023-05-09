import TaskItem from './TaskItem';
import styles from './TaskList.module.css';
const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
  return (
    <ul className={styles.task}>
      {tasks
        .sort((first, second) => second.id - first.id)
        .map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
              enterEditMode={enterEditMode}
            />
          );
        })}
    </ul>
  );
};
export default TaskList;
