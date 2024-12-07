import React, { createContext, useState, useEffect, useContext } from "react";
import { getUser } from "../api";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

// UserProvider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await getUser(1);
          setUser(response.data);


      } catch (err) {
        console.error("Error fetching user:", err);
        setError(err.message);
      } finally {

        setLoading(false);
      }
    };

      fetchUser();

  }, []);
  
  return (
    <UserContext.Provider value={{ user, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
