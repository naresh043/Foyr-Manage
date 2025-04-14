// import React, { useState } from "react";
// import "../styles/Sidebar.css";
// import { House, ClipboardText, FileText, CaretDown, CaretUp } from "phosphor-react";
// import FoyrLogo from "../assets/4aae4a79e66e5983b4f1b420799f9ba4.png"; 

// const Sidebar = () => {
//   const [isTasksOpen, setIsTasksOpen] = useState(true); // toggle task dropdown

//   return (
//     <div className="sidebar">
//       <div className="top-section">
//         <div className="logo">
//           <img src={FoyrLogo} alt="Foyr Logo" className="logo-image" />
//         </div>
//         <div className="menu">
//           <div className="menu-item active">
//             <House size={20} />
//             <span>Projects</span>
//           </div>

//           {/* Tasks Dropdown */}
//           <div className="menu-item tasks-header" onClick={() => setIsTasksOpen(!isTasksOpen)}>
//             <ClipboardText size={20} />
//             <span>Tasks</span>
//             {isTasksOpen ? <CaretUp size={16} /> : <CaretDown size={16} />}
//           </div>

//           {isTasksOpen && (
//             <div className="tasks-dropdown">
//               <div className="submenu-item active">All Tasks</div>
//               <div className="submenu-item">Templates</div>
//             </div>
//           )}

//           <div className="menu-item">
//             <FileText size={20} />
//             <span>Documents</span>
//           </div>
//         </div>
//       </div>

//       <div className="bottom-section">
//         <div className="user-info">
//           <div className="user-initial">N</div>
//           <div className="user-details">
//             <div className="username">Naresh</div>
//             <div className="email">naresh732003@gmail.com</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import "../styles/Sidebar.css";
import {
  House,
  ClipboardText,
  FileText,
  CaretDown,
  CaretUp,
} from "phosphor-react";
import FoyrLogo from "../assets/4aae4a79e66e5983b4f1b420799f9ba4.png";

const Sidebar = () => {
  const [isTasksOpen, setIsTasksOpen] = useState(true);
  const [activeMain, setActiveMain] = useState("Projects"); // Tracks main section
  const [activeTaskItem, setActiveTaskItem] = useState("All Tasks"); // Tracks active task submenu

  return (
    <div className="sidebar">
      <div className="top-section">
        <div className="logo">
          <img src={FoyrLogo} alt="Foyr Logo" className="logo-image" />
        </div>

        <div className="menu">
          <div
            className={`menu-item ${activeMain === "Projects" ? "active" : ""}`}
            onClick={() => {
              setActiveMain("Projects");
              setIsTasksOpen(false);
            }}
          >
            <House size={20} />
            <span>Projects</span>
          </div>

          {/* Tasks Dropdown Header */}
          <div
            className={`menu-item ${activeMain === "Tasks" ? "active" : ""}`}
            onClick={() => {
              setIsTasksOpen(!isTasksOpen);
              setActiveMain("Tasks");
            }}
          >
            <ClipboardText size={20} />
            <span>Tasks</span>
            {isTasksOpen ? <CaretUp size={16} /> : <CaretDown size={16} />}
          </div>

          {/* Submenu Items */}
          {isTasksOpen && (
            <div className="tasks-dropdown">
              <div
                className={`submenu-item ${
                  activeTaskItem === "All Tasks" ? "active" : ""
                }`}
                onClick={() => setActiveTaskItem("All Tasks")}
              >
                All Tasks
              </div>
              <div
                className={`submenu-item ${
                  activeTaskItem === "Templates" ? "active" : ""
                }`}
                onClick={() => setActiveTaskItem("Templates")}
              >
                Templates
              </div>
            </div>
          )}

          <div
            className={`menu-item ${activeMain === "Documents" ? "active" : ""}`}
            onClick={() => {
              setActiveMain("Documents");
              setIsTasksOpen(false);
            }}
          >
            <FileText size={20} />
            <span>Documents</span>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <div className="user-info">
          <div className="user-initial">N</div>
          <div className="user-details">
            <div className="username">Naresh</div>
            <div className="email">naresh732003@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
