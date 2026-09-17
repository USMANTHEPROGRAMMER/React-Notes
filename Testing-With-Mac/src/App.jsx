import React from "react";

const App = () => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob Lee" },
    { id: 5, name: "Charlie Brown" },
    { id: 6, name: "Dave Smith" },
    { id: 7, name: "Eve Brown" },
    { id: 8, name: "Frank Johnson" },
    { id: 9, name: "Grace Lee" },
    { id: 10, name: "Heidi Brown" },
  ];

  return (
    <div>
      {users.map((user, idx) => {
        console.log(user);
        return <h1 key={idx} className="text-3xl"><span>{user.id}</span>. {user.name}</h1>;
      })}
    </div>
  );
};

export default App;