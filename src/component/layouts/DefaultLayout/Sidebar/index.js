import PropTypes from "prop-types";
import style from "./Sidebar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);
function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <h2>Sidebar</h2>
    </aside>
  );
}
Sidebar.propTypes = {
  children: PropTypes.node,
};

export default Sidebar;
