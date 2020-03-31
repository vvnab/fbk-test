import { Fragment, useContext } from "react";
import { useRouter, Router } from "next/router";
import Layout from "../../../../components/Layout";
import Issue from "../../../../components/Issue";
import Loading from "../../../../components/Loading";
import Message from "../../../../components/Message";

import fetcher from "../../../../utils/fetcher";
import useSWR from "swr";

export default props => {
  const router = useRouter();
  const { user, repository, id } = router.query;
  const { data, error } = useSWR(() => user && `/api/issues/${user}/${repository}/${id}`, fetcher);
  return (
    <Layout>
      {error && error.message !== "Forbidden" ?
        <Message error>{error.message}</Message> : data ?
          <Fragment>
            <Issue issue={data} />
          </Fragment> : <Loading />}
    </Layout>
  );
};
