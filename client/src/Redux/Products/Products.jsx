import React, { createContext, useReducer, useContext } from "react";
import Reducer from "../Reducer/Reducer";

const initialState = {
    token: localStorage.getItem("token") || null ,
};

const Context = createContext();

const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  
  

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};
  
const useUsersContext = () => {
    const context = useContext(Context);
    if (!context) {
      throw new Error("useUsersContext must be used within a UsersProvider");
    }
    return context;
  };
  
  export { UsersProvider, useUsersContext };
