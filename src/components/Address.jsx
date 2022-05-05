import React from "react";

const Address = () => {
  return (
    <ul className="wrapper">
      <li data-aos="fade-right" data-aos-duration="1200">
        <div className="list_inner">
          <div className="icon">
            <img src="img/address/phone.png" alt="icon" />
          </div>
          {/* End icon */}
          <div className="content">
            <h3>Telefon</h3>
            <ul>
              <li>
                <a href="Tel: +381 377 756">+381 63 377 756</a>
              </li>
              <li>
                <a href="Tel: +381 65 35 48 367">+381 65 35 48 367</a>
              </li>
            </ul>
          </div>{" "}
          {/* End .content */}
        </div>
      </li>
      <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
        <div className="list_inner">
          <div className="icon">
            <img src="img/address/email.png" alt="icon" />
          </div>
          {/* End icon */}
          <div className="content">
            <h3>Email</h3>
            <ul>
              <li>
                <a href="mailto:ib-themes21@gmail.com">support@gmail.com</a>
              </li>
              <li>
                <a href="mailto:ib-themes21@gmail.com">example@support.com</a>
              </li>
            </ul>
          </div>{" "}
          {/* End .content */}
        </div>
      </li>
      <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
        <div className="list_inner">
          <div className="icon">
            <img src="img/address/insta.png" alt="icon" />
          </div>
          {/* End icon */}
          <div className="content">
            <h3>Instagram</h3>
            <ul>
              <li>
                <a href="https://www.instagram.com/artandlife.rs">
                  @artandlife.rs
                </a>
              </li>
            </ul>
          </div>
          {/* End .content */}
        </div>
      </li>
    </ul>
  );
};

export default Address;
