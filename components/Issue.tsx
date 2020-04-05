import ReactMarkdown from "react-markdown";

import { IIssue, IComment } from "../models";

import styles from "./Issue.module.scss";

interface IIssueInfoFC {
  title: string
  repository: string
  number: number
  state: string
}

const IssueInfo = ({ repository, title, number, state }: IIssueInfoFC) => {
  return (
    <>
      <div className={styles.repository}>
        {repository}
      </div>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <span>
          <span className={styles.state}>{state}</span>
          <span className={styles.number}>#{number}</span>
        </span>
      </div>
    </>
  )
}

const IssueComment = ({ user, body, created_at }: IComment) => (
  <div className={styles.commentContainer}>
    <div className={styles.title}>
      <div className={styles.user}>{user.login}</div>
      <div className={styles.dateTime}>{created_at}</div>
    </div>
    <ReactMarkdown className={styles.body} escapeHtml={false}>{body}</ReactMarkdown>
  </div>
)

interface IIssueFC {
  issue: IIssue
}

export default ({ issue }: IIssueFC) => {
  const { url, number, title, state, user, body, comments, created_at, closed_at } = issue;
  const repository = issue.repository_url.split('/').slice(-2).join('/');
  return (
    <div className={styles.container}>
      <IssueInfo repository={repository} title={title} number={number} state={state} />
      <IssueComment user={user} created_at={created_at} body={body} />
      {comments && comments.length > 0 && comments.map((i: any, k: number) => <IssueComment
        key={k}
        user={i.user}
        created_at={i.created_at}
        body={i.body}
      />)}
    </div>
  )
}

