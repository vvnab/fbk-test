import styles from "./IssueListItem.module.scss";

export default ({ issue }) => {
  const { user, title, state } = issue;
  return (
    <tr className={styles.container}>
      <td className={styles.avatar}>
        <img src={user.avatar_url} />
      </td>
      <td className={styles.title}>{title}</td>
      <td className={styles.state}></td>
    </tr>
  )
}
