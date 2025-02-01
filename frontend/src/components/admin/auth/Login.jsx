import React from "react";
import Layout from "./../../common/Layout";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useApi } from "../../../context/ApiContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const Api = useApi();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    
    await Api.post("/admin/login", data).then((res) => {
      if (res.status === 200) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));
        navigate("/admin/dashboard");
      } else {
        toast.error(res.message);
      }
    }).catch(function (err) { 
      toast.error(err);
    });
  };
  return (
    <Layout>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-12">
            <div className="card shadow login-form">
              <div className="card-body">
                <h3 className="card-title text-center">
                  <strong>Admin Login</strong>
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group mb-3">
                    <label for="email">Email address</label>
                    <input
                      {...register("email", {
                        required: "This field is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Please enter a valid email address",
                        },
                      })}
                      type="email"
                      className={`form-control ${errors.email && "is-invalid"}`}
                      id="email"
                      placeholder="Enter email"
                    />
                    {errors.email && (
                      <p className="invalid-feedback">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      className={`form-control ${
                        errors.password && "is-invalid"
                      }`}
                      id="password"
                      placeholder="Enter password"
                      {...register("password", {
                        required: "This field is required",
                        minLength: {
                          value: 6,
                          message:
                            "Password must be at least 6 characters long",
                        },
                      })}
                    />
                    {errors.password && (
                      <p className="invalid-feedback">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <button type="submit" className="btn btn-secondary">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
