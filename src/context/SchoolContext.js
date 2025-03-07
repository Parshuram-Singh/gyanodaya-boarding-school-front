import { createContext, useState } from "react";

export const SchoolContext = createContext();

const SchoolProvider = ({ children }) => {
  const [schoolName] = useState("ABC Primary School");

  return (
    <SchoolContext.Provider value={{ schoolName }}>
      {children}
    </SchoolContext.Provider>
  );
};

export default SchoolProvider;
