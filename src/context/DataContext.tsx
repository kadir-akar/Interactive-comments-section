import React from "react";
import { createContext } from "react";
import Data from "../../data.json";

export const UserContext = createContext(Data);

interface Props {
  children: React.ReactNode;
}

const DataContext: React.FC<Props> = ({ children }) => {
  return <UserContext.Provider value={Data}>{children}</UserContext.Provider>;
};

export default DataContext;
