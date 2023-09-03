import React from "react";

const Sidebar = () => {
  return (
    <section className="sidebar-section">
      <div className="sidebar-header">
        <div className="sidebar-header-content">
          <h2>Eqaim</h2>
          <p>Feedback Board</p>
        </div>
      </div>
      <div className="sidebar-header-tabs">
        <ul className="sidebar-header-tabs-list">
          <li className="active">
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">UI</a>
          </li>
          <li>
            <a href="#">UX</a>
          </li>
          <li>
            <a href="#">Enhancement</a>
          </li>
          <li>
            <a href="#">Bug</a>
          </li>
          <li>
            <a href="#">Featur</a>
          </li>
        </ul>
      </div>
      <div className="sidebar-map-section sidebar-header-tabs">
        <div className="sidebar-rodemap-box-ng">
          <div className="sidebar-rodemap-content">
            <h3>Roadmap</h3>
            <a className="sidebar-view" href="#">
              View
            </a>
          </div>
          <div className="sidebar-rodemap-list">
            <ul className="sidebar-rodemap-box-list">
              <li>
                <a href="#" className="sidebar-list-content">
                  Planned
                </a>
                <span>1</span>
              </li>
              <li>
                <a href="#" className="sidebar-list-content">
                  In-progess
                </a>
                <span>2</span>
              </li>
              <li>
                <a href="#" className="sidebar-list-content">
                  Live
                </a>
                <span>3</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
