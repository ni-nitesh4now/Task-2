import "./css/menu.css";
import React, { useState } from "react";
import {
  RiHome4Line,
  RiTeamLine,
  RiBookOpenLine,
  RiNotification2Line,
  RiCalendar2Line,
  RiBook2Line,
  RiTicketLine,
  RiCalendarCheckLine,
  RiPresentationFill,
  RiChat4Line,
} from "react-icons/ri";
import { AiOutlineUser, AiOutlineTeam } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa/";
import { Md360 } from "react-icons/md";

const Sidebar=()=> {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="collapse">School Pen</div>
        <div className="sidebar-content">
          <div className="menu">
            <a>
              <RiHome4Line /> Dashboard
            </a>
            <a onClick={handleCollapsedChange}>
              <RiTeamLine /> School Management
            </a>
            {collapsed ? (
              <div className="sub-menu">
                <a>
                  <AiOutlineTeam /> Students
                </a>
                <a>
                  <AiOutlineUser /> Teachers
                </a>
                <a>
                  <RiPresentationFill /> Classes
                </a>
                <a>
                  <RiBookOpenLine /> Syllabus
                </a>
                <a>
                  <RiCalendarCheckLine /> Attendance
                </a>
                <a>
                  <RiCalendar2Line /> Events
                </a>
                <a>
                  <RiNotification2Line /> Notice Board
                </a>
              </div>
            ) : (
              <></>
            )}
            <a>
              <RiHome4Line /> Career Counselling
            </a>
            <a>
              <Md360 /> 360 Evaluation
            </a>
            <a>
              <FaRupeeSign /> Fee Portal
            </a>
            <a>
              <RiBook2Line /> Courses
            </a>
            <a>
              <RiTicketLine /> Admission
            </a>
            <a>
              <RiChat4Line /> Chat
            </a>
            <a>
              <RiNotification2Line /> Notifications
            </a>
          </div>
          <div className="upgrade-section">
            <div className="avatar">
              <img
                src="https://imgs.search.brave.com/DBTfEjdgXOJvsr4rXmo71XLziZfRxihB9ExVwv5pjik/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8wMC81MS93/b21hbi1ob2xkaW5n/LWEtZG9jdW1lbnQt/cmVhZGluZy10aGUt/dGVybXMtdmVjdG9y/LTQ3MTQwMDUxLmpw/Zw"
                alt="Avatar"
              />
            </div>
            <div className="upgrade-button">
              Upgrade to <strong>Premium Plan</strong> to unlock more festures
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
