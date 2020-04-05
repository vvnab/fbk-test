import Router, { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from "./Header.module.scss";

export default (props) => {
  const router = useRouter();
  return <header className={styles.container}>
    <div className={styles.header}>
      {router.route !== "/" && <FontAwesomeIcon className={styles.back} icon={faReply} onClick={router.back} />}
      <div className={styles.title}>
        <FontAwesomeIcon className={styles.icon} icon={faGithub} />
        <span>GitHub Issue Tracker</span>
      </div>
    </div>
  </header>
}

