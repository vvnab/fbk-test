import { createContext } from "react";

export const ContextApp = createContext(null);

export const initialState = {
  userInput: "",
  user: "",
  userSuggestions: [],
  repositoryInput: "",
  repository: "",
  repositorySuggestions: [],
  pageSize: 10,
  currentPage: 1
}

export const reducer = (state: any, data: any) => {
  if (data.userInput && !data.repositoryInput) {
    data.repositoryInput = "";
  }
  return {
    ...state,
    ...data
  };
};