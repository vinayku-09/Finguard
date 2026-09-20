function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="card-grid">
        <div className="stat-card">
          <p className="stat-label">Total Transactions</p>
          <p className="stat-value">0</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Blocked</p>
          <p className="stat-value">0</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">High Risk Alerts</p>
          <p className="stat-value">0</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
