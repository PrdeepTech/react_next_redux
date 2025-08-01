'use client'; // Important: needed to use hooks in Next.js App Router

import { createContext, ReactNode, useContext, useState } from 'react';

type User = {
  name: string;
  role: string;
};

type UserContextType = {
  user: User;
  setUser: (user: User) => void;
};

// 1. Create Context
const UserContext = createContext<UserContextType | undefined>(undefined);

// 2. Create Provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({ name: 'dark', role: 'Admin' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 3. Create Custom Hook
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within a UserProvider');
  return context;
};
