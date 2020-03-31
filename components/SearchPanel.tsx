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
        value={state.userInput}
        onChange={(user: string) => dispatch({ userInput: user })}
      />
      <div className={styles.backSlash}>/</div>
      <SuggestInput
        placeholder={"repository"}
        value={state.repositoryInput}
        onChange={(repository: string) => dispatch({ repositoryInput: repository })}
      />
      <SelectPageSize
        selected={state.pageSize}
        onSelect={(pageSize: number) => dispatch({ pageSize })}
      />
      <SearchButton onClick={search} />
    </div>
  )
}

