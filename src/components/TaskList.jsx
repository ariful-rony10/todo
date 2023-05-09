import TaskItem from './TaskItem';
import styles from './TaskList.module.css';
const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul className={styles.task}>
      {tasks
        .sort((first, second) => second.id - first.id)
        .map((task) => {
          return <TaskItem key={task.id} task={task} deleteTask={deleteTask} />;
        })}
    </ul>
  );
};
export default TaskList;
