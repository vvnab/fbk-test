import styles from "./IssueListItem.module.scss";

export default ({ issue, onClick }) => {
  const { number, user, title, state } = issue;
  return (
    <tr className={styles.container} onClick={() => onClick(number)}>
      <td className={styles.avatar}>
        <img src={user.avatar_url} />
      </td>
      <td className={styles.title}>{title}</td>
  <td className={styles.state}>{state}</td>
    </tr>
  )
}
