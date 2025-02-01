import React from "react";
import Layout from "../common/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav aria-label="breadcrumb" className="py-3">
              <ol className="breadcrumb">
                {/* <li className="breadcrumb-item">
                  <Link to="/">Dashboard</Link>
                </li> */}
                <li className="breadcrumb-item active" aria-current="page">
                  Dashboard
                </li>
              </ol>
            </nav>
            <p>
              Welcome to your dashboard. Here you can manage your products,
              customers, and orders.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
