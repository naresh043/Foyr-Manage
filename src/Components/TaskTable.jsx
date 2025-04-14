function TaskTable() {
  const taskData = [
    {
      id: 1,
      title: "Task Nssssss",
      dot: "🟡",
      subtaskCount: "3/3",
      project: "Text",
      taskType: "Task",
      dueDate: "Apr 16, 2025",
      priority: {
        label: "High",
        icon: "🔺",
        className: "high",
      },
      assignee: "N",
    },
    {
      id: 2,
      title: "Design Homepage",
      dot: "🟢",
      subtaskCount: "2/4",
      project: "Website Revamp",
      taskType: "Milestone",
      dueDate: "Apr 20, 2025",
      priority: {
        label: "Medium",
        icon: "🟡",
        className: "medium",
      },
      assignee: "A",
    },
    {
      id: 3,
      title: "Fix login bug",
      dot: "🔴",
      subtaskCount: "1/1",
      project: "Authentication",
      taskType: "Issue",
      dueDate: "Apr 15, 2025",
      priority: {
        label: "SOS",
        icon: "🚨",
        className: "sos",
      },
      assignee: "B",
    },
  ];

  return (
    <div>
      {taskData.map((task) => (
        <div key={task.id} className="task-row">
          <div className="task-title">
            <input type="checkbox" />
            <span className="task-dot">{task.dot}</span>
            <span className="task-name">{task.title}</span>
            <span className="subtask-count">{task.subtaskCount}</span>
          </div>
          <span>{task.project}</span>
          <span>{task.taskType}</span>
          <span>{task.dueDate}</span>
          <span className={`priority ${task.priority.className}`}>
            {task.priority.icon} {task.priority.label}
          </span>
          <span className="assignee">{task.assignee}</span>
        </div>
      ))}
    </div>
  );
}

export default TaskTable;
