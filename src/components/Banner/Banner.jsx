import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bannerimg2 from "../Bannerimg2/Bannerimg2";
import Bannerimg1 from './Bannerimg1';

const Banner = () => {
  return (
    <div className="banner  text-center mt-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="py-3 py-md-5">
            <h3 className='text-danger fw-normal fs-2 mb-3'>Introducing</h3>
            <h2 className='mb-3'>color fantasy</h2>
            <p className='fw-light'>sophisticated collection inspired by passion</p>
            <div className="banner-img-2 text-center">
              <Bannerimg2 />
            </div>
            <div className="desc pt-3 pt-md-5">
              <button className="border border-0 rounded-pill side text-light">Learn more</button>
            </div>
          </Col>
          <div className="col-6 py-80">
            <div className="banner-img">
                <Bannerimg1/>
            </div>
        </div>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
