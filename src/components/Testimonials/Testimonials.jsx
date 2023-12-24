import React from "react";
import "./Testimonials.css";
import SlickSlider from "./Slider";

const Testimonials = () => {
  return (
    <>
      <div className="t-wrapper">
        <div className="container">
          <div className="t-container">
            <div className="t-head">
              <span className="tag">Hizmetlerimiz</span>
              <span className="title">
                Hayalinizdeki projeyi 'Hayalden Baskıya' sloganıyla, tüm süreçleri yöneterek gerçeğe dönüştürüyoruz.
              </span>
              <div className="des">ürünlerimiz.</div>
            </div>
          </div>
          <SlickSlider />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
