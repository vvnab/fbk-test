import { useContext, useEffect } from "react";
import { GetServerSideProps } from "next";
import { ceil } from "lodash";
import { useRouter } from 'next/router';
import SearchPanel from "../components/SearchPanel";
import IssueList from "../components/IssueList";
import Paginator from "../components/Paginator";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { IList, IIssue } from "../models";

import { ContextApp } from "../context/reducer";

import fetchWhile from "../utils/fetchWhile";

interface IIndex {
  data?: IList<IIssue>
  user?: string
  repository?: string
  error?: boolean
  message?: string
  pageSize?: number
  currentPage?: number
}

export default (props: IIndex) => {
  const router = useRouter();
  const { state, dispatch } = useContext(ContextApp);
  const { user, repository, userInput, repositoryInput, pageSize, currentPage, totalCount, isLoading } = state;
  const { data, error, message } = props;

  useEffect(() => props.user && dispatch({
    ...props,
    userInput: props.user,
    repositoryInput: props.repository
  }), []);

  useEffect(() => dispatch({
    totalCount: data?.total_count || totalCount
  }), [data]);

  useEffect(() => {
    const url = {
      pathname: '/',
      query: { user, repository, currentPage, pageSize }
    }
    router.push(url, url);
  }, [user, repository, pageSize, currentPage]);

  const search = () => dispatch({ currentPage: 1, user: userInput, repository: repositoryInput });
  const goToIssue = (id: number) => {
    dispatch({ totalCount: 0 });
    router.push(`/issues/[user]/[repository]/[id]`, `/issues/${user}/${repository}/${id}`);
  };

  return (
    <>
      <SearchPanel search={search} />
      {
        isLoading
          ? <Loading />
          : error
            ? <Message error>{message}</Message>
            : props.data
              ? <IssueList
                issues={props.data.items}
                onClick={goToIssue}
              />
              : <Message >Пусто</Message>
      }
      <Paginator
        quantity={ceil(totalCount / pageSize)}
        current={parseInt(currentPage)}
        max={7}
        onSelect={(currentPage: number) => dispatch({ currentPage })}
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user, repository, currentPage, pageSize } = context.query;
  const protocol = (context.req.headers?.referer && context.req.headers.referer.split('://')[0]) || "http";
  const host = context.req.headers.host;
  try {
    const data = user && repository && await fetchWhile(`${protocol}://${host}/api/issues?q=repo:${user}/${repository}&page=${currentPage}&per_page=${pageSize}`);
    return {
      props: {
        ...context.query,
        data
      }
    };
  } catch (ex) {
    console.error(ex);
    return {
      props: {
        ...context.query,
        error: true,
        message: ex.message
      }
    }
  }
};