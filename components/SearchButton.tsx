import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import styles from "./SearchButton.module.scss";

export default ({ onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <FontAwesomeIcon className={styles.backSlash} icon={faSearch} />
    </div>
  )
}

