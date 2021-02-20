import React from "react";
import Zoom from "react-reveal/Zoom";

import icon_calendar from "../../assets/images/icons/calendar.png";
import icon_location from "../../assets/images/icons/location.png";

function ConcertInfo() {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="cn_wrapper">
          <Zoom duration={500}>
            <div className="cn_item">
              <div className="cn_outer">
                <div className="cn_inner">
                  <div className="cn_icon_square bck_red"></div>
                  <div
                    className="cn_icon"
                    style={{ background: `url(${icon_calendar})` }}
                  ></div>
                  <div className="cn_title">تاریخ و زمان کنسرت</div>
                  <div className="cn_desc">۲۱ دی ۱۳۹۹</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom duration={500} delay={500}>
            <div className="cn_item">
              <div className="cn_outer">
                <div className="cn_inner">
                  <div className="cn_icon_square bck_yellow"></div>
                  <div
                    className="cn_icon"
                    style={{ background: `url(${icon_location})` }}
                  ></div>
                  <div className="cn_title">محل برگزاری</div>
                  <div className="cn_desc">برج میلاد</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default ConcertInfo;
