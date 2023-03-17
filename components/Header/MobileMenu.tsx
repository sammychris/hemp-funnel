import styles from "../../styles/Main.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Dispatch,
  FC,
  FunctionComponent,
  MouseEvent,
  SetStateAction,
  useState,
  useEffect,
} from "react";

const URL =
  "https://cdn.shopify.com/s/files/1/0574/9263/5817/files/bigly_logo_art_file.png?v=1626380659&width=300";
type Props = {
  openState: boolean;
  toggleMenu: Dispatch<SetStateAction<boolean>>;
};
export const MobileMenu: FunctionComponent<Props> = ({
  openState,
  toggleMenu,
}) => {
  const [innerWidth, setInnerWidth] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);
  }, []);

  const router = useRouter();

  return (
    <nav
      className={`${styles.col} ${styles.sideBar} `}
      style={{
        marginLeft: innerWidth > 720 ? "0" : !openState ? "-600px" : "0",
        height:
          innerWidth < 720
            ? "" + (innerHeight + 600) + "px"
            : "" + innerHeight + "px",
        minHeight: "" + innerHeight + "px",
      }}
    >
      <header className={`${styles.col} ${styles.topHeaderMobile}`}></header>
      <div
        style={{
          height: "100%",
          justifyContent: "space-between",
        }}
        className={`${styles.col} ${styles.menu} `}
      >
        <ul className={`${styles.col}`}>
          <li className={`${styles.col}`}>
            <Link
              onClick={(e) => toggleMenu(!openState)}
              className={`${styles.row}`}
              href="/"
            >
              <div className={`${styles.row} ${styles.menuItem} `}>
                <span className={router.pathname == "/" ? styles.active : ""}>
                  100% Legal
                </span>
              </div>
            </Link>
          </li>
          <li className={`${styles.col}`}>
            <Link
              onClick={(e) => toggleMenu(!openState)}
              className={`${styles.row}`}
              href="/Guarantee"
            >
              <div className={`${styles.row} ${styles.menuItem} `}>
                <span
                  className={
                    router.pathname == "/Guarantee" ? styles.active : ""
                  }
                >
                  Guarantee
                </span>
              </div>
            </Link>
          </li>
          <li className={`${styles.col}`}>
            <Link
              onClick={(e) => toggleMenu(!openState)}
              className={`${styles.row}`}
              href="/FAQS"
            >
              <div className={`${styles.row} ${styles.menuItem} `}>
                <span
                  className={router.pathname == "/FAQS" ? styles.active : ""}
                >
                  FAQS
                </span>
              </div>
            </Link>
          </li>
          <li className={`${styles.col}`}>
            <Link
              onClick={(e) => toggleMenu(!openState)}
              className={`${styles.row}`}
              href="/Custom-Reviews"
            >
              <div className={`${styles.row} ${styles.menuItem} `}>
                <span
                  className={
                    router.pathname == "/Custom-Reviews" ? styles.active : ""
                  }
                >
                  Custom Reviews
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileMenu;
