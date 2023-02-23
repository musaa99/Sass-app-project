import { createContext } from "react";

export const AllDepartments = createContext({
  allDepts: "",
  setAllDepts: () => {},
});

export const AllPositions = createContext({
  allPosits: "",
  setAllPosits: () => {},
});
