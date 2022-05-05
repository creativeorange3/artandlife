import React from "react";
import ReactTooltip from "react-tooltip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrow: false,
          autoplay: false,
          draggable: true,
          speed: 300,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="portfolio_inner my_carousel gallery_zoom">
      <ul data-aos="fade-right" data-aos-duration="1200">
        <Slider {...settings}>
          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/1.jpg"
                    data-tip
                    data-for="product"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>
          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/2.jpg"
                    data-tip
                    data-for="product"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>
          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/3.jpg"
                    data-tip
                    data-for="product"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>
          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/4.jpg"
                    data-tip
                    data-for="product"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>
          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/5.jpg"
                    data-tip
                    data-for="product"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>
          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/6.jpg"
                    data-tip
                    data-for="product"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>
          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/7.jpg"
                    data-tip
                    data-for="product"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>
          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/8.jpg"
                    data-tip
                    data-for="product"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>
          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/9.jpg"
                    data-tip
                    data-for="product"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>
          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/10.jpg"
                    data-tip
                    data-for="product"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>
          <li>
            <div className="list_inner">
              <div className="image">
                  <img
                    src="img/portfolio/11.jpg"
                    data-tip
                    data-for="product"
                    alt="portfolio"
                  />
              </div>
            </div>
          </li>
          {/* End li */}
        </Slider>
      </ul>
    </div>
  );
};

export default Portfolio;
