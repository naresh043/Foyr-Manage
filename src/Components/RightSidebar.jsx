import React from "react";
import "../styles/RightSidebar.css";
import MultiSelectDropdown from "./MultiSelectDropdown";
import TaskTable from "./TaskTable";
import {
  CaretDown,
  Equals,
  CaretDoubleUp,
  WarningOctagon,
  Funnel,
} from "phosphor-react";

const RightSidebar = () => {
  const statusOptions = [
    { label: "To-Do" },
    { label: "In-Progress" },
    { label: "Done" },
    { label: "Blocked" },
  ];

  const taskTypeOptions = [
    { label: "Task" },
    { label: "Milestone" },
    { label: "Issue" },
  ];

  //   const priorityOptions = [`Low`, `Medium`, "High", "SOS"];
  //   import { CaretDown, Equals, CaretDoubleUp, WarningOctagon } from "phosphor-react";

  const priorityOptions = [
    { label: "Low", icon: <CaretDown size={16} /> ,color: "green"},
    { label: "Medium", icon: <Equals size={16} /> ,color:"orange"},
    { label: "High", icon: <CaretDoubleUp size={16} /> ,color:"red" },
    { label: "SOS", icon: <WarningOctagon size={16} /> ,color:"lighgtred" },
  ];

  return (
    <div className="task-container">
      <div className="task-header">
        <h2>Tasks</h2>
        <div className="task-buttons">
          <button className="report-issue">Report Issue</button>
          <button className="use-template">Use template</button>
          <button className="add-task">Add Task</button>
        </div>
      </div>

      <div className="filters-section">
        <div className="icon-text">
          <Funnel size={20} />
          Filters
        </div>

        <div className="task-filters">
          <MultiSelectDropdown title="Status" options={statusOptions} />
          <MultiSelectDropdown title="Task Type" options={taskTypeOptions} />
          <MultiSelectDropdown title="Priority" options={priorityOptions} />
          <button>Assigned</button>
          <button>Created by</button>
          <button>Due on</button>
          <button>Show all tasks</button>
          <button>☰</button>
        </div>
      </div>

      <div className="task-table-header">
        <span>TASKS</span>
        <span>PROJECTS</span>
        <span>TASK TYPE</span>
        <span>DUE DATE</span>
        <span>PRIORITY</span>
        <span>ASSIGNEES</span>
      </div>

     <TaskTable/>

      <div className="new-task">New Task</div>
    </div>
  );
};

export default RightSidebar;
