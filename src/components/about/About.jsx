import React, { useState } from "react";
import Skills from "../skills/Skills";
import Modal from "react-modal";
import ModalContent from "./modal/ModalContent";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    //    ABOUT
    <div className="edina_tm_about" id="about">
      <div className="container">
        <div className="about_title">
          <h3>O nama</h3>
        </div>
        <div className="content">
          <div
            className="leftpart"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="info">
              {/* <h3>
                Hi, I'm <span>Rokers Nelson</span>
              </h3> */}
              <p>
                Art&Life je  centar za razvijanje kreativnih potencijala za decu i ljude svih generacija koji su odlučili da razviju svoje talente.
              </p>
            </div>
            <div className="my_skills">
              <h3 className="title">Šta možete očekivati od Art&Life centra?</h3>
              {/* <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                ipsum sit nibh amet egestas tellus.
              </p> */}
              <div className="wrapper">
                <div className="dodo_progress">
                  <Skills />
                </div>
              </div>
              {/* <div className="edina_tm_button">
                <button
                  type="submit"
                  className="color"
                  onClick={toggleModalOne}
                >
                  More About Me
                </button>
              </div> */}
            </div>
          </div>
          {/* End leftpart */}

          <div className="rightpart">
            <div className="image">
              <img src="img/thumbs/26-35.jpg" alt="thumb" />

              <div
                className="main"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "img/about/2.jpeg"
                  })`,
                }}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              ></div>

              {/* <div
                className="experience"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="info">
                  <h3>6+ Years</h3>
                  <span>Of Experiance</span>
                </div>
              </div> */}
            </div>
          </div>
          {/* End righttpart */}
        </div>
      </div>

      {/* Start About Details Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal about-popup-wrapper"
        overlayClassName="custom-overlay "
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap scrollable">
              <ModalContent />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  About Details Modal */}
    </div>
    // /ABOUT
  );
};

export default About;
