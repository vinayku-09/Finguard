function Register() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>FinGuard</h1>
        <p className="auth-subtitle">Create your account</p>
        <form className="auth-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Register</button>
        </form>
        <p className="auth-switch">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;