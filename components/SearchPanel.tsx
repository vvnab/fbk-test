import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlash } from "@fortawesome/free-solid-svg-icons";
import SuggestInput from "./SuggestInput";

import styles from "./SearchPanel.module.scss";

export default (props) => {
  return (
    <div className={styles.container}>
      <SuggestInput />
      <FontAwesomeIcon className={styles.backSlash} icon={faSlash} />
      <SuggestInput />
      {/* <SearchButton /> */}
      {/* <SelectPageSize /> */}
    </div>
  )
}

