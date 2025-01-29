import { Link } from "react-router-dom";
import Layout from "../common/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from "react";
import productImage1 from "../../assets/images/Mens/five.jpg";
import productImage2 from "../../assets/images/Mens/two.jpg";
import productImage3 from "../../assets/images/Mens/three.jpg";
import { Rating } from "react-simple-star-rating";
const Product = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [rating, setRating] = useState(4);
  return (
    <>
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav aria-label="breadcrumb" className="py-4">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Product Name
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row product-detail mb-5">
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-2">
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#000",
                      "--swiper-pagination-color": "#000",
                    }}
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    direction={`vertical`}
                    spaceBetween={10}
                    slidesPerView={6}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper mt-2"
                  >
                    <SwiperSlide>
                      <div className="content">
                        <img
                          src={productImage1}
                          alt=""
                          height={100}
                          className="w-100"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="content">
                        <img
                          src={productImage2}
                          alt=""
                          height={100}
                          className="w-100"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="content">
                        <img
                          src={productImage3}
                          alt=""
                          height={100}
                          className="w-100"
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="col-md-10">
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#000",
                      "--swiper-pagination-color": "#000",
                    }}
                    loop={true}
                    spaceBetween={0}
                    navigation={true}
                    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <div className="content">
                        <img src={productImage1} alt="" className="w-100" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="content">
                        <img src={productImage2} alt="" className="w-100" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="content">
                        <img src={productImage3} alt="" className="w-100" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <h2>Product Name</h2>
              <div className="d-flex">
                <Rating initialValue={rating} readonly size={20} />
                <span className="pt-1 ps-2">10 Reviews</span>
              </div>
              <div className="price">
                <span className="me-1 ">$15</span>
                <del>$20</del>
              </div>
              <div className="product-desc mt-3 me-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
                Repudiandae nostrum beatae, id dolore maxime quibusdam aut eum.{" "}
                <br />
                Debitis eos mollitia totam, dolorem deserunt magnam nihil
                perferendis, voluptas enim numquam distinctio?
              </div>

              <div className="pt-3">
                <strong>Select Size:</strong>
                <div className="sizes pt-2">
                  <button className="btn btn-size">S</button>
                  <button className="btn btn-size ms-1">M</button>
                  <button className="btn btn-size ms-1">L</button>
                  <button className="btn btn-size ms-1">XL</button>
                  <button className="btn btn-size ms-1">XXL</button>
                </div>
              </div>
              <div className="my-4">
                <button className="btn btn-primary">Add to Cart</button>
                {/* <button className="btn btn-warning ms-2">
                  Add to Wishlist
                </button>
                <button className="btn btn-secondary ms-2">Compare</button> */}
              </div>
              <hr />
              <div className="sku">
                <strong>SKU:</strong>
                <span className="ms-2">#12345</span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Product;
