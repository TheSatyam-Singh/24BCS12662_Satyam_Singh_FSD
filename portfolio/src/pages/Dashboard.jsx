import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <main>
      <h1>Dashboard</h1>
      <nav aria-label="Dashboard navigation">
        <Link to="profile">Profile</Link>{" "}
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </main>
  );
}

export default Dashboard;
