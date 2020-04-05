import { createContext } from "react";
import { faSleigh } from "@fortawesome/free-solid-svg-icons";

export const ContextApp = createContext(null);

export const initialState = {
  userInput: "",
  user: "",
  userSuggestions: [],
  repositoryInput: "",
  repository: "",
  repositorySuggestions: [],
  pageSize: 10,
  isLoading: false,
  currentPage: 1,
  totalCount: 0
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