// src/Kambaz/UserContext.tsx
import { createContext, useContext, useState, useEffect } from "react";

type User = {
  name: string;
  email: string;
};

type UserContextType = {
  user: User | null;
  signIn: (email: string, password: string) => boolean;
  signUp: (name: string, email: string, password: string) => void;
  signOut: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within UserProvider");
  return context;
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("currentUser");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const signUp = (name: string, email: string, password: string) => {
    localStorage.setItem(
      "user:" + email,
      JSON.stringify({ name, email, password })
    );
    const newUser = { name, email };
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setUser(newUser);
  };

  const signIn = (email: string, password: string) => {
    const userData = localStorage.getItem("user:" + email);
    if (!userData) return false;
    const parsed = JSON.parse(userData);
    if (parsed.password !== password) return false;
    const currentUser = { name: parsed.name, email: parsed.email };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    setUser(currentUser);
    return true;
  };

  const signOut = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </UserContext.Provider>
  );
}
