import TaskItem from './TaskItem';
import styles from './TaskList.module.css';
const TaskList = ({ tasks }) => {
  return (
    <ul className={styles.task}>
      {tasks
        .sort((first, second) => second.id - first.id)
        .map((task) => {
          return <TaskItem key={task.id} task={task} />;
        })}
    </ul>
  );
};
export default TaskList;
