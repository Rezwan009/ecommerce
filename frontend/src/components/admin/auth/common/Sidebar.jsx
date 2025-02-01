import React from "react";
import { useApi } from "../../../../context/ApiContext";

const Sidebar = () => {
  const { logout } = useApi();
  return (
    <div className="card shadow mb-5 sidebar">
      <div className="card-body p-4">
        <ul>
          <li>
            <a href="#" className="text-decoration-none">
              <i className="bi bi-house-fill mr-2"></i> Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none">
              <i className="bi bi-house-fill mr-2"></i> Categories
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none">
              <i className="bi bi-house-fill mr-2"></i> Brands
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none">
              <i className="bi bi-house-fill mr-2"></i> Products
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none">
              <i className="bi bi-cart-fill mr-2"></i> Orders
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none">
              <i className="bi bi-person-fill mr-2"></i> Users
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none">
              <i className="bi bi-file-earmark-text mr-2"></i> Shipping
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none">
              <i className="bi bi-file-earmark-text mr-2"></i> Change Password
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-decoration-none" onClick={logout}>
              <i className="bi bi-file-earmark-text mr-2"></i> Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
