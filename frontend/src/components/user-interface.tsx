import React, { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "./card-component";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserInterfaceProps {
  backendName: string;
}

const UserInterface = ({ backendName }: UserInterfaceProps) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/${backendName}/users`);
        setUsers(response.data.reverse());
      } catch (error) {
        console.log(`Error fetching data`, error);
      }
    };

    fetchData();
  }, [backendName, apiUrl]);

  return (
    <div className="border flex gap-4 flex-wrap p-6 bg-orange-500 border-red-500 min-h-screen">
      {users.map((user) => (
        <CardComponent
          key={user.id}
          name={user.name}
          email={user.email}
          id={user.id}
        />
      ))}
    </div>
  );
};

export default UserInterface;
