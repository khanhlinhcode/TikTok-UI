import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react";
import Search from "~/pages/Search";
import config from "~/config";
import Button from "~/component/Button";
import style from "./Header.module.scss";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import Menu from "~/component/Popper/Menu";

import {
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faCloudUpload,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classnames.bind(style);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "Language",
    children: {
      title: "",
      data: [
        { type: "language", code: "en", title: "English" },
        { type: "language", code: "vi", title: "Tiếng Việt" },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
    to: "",
  },
];

function Header() {
  const currentUser = true;

  // handle logic
  const handleMenuChange = (MenuItem) => {
    switch (MenuItem.type) {
      case "language":
        // handle change language
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@Hoa",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin ",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/Settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* logo */}
        <div className={cx("logo")}>
          <Link to={config.routes.home} className={cx("logo-link")}>
            <img
              src="https://classic.vn/wp-content/uploads/2023/08/1200px-TikTok_logo.svg.png"
              alt="Tiktok"
              height="42"
            />
          </Link>
        </div>
        {/* search */}
        <Search />
        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy content="Upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log In</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <img
                className={cx("user-avatar")}
                src="https://files.fullstack.edu.vn/f8-prod/user_photos/199048/626f889e76478.jpg"
                alt="Nguyen Van a"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
