import React, { useState } from "react";
import "./multi.css";

const users = [
  { username: "admin", password: "123", role: "admin" },
  { username: "c", password: "123", role: "candidate", profile: { name: "John Doe", email: "john@example.com", skills: "React, Node.js" } },
];

const App = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const foundUser = users.find((u) => u.username === username && u.password === password);
    if (foundUser) setUser(foundUser);
    else alert("Invalid credentials");
  };

  const handleLogout = () => setUser(null);

  if (user) {
    return user.role === "admin" ? (
      <AdminPortal onLogout={handleLogout} />
    ) : (
      <CandidatePortal user={user} onLogout={handleLogout} />
    );
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <button onClick={handleLogin} className="login-btn">Login</button>
    </div>
  );
};

const AdminPortal = ({ onLogout }) => (
  <div className="portal-container">
    <h2>Admin Portal</h2>
    <button onClick={onLogout} className="logout-btn">Logout</button>
  </div>
);

const CandidatePortal = ({ user, onLogout }) => {
  const [profile, setProfile] = useState(user.profile);
  const [editing, setEditing] = useState(false);

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="portal-container">
      <h2>Candidate Portal</h2>
      {editing ? (
        <div className="profile-edit">
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleProfileChange}
            className="profile-input"
          />
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleProfileChange}
            className="profile-input"
          />
          <input
            type="text"
            name="skills"
            value={profile.skills}
            onChange={handleProfileChange}
            className="profile-input"
          />
          <button onClick={() => setEditing(false)} className="profile-btn">Save</button>
        </div>
      ) : (
        <div className="profile-view">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Skills:</strong> {profile.skills}</p>
          <button onClick={() => setEditing(true)} className="profile-btn">Edit Profile</button>
        </div>
      )}
      <button onClick={onLogout} className="logout-btn">Logout</button>
    </div>
  );
};

export default App;
