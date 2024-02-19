// import React from 'react';

// const RoleContext = React.createContext();

// export default RoleContext;

import React, { createContext, useState, useContext } from "react";

const RoleContext = createContext();

function RoleProvider({ children }) {
  const [role, setRole] = useState(null);

  // 값과 함께 설정 함수도 전달
  const value = { role, setRole };

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
}

export default RoleProvider;

// Custom Hookk
// export default function useRole() {
//   const context = useContext(RoleContext);
//   if (context === undefined) {
//     throw new Error("useRole must be used within a RoleProvider");
//   }
//   return context;
// }
