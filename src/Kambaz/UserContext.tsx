// src/Kambaz/UserContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  name: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  dob: string;
  role: string;
  password: string; // Only used internally
}

interface UserContextType {
  user: User | null;
  signIn: (email: string, password: string) => boolean;
  signUp: (
    name: string,
    email: string,
    password: string,
    details: Omit<User, "email" | "name" | "password">
  ) => void;
  signOut: () => void;
  updateUser: (updates: Partial<Omit<User, "email" | "password">>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

let mockUsers: User[] = [];

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const signIn = (email: string, password: string): boolean => {
    const existingUser = mockUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (existingUser) {
      setUser(existingUser);
      return true;
    }
    return false;
  };

  const signUp = (
    name: string,
    email: string,
    password: string,
    details: Omit<User, "email" | "name" | "password">
  ) => {
    const newUser: User = {
      name,
      email,
      password,
      username: details.username,
      firstName: details.firstName,
      lastName: details.lastName,
      dob: details.dob,
      role: details.role,
    };
    mockUsers.push(newUser);
    setUser(newUser);
  };

  const signOut = () => {
    setUser(null);
  };

  const updateUser = (
    updates: Partial<Omit<User, "email" | "password">>
  ) => {
    if (!user) return;
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    mockUsers = mockUsers.map((u) =>
      u.email === user.email && u.password === user.password
        ? updatedUser
        : u
    );
  };

  return (
    <UserContext.Provider
      value={{ user, signIn, signUp, signOut, updateUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser(): UserContextType {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
