import { useState } from 'react';
import styles from './TaskItem.module.css';

import { CheckIcon, TrashIcon } from '@heroicons/react/24/solid';
import { PencilSquareIcon } from '@heroicons/react/24/solid';

const TaskItem = ({ task }) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
  };

  return (
    <li className={styles.task}>
      <div className={styles['task-group']}>
        <input
          type='checkbox'
          className={styles.checkbox}
          checked={isChecked}
          name={task.name}
          id={task.id}
          onChange={handleCheckboxChange}
        />
        <label className={styles.label} htmlFor={task.id}>
          {task.name}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>
      <div className={styles['task-group']}>
        <button
          className='btn'
          aria-label={`Update ${task.name} Task`}
          //   onClick={}
        >
          <PencilSquareIcon width={24} height={24}></PencilSquareIcon>
        </button>
        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${task.name} Task`}
          //   onClick={}
        >
          <TrashIcon width={24} height={24}></TrashIcon>
        </button>
      </div>
    </li>
  );
};
export default TaskItem;