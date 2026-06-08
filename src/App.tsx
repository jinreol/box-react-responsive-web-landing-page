import { useState } from "react";
import styles from "./App.module.css";
import Navigation from "./Navigation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={styles.containerPadding}>
        <div className={styles.container} style={{}}>
          <div className={styles.navigation}>
            <Navigation />
          </div>

          <div className={styles.firstBlock}>
            <h1 style={{ color: "white" }}>first block</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
