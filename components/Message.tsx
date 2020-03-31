import styles from "./Message.module.scss";

export default ({ error, children }: { error?: boolean, children: any }) => {
  return (
    <div className={[styles.container, error && styles.error].join(' ')}>
      {children}
    </div>
  )
}

