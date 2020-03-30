import { Fragment, useContext } from "react";
import {ceil} from "lodash";
import Layout from "../components/Layout";
import SearchPanel from "../components/SearchPanel";
import IssueList from "../components/IssueList";
import Paginator from "../components/Paginator";

import { ContextApp } from "../context/reducer";

import fetcher from "../utils/fetcher";
import useSWR from "swr";

export default (props) => {
  const { state, dispatch } = useContext(ContextApp);
  const { user, repository, pageSize, currentPage } = state;
  const query = `${user}/${repository}`;
  const { data, error } = useSWR(() => `/api/issues?q=repo:${query}&page=${currentPage}&per_page=${pageSize}`, fetcher);
  return (
    <Layout>
      <SearchPanel search={() => { }} />
      {data ?
        <Fragment>
          <IssueList issues={data.items} />
          <Paginator
            quantity={ceil(data.total_count / pageSize)}
            current={state.currentPage}
            max={7}
            onSelect={(currentPage: number) => dispatch({currentPage})}
          />
        </Fragment> : <div>--</div>
      }
    </Layout>
  )
}

