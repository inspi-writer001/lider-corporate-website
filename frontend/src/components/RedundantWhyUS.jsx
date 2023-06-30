import React from "react";

const RedundantWhyUS = () => {
  return (
    <div>
      {" "}
      <section
        style={{ ...section1, section2, height: "fit-content !important" }}
        className="panel"
      >
        <Text
          color={whiteText}
          className="section_two_top"
          style={{ textAlign: "center" }}
        >
          {t("why_us.title")}
        </Text>
        <br />
        <div
          className="section_two_bottom"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around"
          }}
        >
          <div
            className="section_2div_left shift_sync"
            style={{ width: "50%", height: "100%" }}
          >
            <motion.img
              ref={carRef}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className={
                "grayscale_shadow animate__zoomInRight" +
                (isInView && " animate__animated")
              }
              style={{}}
              // src={isHovering ? carJ : carT}
              src={carT}
              alt="image flip"
              transition="spring"
            />
            {/* <motion.img
              className="grayscale_shadow off"
              style={{}}
              src={carT}
              alt=""
            />
            <motion.img
              className="grayscale_shadow off"
              style={{}}
              src={carJ}
              alt=""
            /> */}

            {/* <img style={{}} src={carF} alt="" />{" "}
            <img style={{}} src={carF} alt="" /> */}
            {/* <Spline scene="https://prod.spline.design/NXOsMcvBlTD40ItM/scene.splinecode" /> */}
            {/* <iframe
              src="https://my.spline.design/clockdigitalinteractioncopy-0b31bdfac1d22474554806dae4671dce/"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe> */}
          </div>
          <div className="section_2div_right" style={{ width: "50%" }}>
            <Text color={whiteText} className="text_in ma">
              {t("why_us.text1")}
            </Text>
            <div className="gap" style={{ height: "30%" }} />
            <div className="header_div">
              <div className="superfast chrome_text">
                {t("why_us.super_fast")}
              </div>
              <Text color={whiteText} className="realization">
                {t("why_us.realization")}
              </Text>
              <div className="you_save">{t("why_us.you_save")}</div>
            </div>

            <div className="lower_body" style={{ width: "100%" }}>
              <div
                className="container_lower_body"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-around"
                }}
              >
                <Text color={whiteText} className="text ma">
                  {t("why_us.text2")}
                </Text>
                <div className="immg chrome_text">"</div>
              </div>
            </div>
            <div className="gap" />
            <div className="header_div">
              <div className="superfast chrome_text">
                {t("why_us.attractive")}
              </div>
              <Text color={whiteText} className="realization">
                {t("why_us.offers")}
              </Text>
              <div className="you_save">{t("why_us.explore")}</div>
            </div>

            <div className="lower_body" style={{ width: "100%" }}>
              <div
                className="container_lower_body"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-around"
                }}
              >
                <Text color={whiteText} className="text">
                  {t("why_us.text3")}
                </Text>
                <div className="immg chrome_text">""</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RedundantWhyUS;
