import Header from "./Header";
import Footer from "./Footer";

import styles from "./Layout.module.scss";

export default ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <section className={styles.main}>
        {children}
      </section>
      {/* <Footer /> */}
    </div>
  )
}

