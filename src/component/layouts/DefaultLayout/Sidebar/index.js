import PropTypes from "prop-types";
import style from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import DefaultLayout from "..";

const cx = classNames.bind(style);
function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <h2>Sidebar</h2>
    </aside>
  );
}
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Sidebar;
