import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrow: false,
          slidesToShow: 1,
          speed: 300,
        },
      },
    ],
  };

  const testimonialContent = [
    {
      img: "1",
      desc: `Rodjena u Beogradu. Master likovnih umetnosti. Član ULUS-a. Profesor u umetničkoj školi 'Djuro Salaj'. Radila u Pragu i u Rusiji. Učestvovala u više umetničkih projekata i izlagala na više grupnih izložbi u zemlji i inostranstvu.`,
      name: "Tamara Nikić",
      designation: "",
      delayAnimation: "",
    },
    {
      img: "2",
      desc: `Dizajner nakita sa preko 23 godina rada u zlatarstvu. Učestvovala u grupnim izložbama. Poseduje višegodišnje iskustvo u radu sa epoksidnom smolom i slikanjem.`,
      name: "Dragana Zec",
      designation: "",
      delayAnimation: "100",
    },
    {
      img: "3",
      desc: `Dizajner nakita, vitraža i saradnik.`,
      name: "Dragan Lisavac",
      designation: "",
      delayAnimation: "200",
    },
  ];

  return (
    <Slider {...settings}>
      {testimonialContent.map((val, i) => (
        <li
          key={i}
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay={val.delayAnimation}
        >
          <div className="list_inner">
            <div className="details">
              <div className="author">
                {/* End image */}

                <div className="short">
                  <h3>{val.name}</h3>
                  <span>{val.designation}</span>
                </div>
                {/* End short description */}
              </div>
              {/* End author */}

              <div className="icon">
                <img className="svg" src="img/svg/quote.svg" alt="quote" />
              </div>
              {/* End right quote icon */}
            </div>

            <div className="text">
              <p>{val.desc}</p>
            </div>
            {/* End description */}
          </div>
        </li>
      ))}
    </Slider>
  );
}
