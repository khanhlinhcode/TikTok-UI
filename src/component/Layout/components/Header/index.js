import classnames from "classnames/bind";
import style from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faSign,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import Button from "~/component/Button";
import { useEffect, useState } from "react";
import { Wrapper as PopperWrapper } from "~/component/Popper";
import AccountItem from "~/component/AccountItem";
const cx = classnames.bind(style);

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);

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

        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
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
        </Tippy>
        <div className={cx("actions")}>
          <Button text>Upload</Button>
          <Button primary>Log In</Button>
        </div>
      </div>
    </header>
  );
}
console.log("faCircleXmark:", faCircleXmark);

export default Header;
