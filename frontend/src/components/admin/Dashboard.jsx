import React from "react";
import Layout from "../common/Layout";
import Sidebar from './auth/common/Sidebar';

const Dashboard = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav aria-label="breadcrumb" className="py-3">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">
                  Dashboard
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Sales</h5>
                    <p className="card-text">Total sales: $1,200</p>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="btn btn-sm btn-success">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Orders</h5>
                    <p className="card-text">Total Orders: 100</p>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "45%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="btn btn-sm btn-success">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Users</h5>
                    <p className="card-text">Total Users: 100</p>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "95%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="btn btn-sm btn-success">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-12">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Recent Orders</h5>
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Customer Name</th>
                            <th>Status</th>
                            <th>Total Amount</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>12345</td>
                            <td>John Doe</td>
                            <td>Completed</td>
                            <td>$1,200</td>
                            <td>2022-01-01</td>
                          </tr>
                          <tr>
                            <td>67890</td>
                            <td>Jane Smith</td>
                            <td>Canceled</td>
                            <td>$800</td>
                            <td>2022-02-15</td>
                          </tr>
                          <tr>
                            <td>34567</td>
                            <td>Alice Johnson</td>
                            <td>Pending</td>
                            <td>$500</td>
                            <td>2022-03-20</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
