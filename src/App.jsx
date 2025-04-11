// App.jsx
// import React from 'react';
// import './App.css';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import TaskHeader from './components/taskbar/TaskHeader';
import TaskTable from './components/tasktable/TaskTable';

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <TaskHeader />
        <TaskTable />
      </div>
    </div>
  );
};

export default App;