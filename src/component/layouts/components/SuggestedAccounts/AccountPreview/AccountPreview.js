import React from "react";
import classNames from "classnames/bind";
import style from "./AccountPreview.module.scss";
import Button from "~/component/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);
const AccountPreview = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/c35f1ff4a8cdab9d1a83711fad70c385~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=57e7a449&x-expires=1759284000&x-signature=KK3Qc0BJPEOof%2B%2FWfupOL7TbY4A%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
          alt=""
        />
        <Button className={cx("follow-btn")} primary>
          Follow{" "}
        </Button>
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>Lập Trình AI</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>Quốc Nguyễn Phú</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Followers </span>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}> Followers</span>
        </p>
      </div>
    </div>
  );
};

export default AccountPreview;
