import React from "react";

const UsersPage = async () => {
  const res = await fetch('http://localhost:5000/users');
  const users = await res.json();
  return (
    <div className="container mx-auto px-4">
      <h2>Users data: {users.length}</h2>
    </div>
  );
};

export default UsersPage;
