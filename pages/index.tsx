import { Fragment, useState, ChangeEvent } from "react";
import Layout from "../components/Layout";
import SearchPanel from "../components/SearchPanel";
import IssueList from "../components/IssueList";

import fetcher from "../utils/fetcher";
import useSWR from "swr";

export default (props) => {
  const issues = Array.from(Array(20).keys());
  return (
    <Layout>
      <SearchPanel />
      <IssueList issues={issues} />
    </Layout>
  )
}

