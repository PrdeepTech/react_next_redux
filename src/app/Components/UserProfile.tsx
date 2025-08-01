'use client';

import React from 'react';
import { useUser } from '../contexts/UserContext';

const UserProfile: React.FC = () => {
  const { user } = useUser();

  return (
    <div>
      <p>Hello, {user.name}!</p>
      {/* <p>Role: {user.role}</p> */}
    </div>
  );
};

export default UserProfile;
