import Layout from "../common/Layout";
import productImage from "../../assets/images/Mens/eight.jpg";
import { Link } from "react-router-dom";
const Shop = () => {
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
                  <li className="breadcrumb-item active" aria-current="page">
                    Shop
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="card shadow border-0 mb-3">
                <div className="card-body p-4">
                  <h3>Categories</h3>
                  <hr />
                  <ul>
                    <li className="mb-2">
                      <input type="checkbox" className="rounded" />
                      <label htmlFor="" className="ps-2">
                        Men
                      </label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" className="rounded" />
                      <label htmlFor="" className="ps-2">
                        Kids
                      </label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" className="rounded" />
                      <label htmlFor="" className="ps-2">
                        Women
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card shadow border-0 mb-5">
                <div className="card-body p-4">
                  <h3>Brands</h3>
                  <hr />
                  <ul>
                    <li className="mb-2">
                      <input type="checkbox" className="rounded" />
                      <label htmlFor="" className="ps-2">
                        Puma
                      </label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" className="rounded" />
                      <label htmlFor="" className="ps-2">
                        Levis
                      </label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" className="rounded" />
                      <label htmlFor="" className="ps-2">
                        Gentle Park
                      </label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" className="rounded" />
                      <label htmlFor="" className="ps-2">
                        Ecstasy
                      </label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" className="rounded" />
                      <label htmlFor="" className="ps-2">
                        Tanzim
                      </label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" className="rounded" />
                      <label htmlFor="" className="ps-2">
                        Flying Machine
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row pb-5">
                <div className="col-md-4 col-6">
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
                <div className="col-md-4 col-6">
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
                <div className="col-md-4 col-6">
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
                <div className="col-md-4 col-6">
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
                <div className="col-md-4 col-6">
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
                <div className="col-md-4 col-6">
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
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Shop;
