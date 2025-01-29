import { Link } from "react-router-dom";
import productImage from "../../assets/images/Mens/eight.jpg";
const FeaturedProducts = () => {
  return (
    <section className="section-2 py-5">
      <div className="container">
        <h2>Featured Products</h2>
        <div className="row mt-4">
          <div className="col-md-3 col-6">
            <div className="product card border-0">
              <div className="card-img">
                <img src={productImage} alt="" className="w-100" />
              </div>
              <div className="card-body pt-3">
                <Link to="/product">Red T-Shirt for Men</Link>
                <div className="price">
                  <span className="me-1">$15</span>
                  <del>$20</del>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="product card border-0">
              <div className="card-img">
                <img src={productImage} alt="" className="w-100" />
              </div>
              <div className="card-body pt-3">
                <Link to="/product">Red T-Shirt for Men</Link>
                <div className="price">
                  <span className="me-1">$15</span>
                  <del>$20</del>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="product card border-0">
              <div className="card-img">
                <img src={productImage} alt="" className="w-100" />
              </div>
              <div className="card-body pt-3">
                <Link to="/product">Red T-Shirt for Men</Link>
                <div className="price">
                  <span className="me-1">$15</span>
                  <del>$20</del>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="product card border-0">
              <div className="card-img">
                <img src={productImage} alt="" className="w-100" />
              </div>
              <div className="card-body pt-3">
                <Link to="/product">Red T-Shirt for Men</Link>
                <div className="price">
                  <span className="me-1">$15</span>
                  <del>$20</del>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="product card border-0">
              <div className="card-img">
                <img src={productImage} alt="" className="w-100" />
              </div>
              <div className="card-body pt-3">
                <Link to="/product">Red T-Shirt for Men</Link>
                <div className="price">
                  <span className="me-1">$15</span>
                  <del>$20</del>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="product card border-0">
              <div className="card-img">
                <img src={productImage} alt="" className="w-100" />
              </div>
              <div className="card-body pt-3">
                <Link to="/product">Red T-Shirt for Men</Link>
                <div className="price">
                  <span className="me-1">$15</span>
                  <del>$20</del>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="product card border-0">
              <div className="card-img">
                <img src={productImage} alt="" className="w-100" />
              </div>
              <div className="card-body pt-3">
                <Link to="/product">Red T-Shirt for Men</Link>
                <div className="price">
                  <span className="me-1">$15</span>
                  <del>$20</del>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="product card border-0">
              <div className="card-img">
                <img src={productImage} alt="" className="w-100" />
              </div>
              <div className="card-body pt-3">
                <Link to="/product">Red T-Shirt for Men</Link>
                <div className="price">
                  <span className="me-1">$15</span>
                  <del>$20</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts
