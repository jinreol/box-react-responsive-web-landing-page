import styles from "@presentations/home/views/FirstBlock.module.css";
import photos from "@assets/images/photos.png";
import icArrowRight from "@assets/images/ic_arrow_right.svg";
import FullButton from "@components/FullButton";

function FirstBlock() {
  return (
    <div className={styles.firstBlock}>
      <div className={styles.firstBlockComp01}>
        <img className={styles.photos} src={photos} alt="" />
        <div className={styles.firstBlockComp01Text}>
          What Other Say About Us
        </div>
        <img src={icArrowRight} alt="Arrow Right" />
      </div>
      <div className={styles.firstBlockComp02}>
        <div className={styles.firstBlockComp02Text01}>
          <span>GROW SALES</span> WITH OUR STRATEGY FIRST APPROACH
        </div>
        <div className={styles.firstBlockComp02Text02}>
          Forge’s sales and marketing solutions are strategically assigned each
          month to adapt quickly and hit your goals.
        </div>
      </div>
      <div className={styles.firstBlockComp03}>
        <FullButton title="Book a Free Consultation" />
      </div>
    </div>
  );
}

export default FirstBlock;
