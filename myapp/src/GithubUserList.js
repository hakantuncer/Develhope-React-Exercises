import React, { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList() {
  const [usernames, setUsernames] = useState([]);
  const [newUsername, setNewUsername] = useState("");

  const handleAddUser = () => {
    setUsernames([...usernames, newUsername]);
    setNewUsername("");
  };

  return (
    <div>
      <input
        type="text"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
      {usernames.map((username) => (
        <GithubUser key={username} username={username} />
      ))}
    </div>
  );
}
