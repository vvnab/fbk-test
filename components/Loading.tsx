import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";

import styles from "./Loading.module.scss";

export default () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon className={styles.icon} icon={faHourglassHalf} />
    </div>
  )
}

