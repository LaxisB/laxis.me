import styles from "./home.scss";
import { Topbar } from "./Topbar";

export function Home(props) {
    return (
        <div className={styles.viewport}>
            <div className={styles.home}>
                <div className={styles.background} />
                <Topbar />
                <div className={styles.content}>
                    <div className={styles.menu}>
                        <ul className={styles.menu__list}>
                            <li>
                                <button className={styles.menu__item}>Play</button>
                            </li>
                            <li>
                                <button className={styles.menu__item}>Shop</button>
                            </li>
                            <li>
                                <button className={styles.menu__item}>???</button>
                            </li>
                            <li>
                                <button className={styles.menu__item}>Exit</button>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.boxes}>shop carousel</div>
                </div>
                <div className={styles.queue}>new map queue</div>
            </div>
        </div>
    );
}
