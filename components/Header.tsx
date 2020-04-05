import Router, { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from "./Header.module.scss";

export default (props) => {
  const router = useRouter();

  const back = () => {
    if (window.history.length > 2) {
      router.back();
    } else {
      const { user, repository } = router.query;
      const url = {
        pathname: '/',
        query: { user, repository }
      }
      router.push(url, url);
    }
  }
  return <header className={styles.container}>
    <div className={styles.header}>
      {router.route !== "/" && <FontAwesomeIcon className={styles.back} icon={faReply} onClick={back} />}
      <div className={styles.title}>
        <FontAwesomeIcon className={styles.icon} icon={faGithub} />
        <span>GitHub Issue Tracker</span>
      </div>
    </div>
  </header>
}

