import getPages from "../utils/getPages";
import styles from "./Paginator.module.scss";

export default ({ quantity, current, max, onSelect }) => {
  const pages = getPages({
    quantity,
    current,
    max
  });
  const pageNumber = (i: number, k: number) => {
    return k == 0 && i != 1 ? "<" : k == max - 1 && i != quantity ? ">" : i;
  };
  return (
    <div className={styles.container}>
      {pages.map((i: number, k: number) => (
        <div
          title={
            k == pages.length - 1 && i != quantity
              ? `всего страниц ${quantity}`
              : ""
          }
          key={i}
          onClick={() => onSelect(i)}
          className={[styles.item, i === current && styles.active].join(" ")}
        >
          {pageNumber(i, k)}
        </div>
      ))}
    </div>
  )
}

