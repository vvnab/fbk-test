import styles from "./IssueListItem.module.scss";

import { IIssue } from "../models";

interface IIssueListItem {
  onClick: Function
  issue: IIssue
}

export default ({ issue, onClick }: IIssueListItem) => {
  const { number, user, title, state } = issue;
  return (
    <tr className={styles.container} onClick={() => onClick(number)}>
      <td className={styles.avatar}>
        <img src={user.avatar_url} />
      </td>
      <td className={styles.title}>{title}</td>
      <td className={[styles.state, styles[state]].join(' ')}>{state}</td>
    </tr>
  )
}
