import React, { Suspense } from "react";
import Users from "../components/page";

const usersPromise = async () => {
  const res = await fetch("http://localhost:5000/users");
  return res.json();
};

const UsersPage = async () => {
  return (
    <div className="container mx-auto px-4">
      <h2>Users data</h2>
      <Suspense fallback={<h2>Loading...</h2>} >
      <Users usersPromise={usersPromise} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
