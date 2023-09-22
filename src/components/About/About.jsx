import React from "react";
import styleabout from "./About.module.css";
import cards from "../../assets/images/shudule.png";
import card1 from "../../assets/images/cleanbox.png";
import card2 from "../../assets/images/twocart.png";
export const About = () => {
  return (
    <section className={styleabout["about"]}>
      <div className={`container`}>
        <div className={styleabout["about__name"]}>
          <h3>About Us</h3>
          <p>
            Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
            neque nisi felis non ultrices massa id egestas quam velit pretium
            nu.
          </p>
        </div>
        <div className={styleabout["about__cards"]}>
          <div className={styleabout["about__card"]}>
            <div className={styleabout["about__card-img"]}>
              <img src={cards} alt="cards" />
            </div>
            <div className={styleabout["about__card-text"]}>
              <h3>1. Schedule online</h3>
              <p>
                Sagittis nibh scelerisque vitae egetolment vulputate sem
                elementum sed n.
              </p>
            </div>
          </div>
          <div className={styleabout["about__card"]}>
            <div className={styleabout["about__card-img"]}>
              <img src={card2} alt="cards" />
            </div>
            <div className={styleabout["about__card-text"]}>
              <h3>2. Pay online easily</h3>
              <p>
                Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida
                amet at nunc.
              </p>
            </div>
          </div>
          <div className={styleabout["about__card"]}>
            <div className={styleabout["about__card-img"]}>
              <img src={card1} alt="cards" />
            </div>
            <div className={styleabout["about__card-text"]}>
              <h3>3. Get your house cleaned</h3>
              <p>
                Nunc maecenas sollicitudin metus tellus mattis sed porttitor
                cursus eleifend.
              </p>
            </div>
          </div>
        </div>
        <div className={styleabout["about__btns"]}>
          <button className={styleabout["about__btn"]}>Get a free quote</button>
          <button className={styleabout["about__btn"]}>Explore services</button>
        </div>
      </div>
    </section>
  );
};

export default About;
