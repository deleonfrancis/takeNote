import React, { useReducer } from "react";
import AuthContext from './authContext'
import authReducer from "./authReducer";
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from "../types";

const AuthState = (props) => {
  const initialState = {
    //   access the browser to get the token
      token:localStorage.getItem('token'),
    //   tells us if user is logged in or not
      isAuthenticated: null,   
    loading: true,
    user:null,
    error: null
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  
  //   Load User

  //  Register User

  //  Login User

  // Logout

  // Clear Errors


  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;