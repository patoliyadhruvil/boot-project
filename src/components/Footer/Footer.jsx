import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <Col xs={12} lg={4}>
              <div className="logo-title text-center">
                <h2 className="fw-normal">DIAMOND CITY</h2>
                <p>JEWELLERY BOUTIQUE</p>
              </div>
            </Col>
            <Col xs={12} lg={2}>
              <div className="text-title">
                <h2 className="fw-bolder">Company</h2>
                <ul>
                  <li>
                    <a href="#" className="text-dark">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-dark">
                      We are hiring
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-dark">
                      Affiliate Program
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-dark">
                      Press Links
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-dark">
                      Business Accounts
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} lg={2}>
              <div className="text-title">
                <h2 className="fw-bolder">Help</h2>
                <ul>
                  <li>
                    <a href="#" className="text-dark">
                      Email Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-dark">
                      Help & FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-dark">
                      Make a Return
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-dark">
                      Shipping Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-dark">
                      Gift Cards
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} lg={2}>
              <div className="text-title">
                <h2 className="fw-bolder">Quick Links</h2>
                <ul>
                  <li>
                    <a href="#" className="text-dark">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-dark">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-dark">
                      Affiliates
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-dark">
                      Return Policy
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} lg={2}>
              <div className="text-title">
                <h2 className="fw-bolder">Contact Us</h2>
                <ul>
                  <li>
                    <a href="#" className="text-dark">
                      1 Wintergreen Dr. Huntley IL 60142, Usa
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-dark">
                      info@sky.com
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-dark">
                      0123-456-789
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
