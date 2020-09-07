import React, { Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      autoplay: true,
    };
    return (
      <div>
        {/*<h2>Center Mode</h2>*/}
        <Slider {...settings}>
          <div>
            <h1>이미지1</h1>
          </div>
          <div>
            <h1>이미지2</h1>
          </div>
          <div>
            <h1>이미지3</h1>
          </div>
          <div>
            <h1>이미지4</h1>
          </div>
        </Slider>
      </div>
    );
  }
}
