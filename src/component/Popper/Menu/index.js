import { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import style from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "~/component/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";

const cx = classNames.bind(style);

function Menu({
  children,
  items = [],
  hideOnClick = false,
  onChange = () => {},
}) {
  // history: mảng các object { title, data }
  const [history, setHistory] = useState([{ title: null, data: items }]);
  const current = history[history.length - 1];

  const renderItems = () =>
    current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              // push nguyên object children { title, data }
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      offset={[12, 8]}
      hideOnClick={hideOnClick}
      placement="bottom-end"
      onHide={() => setHistory((prev) => prev.slice(0, 1))} // reset khi đóng menu
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title={current.title}
                onBack={() =>
                  setHistory((prev) => prev.slice(0, prev.length - 1))
                }
              />
            )}
            <div className={cx("menu-body")}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
