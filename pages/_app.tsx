import { AppProps } from 'next/app';
import { useReducer } from "react";
import { ContextApp, initialState, reducer } from "../context/reducer";

import "../public/styles.scss";

export default ({ Component, pageProps }: AppProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ContextApp.Provider value={{state, dispatch}}>
      <Component {...pageProps} />
    </ContextApp.Provider>
  )
};