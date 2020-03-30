import IssueListItem from "./IssueListItem";

import styles from "./IssueList.module.scss";

export default ({ issues }) => {
  return (
    <table className={styles.container}>
      {issues && issues.map((i, k) => <IssueListItem issue={i} key={k} />)}
    </table>
  )
}

