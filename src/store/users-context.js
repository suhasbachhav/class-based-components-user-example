import React, { useState } from 'react';

const UsersContext = React.createContext({
  users: [],
  setUsers: () => {},
});

export const UsersContextProvider = (props) => {
  const [users, setUsers] = useState([
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
  ]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContext;