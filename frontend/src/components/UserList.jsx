import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({ age: '', height: ''});

  useEffect(() => {
    const fetchUsers = async () => {
       const response = await fetch('/api/users?age=${filters.age}&height=${filters.height}');
       const data = await response.json();
       setUsers(data);

    };
    fetchUsers();
  }, [filters]);

  return (
    <div>
      <input
        type="number"
        placeholder="Age"
        value={filters.age}
        onChange={(e) => setFilters({ ...filters, age: e.target.value })}
       />
       <input
         type="number"
         placeholder="height"
         value={filters.height}
         onChange={(e) => setFilters({ ...filters, height: e.target.value })}
       />
       <ul>
        {users.map(user => (
          <li key={user.id}>{user.username} - c{user.age} - {user.height}</li>

        ))}
       </ul>
    </div>
  );
};

export default UserList