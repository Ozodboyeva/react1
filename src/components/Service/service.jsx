import React from "react";
import styleservice from "./service.module.css";
import building from "../../assets/images/building.png";
import fabric from "../../assets/images/fabric.png";
import home from "../../assets/images/home.png";
import phone from "../../assets/images/phone.png";
import webpage from "../../assets/images/cleanerwomen.png";
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
        <div className={styleservice["service__guidlines"]}>
          <div className={styleservice["service__guidline"]}>
            <img src={webpage} alt="web" />
          </div>
          <div className={styleservice["service__guidline-text"]}>
            <h3>Covid-19 sanitization</h3>
            <h2>
              We follow guidelines to keep you safe from the COVID-19 virus
            </h2>
            <p>
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              sollicitudin congue massa mauris lectus.
            </p>
            <div className={styleservice["service__guidline-btns"]}>
              <div className={styleservice["service__guidline-btn"]}>
                <button>Get a free quote</button>
              </div>
              <div className={styleservice["phone"]}>
                <img src={phone} alt="phone" />
              </div>
              <div className={styleservice["service__guidline-sessions"]}>
                <div className={styleservice["service__guidline-session"]}>
                  <h4>Call us now</h4>
                  <span>(414) 567 - 2109</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
