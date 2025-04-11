/* TaskTable/TaskTable.jsx */
import React from 'react';
import './TaskTable.css';
import TaskRow from '../TaskRow/TaskRow';

const TaskTable = () => {
  return (
    <div className="task-table">
      <div className="task-table-header">
        <span>Tasks</span>
        <span>Projects</span>
        <span>Task Type</span>
        <span>Due Date</span>
        <span>Priority</span>
        <span>Assignees</span>
      </div>
      <TaskRow />
    </div>
  );
};

export default TaskTable;