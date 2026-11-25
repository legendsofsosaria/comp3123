"use client";

import { useEffect, useState } from "react";

import { getUsers } from "@/services/userService";

import UserCard from "./UserCard";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getUsers();

        setUsers(data);
      } catch (error) {
        setError("Unable to fetch users. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <Loading />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <div>

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-gray-900">
          All Users
        </h2>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
          {users.length} Users
        </span>

      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))}

      </div>
    </div>
  );
}