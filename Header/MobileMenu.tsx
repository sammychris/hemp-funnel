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

  const logOut = (e: MouseEvent<Element>) => {
    e.preventDefault();
  };

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
      <header className={`${styles.col} ${styles.topHeaderMobile}`}>
      </header>
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
                  Home
                </span>
              </div>
            </Link>
          </li>
          <li className={`${styles.col}`}>
            <Link
              onClick={(e) => toggleMenu(!openState)}
              className={`${styles.row}`}
              href="/politics"
            >
              <div className={`${styles.row} ${styles.menuItem} `}>
                <span
                  className={
                    router.pathname == "/politics" ? styles.active : ""
                  }
                >
                  Politics
                </span>
              </div>
            </Link>
          </li>
          <li className={`${styles.col}`}>
            <Link
              onClick={(e) => toggleMenu(!openState)}
              className={`${styles.row}`}
              href="/health"
            >
              <div className={`${styles.row} ${styles.menuItem} `}>
                <span
                  className={router.pathname == "/health" ? styles.active : ""}
                >
                  Health
                </span>
              </div>
            </Link>
          </li>
          <li className={`${styles.col}`}>
            <Link
              onClick={(e) => toggleMenu(!openState)}
              className={`${styles.row}`}
              href="/culture"
            >
              <div className={`${styles.row} ${styles.menuItem} `}>
                <span
                  className={router.pathname == "/culture" ? styles.active : ""}
                >
                  Culture
                </span>
              </div>
            </Link>
          </li>
          <li className={`${styles.col}`}>
            <Link
              onClick={(e) => toggleMenu(!openState)}
              className={`${styles.row}`}
              href="/trending"
            >
              <div className={`${styles.row} ${styles.menuItem} `}>
                <span
                  className={
                    router.pathname == "/trending" ? styles.active : ""
                  }
                >
                  Trending
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
