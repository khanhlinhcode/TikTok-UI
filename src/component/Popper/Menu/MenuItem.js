import style from "./Menu.module.scss";
import classNames from "classnames/bind";
import Button from "~/component/Button";

const cx = classNames.bind(style);

function MenuItem({ data, onClick }) {
  const classes = cx("menu-item", {
    separate: data?.separate,
  });
  return (
    <Button
      className={classes}
      leftIcon={data?.icon}
      to={data?.to}
      onClick={onClick}
    >
      {data?.title}
    </Button>
  );
}

export default MenuItem;
