// StudentBookContext.js
import React, { useState, createContext } from 'react';

const StudentBookContext = createContext(null);

export const StudentBookProvider = ({ children }) => {
  const [studentBookText, setStudentBookText] = useState('');

  return (
    <StudentBookContext.Provider value={{ studentBookText, setStudentBookText }}>
      {children}
    </StudentBookContext.Provider>
  );
};

export default StudentBookContext;
