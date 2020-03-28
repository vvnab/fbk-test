import styles from "./SuggestInput.module.scss"

export default (props) => {
  return (
    <div className={styles.container}>
      <input type="text" className={styles.input} />
    </div>
  )
}

