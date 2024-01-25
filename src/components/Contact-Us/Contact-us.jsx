import { Col, Form, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <div className="mein-contact pt-4">
        <div className="contact">
          <div className="container">
            <div className="row">
              <Col xs={12} md={3}>
                <div className="contact-title">
                  <strong className="text-light">JOIN OUR NEWSLETTER</strong>
                  <p className="text-light">Get 5% off discount every purchase!</p>
                </div>
              </Col>
              <Col xs={12} md={9}>
                <div className="contact-input d-flex">
                  <Form className="p-4 mx-auto">
                    <Row>
                      <Col xs={12} md={4}>
                        <Form.Control
                          className="mb-2"
                          placeholder="Your name"
                        />
                      </Col>
                      <Col xs={12} md={4}>
                        <Form.Control
                          className="mb-2 input-sy"
                          placeholder="Your Email Address"
                        />
                      </Col>
                      <Col xs={12} md={4}>
                        <button className="border border-0 rounded-pill side text-light tool">
                          Sign Up
                        </button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
