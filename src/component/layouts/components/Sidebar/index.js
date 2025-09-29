import PropTypes from "prop-types";
import style from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import Menu, { MenuItem } from "./Menu";
import config from "~/config";

// Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserFriends,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          title="For You"
          to={config.routes.home}
          icon={<FontAwesomeIcon icon={faHouse} />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<FontAwesomeIcon icon={faUserFriends} />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<FontAwesomeIcon icon={faVideo} />}
        />
      </Menu>
    </aside>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node,
};

export default Sidebar;
