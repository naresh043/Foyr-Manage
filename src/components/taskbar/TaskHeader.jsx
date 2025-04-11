/* TaskHeader/TaskHeader.jsx */
import React from 'react';
import './taskheader.css'

const TaskHeader = () => {
  return (
    <div className="task-header">
      <h1>Tasks</h1>
      <div className="task-actions">
        <button>Report Issue</button>
        <button>Use template</button>
        <button className="add-task">Add Task</button>
      </div>
    </div>
  );
};

export default TaskHeader;