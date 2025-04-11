/* TaskRow/TaskRow.jsx */
import React from 'react';
import './TaskRow.css';

const TaskRow = () => {
  return (
    <div className="task-row">
      <span>Task Nsssssss</span>
      <span>Text</span>
      <span>Task</span>
      <span>Apr 16, 2025</span>
      <span className="priority high">High</span>
      <span className="assignee">N</span>
    </div>
  );
};

export default TaskRow;