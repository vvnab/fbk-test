import { useContext } from "react";
import { GetServerSideProps } from 'next';
import Issue from "../../../../components/Issue";
import Message from "../../../../components/Message";
import Loading from "../../../../components/Loading";
import { ContextApp } from "../../../../context/reducer";


import fetchWhile from "../../../../utils/fetchWhile";

export default props => {
  const { state } = useContext(ContextApp);
  const { isLoading } = state;
  return (
    <>
      {
        isLoading
          ? <Loading />
          : props.error
            ? <Message error>{props.message}</Message>
            : <Issue issue={props} />
      }
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { user, repository, id } = context.query;
  const protocol = (context.req.headers?.referer && context.req.headers.referer.split('://')[0]) || "http";
  const host = context.req.headers.host;
  try {
    const props = await fetchWhile(`${protocol}://${host}/api/issues/${user}/${repository}/${id}`);
    return { props };
  } catch (ex) {
    console.error(ex);
    return { props: { error: true, message: ex.message } }
  }
}