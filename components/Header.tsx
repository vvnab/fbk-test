import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from "./Header.module.scss";

export default (props) => {
  return <header className={styles.container}>
    <div className={styles.header}>
      {/* <FontAwesomeIcon className={styles.icon} icon={faGithub} /> */}
      <span>GitHub Issue Tracker</span>
    </div>
  </header>
}

