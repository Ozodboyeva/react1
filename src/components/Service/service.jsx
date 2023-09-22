import React from "react";
import styleservice from "./service.module.css";
import building from "../../assets/images/building.png";
import fabric from "../../assets/images/fabric.png";
import home from "../../assets/images/home.png";
export const Service = () => {
  return (
    <section className={styleservice["service"]}>
      <div className={`container`}>
        <div className={styleservice["service__parts"]}>
          <h2 className={styleservice["service__title"]}>Our Services</h2>
          <button className={styleservice["service__btn"]}>
            Explore services
          </button>
        </div>
        <div className={styleservice["service__cards"]}>
          <div className={styleservice["service__card"]}>
            <div className={styleservice["service__card-img"]}>
              <img src={home} alt="fabric" />
            </div>
            <div className={styleservice["service__card-title"]}>
              <h2>House cleaning</h2>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
          </div>
          <div className={styleservice["service__card"]}>
            <div className={styleservice["service__card-img"]}>
              <img src={building} alt="fabric" />
            </div>
            <div className={styleservice["service__card-title"]}>
              <h2>Office cleaning</h2>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
          </div>
          <div className={styleservice["service__card"]}>
            <div className={styleservice["service__card-img"]}>
              <img src={fabric} alt="fabric" />
            </div>
            <div className={styleservice["service__card-title"]}>
              <h2> Industrial cleaning </h2>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
          </div>
        </div>
        <div className={styleservice["service__guidlines"]}>.ser</div>
      </div>
    </section>
  );
};

export default Service;
