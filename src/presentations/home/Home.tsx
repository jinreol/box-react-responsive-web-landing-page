import styles from "@presentations/home/Home.module.css";
import FirstBlock from "@presentations/home/views/FirstBlock";
import Navigation from "@presentations/home/views/Navigation";

function Home() {
  return (
    <>
      <div className={styles.containerPadding}>
        <div className={styles.container} style={{}}>
          <div className={styles.navigation}>
            <Navigation />
          </div>

          <div className={styles.firstBlock}>
            <FirstBlock />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
