import styles from "./SuggestInput.module.scss"

export default ({ value, placeholder, onChange }) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}

