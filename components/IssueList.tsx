import IssueListItem from "./IssueListItem";
import { IIssue } from "../models";

import styles from "./IssueList.module.scss";

interface IIssueList {
  onClick: Function
  issues: IIssue[]
}

export default ({ issues, onClick }: IIssueList) => {
  return (
    <div className={styles.container}>
      <table cellSpacing="0">
        <tbody>
          {
            issues && issues.map((i, k) => <IssueListItem issue={i} key={k} onClick={onClick} />)
          }
        </tbody>
      </table>
    </div>
  )
}

