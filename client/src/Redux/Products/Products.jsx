import React, { createContext, useReducer, useContext } from "react";
import Reducer from "../Reducer/Reducer";

const initialState = {
  token: localStorage.getItem("token") ,
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
      throw new Error("useProductsContext must be used within a ProductsProvider");
    }
    return context;
  };
  
  export { UsersProvider, useUsersContext };
