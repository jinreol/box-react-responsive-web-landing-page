import logo from "@assets/images/logo.svg";
import menu from "@assets/images/ic_menu.svg";
import styles from "@presentations/home/views/Navigation.module.css";
import OutlineButton from "@components/OutlineButton";
import TextButton from "@components/TextButton";

function Navigation() {
  return (
    <div className={styles.navigation}>
      <img src={logo} />
      <div className={styles.navigationCenter}>
        <TextButton title="About Us" />
        <TextButton title="Services" />
        <TextButton title="How We Work" />
        <TextButton title="Testimonials" />
        <TextButton title="FAQ" />
      </div>
      <div className={styles.navigationRight}>
        <OutlineButton title="Get In Touch" />
        <img className={styles.menuBtn} src={menu} />
      </div>
    </div>
  );
}

export default Navigation;
