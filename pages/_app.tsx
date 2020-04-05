import { AppProps } from 'next/app';
import Router from 'next/router';
import { useReducer, useEffect } from "react";
import { ContextApp, initialState, reducer } from "../context/reducer";
import Layout from "../components/Layout";

import "../public/styles.scss";


export default ({ Component, pageProps }: AppProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    Router.events.on('routeChangeStart', () => dispatch({ isLoading: true }));
    Router.events.on('routeChangeComplete', () => dispatch({ isLoading: false }));
    Router.events.on('routeChangeError', () => dispatch({ isLoading: false }));
  }, [])
  return (
    <ContextApp.Provider value={{ state, dispatch }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextApp.Provider>
  )
};