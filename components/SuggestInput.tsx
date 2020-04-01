import { useState } from "react";
import { useDebounce } from 'use-debounce';
import fetcher from "../utils/fetcher";
import useSWR from "swr";

import styles from "./SuggestInput.module.scss"


const Suggestions = ({ suggestions, onSelect }) => {
  return (
    <div className={styles.suggestionsContainer}>
      <div className={styles.suggestions}>
        {suggestions && suggestions.map((i: string, k: number) => <div key={k} onClick={() => onSelect(i)}>{i}</div>)}
      </div>
    </div>
  )
}

export default ({ value, placeholder, source, onChange, query, disabled }) => {
  const [focused, setFocused] = useState(false);
  const [debouncedValue] = useDebounce(value, 500);
  const { data, error } = useSWR<string[]>(() => debouncedValue && `${source}?q=${debouncedValue}+${query ? query : ""}`, fetcher);
  return (
    <div className={styles.container}>
      <input
        disabled={disabled}
        type="text"
        className={styles.input}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setTimeout(() => setFocused(false), 100)}
      />
      {focused && data && data.length > 0 && <Suggestions suggestions={data} onSelect={onChange} />}
    </div>
  )
}

