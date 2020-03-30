import { createContext } from "react";

export const ContextApp = createContext(null);

export const initialState = {
  user: "koajs",
  userSuggestions: [],
  repository: "session",
  repositorySuggestions: [],
  pageSize: 10,
  currentPage: 1
}

export const reducer = (state: any, data: any) => {
  return {
    ...state,
    ...data
  };
};