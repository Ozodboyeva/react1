import React from "react";
import stylehome from "./home.module.css";
import phone from "../../assets/images/phone.png";
import cleaner from "../../assets/images/cleaner.png";
export const Home = () => {
  return (
    <section className={stylehome["home"]}>
      <div className={`container ${stylehome["home-parts"]}`}>
        <div className={stylehome["home__left"]}>
          <h2 className={stylehome["home__title"]}>
            Quality cleaning for your home{" "}
          </h2>
          <p className={stylehome["home__paragraph"]}>
            Condimentum mauris sit cursus amet id non neque pharetra nulla
            ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
            aliquet et nulla magna lacus penatibus.
          </p>

          <div className={stylehome["home__another-session"]}>
            <div>
              <button className={stylehome["number__oftype"]}>
                Get a free quote
              </button>
            </div>
            <img className={stylehome["img__phone"]} src={phone} alt="phone" />
            <div className={stylehome["number"]}>
              <p className={stylehome["call"]}>CALLL US NOW</p>
              <p className={stylehome["numbers"]}> (414) 567 - 2109</p>
            </div>
          </div>
        </div>

        <div className={stylehome["home__right"]}>
          <img src={cleaner} alt="cleaner" />
        </div>
      </div>
    </section>
  );
};

export default Home;
