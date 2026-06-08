import logo from "@assets/images/logo.svg";
import menu from "@assets/images/ic_menu.svg";
import styles from "./Navigation.module.css";
import OutlineButton from "./components/OutlineButton";

function Navigation() {
  return (
    <div className={styles.navigation}>
      <img src={logo} />
      <div className={styles.navigationRight}>
        <OutlineButton title="Get In Touch" />
        <img className="menu-btn" src={menu} />
      </div>
    </div>
  );
}

export default Navigation;
