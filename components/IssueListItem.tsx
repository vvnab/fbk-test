import styles from "./IssueListItem.module.scss";

export default ({ issue }) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}></div>
      <div className={styles.title}></div>
      <div className={styles.state}></div>
    </div>
  )
}

