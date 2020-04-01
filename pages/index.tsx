import { Fragment, useContext, useEffect, FC } from "react";
import { GetServerSideProps } from "next";
import { ceil } from "lodash";
import { useRouter } from 'next/router';
import Layout from "../components/Layout";
import SearchPanel from "../components/SearchPanel";
import IssueList from "../components/IssueList";
import Paginator from "../components/Paginator";
import Loading from "../components/Loading";
import Message from "../components/Message";
import {IList, IIssue} from "../models";

import { ContextApp } from "../context/reducer";

import fetcher from "../utils/fetcher";
import useSWR from "swr";

interface IIndex {
  user: string
  repository: string
}

export default (props: IIndex) => {
  const router = useRouter();
  const { state, dispatch } = useContext(ContextApp);
  const { user, repository, userInput, repositoryInput, pageSize, currentPage } = state;
  const { data, error } = useSWR<IList<IIssue>>(() => user && `/api/issues?q=repo:${user}/${repository}&page=${currentPage}&per_page=${pageSize}`, fetcher);

  useEffect(() => props.user && dispatch({ ...props, userInput: props.user, repositoryInput: props.repository }), []);
  useEffect(() => {
    const url = {
      pathname: '/',
      query: { user, repository, currentPage, pageSize }
    }
    router.push(url, url, { shallow: true });
  }, [user, repository, pageSize, currentPage]);

  const search = () => dispatch({ currentPage: 1, user: userInput, repository: repositoryInput });
  const goToIssue = (id: number) => router.push(`/issues/${user}/${repository}/${id}`);

  return (
    <Layout>
      <SearchPanel search={search} />
      {error && error.message !== "Forbidden" ?
        <Message error>{error.message}</Message> : data ?
          <Fragment>
            <IssueList
              issues={data.items}
              onClick={goToIssue} />
            <Paginator
              quantity={ceil(data.total_count / pageSize)}
              current={parseInt(currentPage)}
              max={7}
              onSelect={(currentPage: number) => dispatch({ currentPage })}
            />
          </Fragment> : !user ? <Message>Пусто</Message> : <Loading />
      }
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => ({ props: context.query });