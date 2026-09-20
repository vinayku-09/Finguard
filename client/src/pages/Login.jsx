function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>FinGuard</h1>
        <p className="auth-subtitle">Secure login to your account</p>
        <form className="auth-form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <p className="auth-switch">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
