import IssueListItem from "./IssueListItem";

import styles from "./IssueList.module.scss";

export default ({ issues, onClick }) => {
  return (
    <div className={styles.container}>
      <table cellSpacing="0">
        <tbody>
          {
            issues && issues.map((i: any, k: number) => <IssueListItem issue={i} key={k} onClick={onClick} />)
          }
        </tbody>
      </table>
    </div>
  )
}

