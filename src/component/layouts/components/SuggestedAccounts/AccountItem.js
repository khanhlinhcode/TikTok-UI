import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import style from "./SuggestedAccounts.module.scss";
import AccountPreview from "./AccountPreview/AccountPreview";
import { Wrapper as PopperWrapper } from "~/component/Popper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);
function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <div className={cx("preview")}>
            <AccountPreview />
          </div>
        </PopperWrapper>
      </div>
    );
  };
  return (
    <div>
      <Tippy
        placement="bottom"
        interactive
        delay={[800, 0]}
        offset={[-10, 0]}
        render={renderPreview}
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/c35f1ff4a8cdab9d1a83711fad70c385~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=57e7a449&x-expires=1759284000&x-signature=KK3Qc0BJPEOof%2B%2FWfupOL7TbY4A%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
            alt=""
          />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>Lập Trình AI</strong>
              <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
            </p>
            <p className={cx("name")}>LinhKhanhAI</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}
AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
