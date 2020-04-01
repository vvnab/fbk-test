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
        source="/api/users"
        query={false}
        disabled={false}
      />
      <div className={styles.backSlash}>/</div>
      <SuggestInput
        placeholder={"repository"}
        value={state.repositoryInput}
        onChange={(repository: string) => dispatch({ repositoryInput: repository })}
        source="/api/repositories"
        query={`user:${state.userInput}`}
        disabled={!state.userInput}
      />
      <SelectPageSize
        selected={state.pageSize}
        onSelect={(pageSize: number) => dispatch({ pageSize })}
      />
      <SearchButton onClick={search} />
    </div>
  )
}

