import styles from "./SelectPageSize.module.scss";

const PAGE_SIZES = [10, 30, 50];

export default ({ onSelect, selected }) => {
  return (
    <div className={styles.container}>
      <select onChange={e => onSelect(e.target.value)} value={selected}>
        {
          PAGE_SIZES.map(i => <option key={i} value={i}>{i}</option>)
        }
      </select>
    </div>
  )
}

