import { Carousel, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
const Slider = () => {

    return (

        <Container>
            <Row>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="col-12">
                            <div className="box-1">
                                <div className="shop-img position-relative text-center">
                                    <img
                                        src="https://dici.themes.zone/simple/wp-content/uploads/sites/4/2018/04/DC_Products_5-323x323.jpg"
                                        alt="image"
                                        className='img-fluid'
                                        height={285}
                                    />
                                    <img
                                        className="position-absolute top-0 start-0 hideImg img-fluid"
                                        src="https://dici.themes.zone/simple/wp-content/uploads/sites/4/2018/04/DC_Products_7-323x323.jpg"
                                        alt="image"
                                        // className='img-fluid'
                                        height={285}
                                    />
                                </div>
                                <div className="shop-details">
                                    <div className="product text-center mt-2 fw-bolder">
                                        <span>All Stones</span>
                                        <h5 className="text-dark pt-3 mb-3">
                                            Rhombus Diamond Ring 18k <br /> White Gold
                                        </h5>
                                        <div className="price">
                                            <h3 className="fw-bold">343.85$</h3>
                                        </div>
                                        <div className="desc text-center pt-2 pb-4">
                                            <button className='border border-0 text-light rounded-pill fw-bold'>
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="col-12">
                            <div className="box-1">
                                <div className="shop-img position-relative text-center">
                                    <img
                                        src="https://dici.themes.zone/simple/wp-content/uploads/sites/4/2018/04/DC_Products_5-323x323.jpg"
                                        alt="image"
                                        className='img-fluid'
                                        height={285}
                                    />
                                    <img
                                        className="position-absolute top-0 start-0 hideImg img-fluid"
                                        src="https://dici.themes.zone/simple/wp-content/uploads/sites/4/2018/04/DC_Products_7-323x323.jpg"
                                        alt="image"
                                        // className='img-fluid'
                                        height={285}
                                    />
                                </div>
                                <div className="shop-details">
                                    <div className="product text-center mt-2 fw-bolder">
                                        <span>All Stones</span>
                                        <h5 className="text-dark pt-3 mb-3">
                                            Rhombus Diamond Ring 18k <br /> White Gold
                                        </h5>
                                        <div className="price">
                                            <h3 className="fw-bold">343.85$</h3>
                                        </div>
                                        <div className="desc text-center pt-2 pb-4">
                                            <button className='border border-0 text-light rounded-pill fw-bold'>
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="col-12">
                            <div className="box-1">
                                <div className="shop-img position-relative text-center">
                                    <img
                                        src="https://dici.themes.zone/simple/wp-content/uploads/sites/4/2018/04/DC_Products_5-323x323.jpg"
                                        alt="image"
                                        className='img-fluid'
                                        height={285}
                                    />
                                    <img
                                        className="position-absolute top-0 start-0 hideImg img-fluid"
                                        src="https://dici.themes.zone/simple/wp-content/uploads/sites/4/2018/04/DC_Products_7-323x323.jpg"
                                        alt="image"
                                        // className='img-fluid'
                                        height={285}
                                    />
                                </div>
                                <div className="shop-details">
                                    <div className="product text-center mt-2 fw-bolder">
                                        <span>All Stones</span>
                                        <h5 className="text-dark pt-3 mb-3">
                                            Rhombus Diamond Ring 18k <br /> White Gold
                                        </h5>
                                        <div className="price">
                                            <h3 className="fw-bold">343.85$</h3>
                                        </div>
                                        <div className="desc text-center pt-2 pb-4">
                                            <button className='border border-0 text-light rounded-pill fw-bold'>
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="col-12">
                            <div className="box-1">
                                <div className="shop-img position-relative text-center">
                                    <img
                                        src="https://dici.themes.zone/simple/wp-content/uploads/sites/4/2018/04/DC_Products_5-323x323.jpg"
                                        alt="image"
                                        className='img-fluid'
                                        height={285}
                                    />
                                    <img
                                        className="position-absolute top-0 start-0 hideImg img-fluid"
                                        src="https://dici.themes.zone/simple/wp-content/uploads/sites/4/2018/04/DC_Products_7-323x323.jpg"
                                        alt="image"
                                        // className='img-fluid'
                                        height={285}
                                    />
                                </div>
                                <div className="shop-details">
                                    <div className="product text-center mt-2 fw-bolder">
                                        <span>All Stones</span>
                                        <h5 className="text-dark pt-3 mb-3">
                                            Rhombus Diamond Ring 18k <br /> White Gold
                                        </h5>
                                        <div className="price">
                                            <h3 className="fw-bold">343.85$</h3>
                                        </div>
                                        <div className="desc text-center pt-2 pb-4">
                                            <button className='border border-0 text-light rounded-pill fw-bold'>
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="col-12">
                            <div className="box-1">
                                <div className="shop-img position-relative text-center">
                                    <img
                                        src="https://dici.themes.zone/simple/wp-content/uploads/sites/4/2018/04/DC_Products_5-323x323.jpg"
                                        alt="image"
                                        className='img-fluid'
                                        height={285}
                                    />
                                    <img
                                        className="position-absolute top-0 start-0 hideImg img-fluid"
                                        src="https://dici.themes.zone/simple/wp-content/uploads/sites/4/2018/04/DC_Products_7-323x323.jpg"
                                        alt="image"
                                        // className='img-fluid'
                                        height={285}
                                    />
                                </div>
                                <div className="shop-details">
                                    <div className="product text-center mt-2 fw-bolder">
                                        <span>All Stones</span>
                                        <h5 className="text-dark pt-3 mb-3">
                                            Rhombus Diamond Ring 18k <br /> White Gold
                                        </h5>
                                        <div className="price">
                                            <h3 className="fw-bold">343.85$</h3>
                                        </div>
                                        <div className="desc text-center pt-2 pb-4">
                                            <button className='border border-0 text-light rounded-pill fw-bold'>
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="col-12">
                            <div className="box-1">
                                <div className="shop-img position-relative text-center">
                                    <img
                                        src="https://dici.themes.zone/simple/wp-content/uploads/sites/4/2018/04/DC_Products_5-323x323.jpg"
                                        alt="image"
                                        className='img-fluid'
                                        height={285}
                                    />
                                    <img
                                        className="position-absolute top-0 start-0 hideImg img-fluid"
                                        src="https://dici.themes.zone/simple/wp-content/uploads/sites/4/2018/04/DC_Products_7-323x323.jpg"
                                        alt="image"
                                        // className='img-fluid'
                                        height={285}
                                    />
                                </div>
                                <div className="shop-details">
                                    <div className="product text-center mt-2 fw-bolder">
                                        <span>All Stones</span>
                                        <h5 className="text-dark pt-3 mb-3">
                                            Rhombus Diamond Ring 18k <br /> White Gold
                                        </h5>
                                        <div className="price">
                                            <h3 className="fw-bold">343.85$</h3>
                                        </div>
                                        <div className="desc text-center pt-2 pb-4">
                                            <button className='border border-0 text-light rounded-pill fw-bold'>
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    ...
                </Swiper>
            </Row>
        </Container>
    )
}
export default Slider;
