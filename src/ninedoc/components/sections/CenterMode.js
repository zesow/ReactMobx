import React, { Component } from "react";
import Slider from "react-slick";
import { Image } from "semantic-ui-react";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: 1,
      speed: 2000,
      autoplay: true,
      arrows: false,
      pauseOnHover: true
    };
    return (
      <div>
        {/*<h2>Center Mode</h2>*/}
        <Slider {...settings}>
          <div>
            <h1>
              <Image
                src={require('./../../assets/images/elephant.jpg')}
                alt="Features tile icon 02"
                href="/9doc-explain"
                width={10000}
                height={10000}
              />
            </h1>
          </div>
          <div>
          <h1>
              <Image
                src={require('./../../assets/images/dogs.jpg')}
                alt="Features tile icon 02"
                href="/9doc-explain"
                width={10000}
                height={10000}
              />
            </h1>
          </div>
          <div>
          <h1>
              <Image
                src={require('./../../assets/images/cat.jpg')}
                alt="Features tile icon 02"
                href="/9doc-explain"
                width={10000}
                height={10000}
              />
            </h1>
          </div>
          <div>
          <h1>
              <Image
                src={require('./../../assets/images/giraffe.png')}
                alt="Features tile icon 02"
                href="/9doc-explain"
                width={10000}
                height={10000}
              />
            </h1>
          </div>
        </Slider>
      </div>
    );
  }
}
