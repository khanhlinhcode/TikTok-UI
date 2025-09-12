import classNames from "classnames/bind";
import style from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ff378af39120d4eb668eef664f92098a~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=a2724b78&x-expires=1757728800&x-signature=M1eIgp8TbsLs7yryq7OsNbqDVEk%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=c1333099&idc=my2"
        alt="Hoaa"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>Nguyen van a</span>
      </div>
    </div>
  );
}

export default AccountItem;
