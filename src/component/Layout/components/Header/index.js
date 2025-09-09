import classnames from "classnames/bind";
import style from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// cách 1: dùng faXmark (ổn định trong FA6)
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const cx = classnames.bind(style);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* logo */}
        <div className={cx("logo")}>
          <img
            src="https://i.ibb.co/J3Tqwy5/Tik-Tok-logo.png"
            alt="Tiktok"
            height="42"
          />
        </div>

        {/* search */}
        <div className={cx("search")}>
          <input
            type="text"
            placeholder="Search accounts and videos"
            spellCheck={false}
          />

          {/* nút clear */}
          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          {/* loading */}
          <button>
            <FontAwesomeIcon className={cx("loadning")} icon={faSpinner} />
          </button>
          {/* search btn */}
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx("actions")}></div>
      </div>
    </header>
  );
}
console.log("faCircleXmark:", faCircleXmark);

export default Header;
