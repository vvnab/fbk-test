import styles from "./Issue.module.scss";
import { Fragment } from "react";

const IssueInfo = ({ repository, title, number, state }) => (
  <Fragment>
    <div className={styles.repository}>{repository}</div>
    <div className={styles.header}>
      <span className={styles.title}>{title}</span>
      <span>
        <span className={styles.state}>{state}</span>
        <span className={styles.number}>#{number}</span>
      </span>
    </div>
  </Fragment>
)

const IssueComment = ({ user, body, dateTime }) => (
  <div className={styles.commentContainer}>
    <span className={styles.user}>{user.login}</span>
    <span className={styles.dateTime}>{dateTime}</span>
    <span className={styles.body}>{body}</span>
  </div>
)

export default ({ issue }) => {
  const { url, number, title, state, user, body, comments, created_at, closed_at } = issue;
  const repository = issue.repository_url.split('/').slice(-2).join('/');
  return (
    <div className={styles.container}>
      <IssueInfo repository={repository} title={title} number={number} state={state} />
      <IssueComment user={user} dateTime={created_at} body={body} />
      {comments.map((i: any, k: number) => <IssueComment
        key={k}
        user={i.user}
        dateTime={i.created_at}
        body={i.body}
      />)}
    </div>
  )
}

