import { NavLink, Outlet, useNavigate } from "react-router";
import { BadgeCheck, FileText, LayoutDashboard, LogOut, Mail, Sparkles } from "lucide-react";
import "../home.scss";
import useAuth from "../../auth/hooks/useAuth";

function getInitials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "U";
}

export default function InterviewLayout() {
  const { user, handleLogout, loading } = useAuth();
  const navigate = useNavigate();
  const profileName = user?.name || "User";

  const onLogout = async () => {
    const success = await handleLogout();
    if (success) {
      navigate("/login");
    }
  };

  return (
    <div className="app-shell">
      <aside className="shell-sidebar">
        <div className="brand-block sidebar-flyout-anchor">
          <div className="brand-icon">
            <Sparkles size={18} />
          </div>
          <div className="sidebar-flyout">
            <p>Interview AI</p>
            <span>Preparation workspace</span>
          </div>
        </div>

        <nav className="shell-nav">
          <NavLink to="/" end className="shell-nav-link">
            <LayoutDashboard size={18} />
            <span className="sidebar-flyout">Generate Report</span>
          </NavLink>
          <NavLink to="/reports" className="shell-nav-link">
            <FileText size={18} />
            <span className="sidebar-flyout">My Reports</span>
          </NavLink>
        </nav>

        <div className="shell-user-card">
          <div className="user-badge-wrap">
            <button
              type="button"
              className="user-status-pill user-status-pill-circle"
              aria-label="Profile details"
            >
              <div className="user-avatar">{getInitials(user?.name)}</div>
            </button>

            <div className="user-hover-card">
              <div className="user-detail-item">
                <BadgeCheck size={15} />
                <span>{profileName}</span>
              </div>
              <div className="user-detail-item">
                <Mail size={15} />
                <span>{user?.email || "Signed in"}</span>
              </div>
              <div className="user-detail-item">
                <Sparkles size={15} />
                <span>Interview prep workspace ready</span>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="logout-button sidebar-flyout-anchor"
          onClick={onLogout}
          disabled={loading}
          aria-label="Logout"
        >
          <LogOut size={16} />
          <span className="sidebar-flyout">
            {loading ? "Signing out..." : "Logout"}
          </span>
        </button>
      </aside>

      <section className="shell-content">
        <Outlet />
      </section>
    </div>
  );
}
