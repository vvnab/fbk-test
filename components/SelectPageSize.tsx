import styles from "./SelectPageSize.module.scss";

export default ({ onSelect, selected }) => {
  return (
    <div className={styles.container}>
      <select onChange={e => onSelect(e.target.value)}>
        <option value="10" selected={selected == 10}>10</option>
        <option value="30" selected={selected == 30}>30</option>
        <option value="50" selected={selected == 50}>50</option>
      </select>
    </div>
  )
}

