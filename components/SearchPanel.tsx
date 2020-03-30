import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlash, faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import SuggestInput from "./SuggestInput";
import SearchButton from "./SearchButton";
import SelectPageSize from "./SelectPageSize";

import { useContext } from "react";
import { ContextApp } from "../context/reducer";

import styles from "./SearchPanel.module.scss";

export default ({ search }) => {
  const { state, dispatch } = useContext(ContextApp);
  return (
    <div className={styles.container}>
      <SuggestInput
        placeholder={"user"}
        value={state.user}
        onChange={(user: string) => dispatch({ user })} />
      <FontAwesomeIcon className={styles.backSlash} icon={faSlash} />
      <SuggestInput
        placeholder={"repository"}
        value={state.repository}
        onChange={(repository: string) => dispatch({ repository })} />
      <SelectPageSize selected={state.pageSize} onSelect={(pageSize: number) => dispatch({ pageSize })} />
      <SearchButton onClick={search} />
    </div>
  )
}

