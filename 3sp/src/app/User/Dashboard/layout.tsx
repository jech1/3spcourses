import React from "react";

// generic layout for testing
const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>
      <aside className="dashboard-sidebar">
        <nav>
          <ul>
            <li>
              <a href="/dashboard">Home</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <a href="/settings">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="dashboard-content">{children}</main>
      <footer className="dashboard-footer">
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  );
};

export default DashboardLayout;
