import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { apiUrl } from "../utils/contants";

const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cnfpassword, setcnfpassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== cnfpassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    axios
      .post(`${apiUrl}/auth/signup`, { email, password })
      .then((response) => {
        console.log(response.data);
        navigate("/login");
      })
      .catch((error) => {
        alert(error.response.data.message || "Something went wrong");
        console.error(error);
      });
  };

  return (
    <div className="container">
      {/* Left Section */}
      <div className="left-section">
        {/* Logo */}
        <div className="logo-container">
          <img
            className="logo"
            src="https://s3-alpha-sig.figma.com/img/f89e/0660/4a5c35a3cbf2cc3d754b9ab757c38b8d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hMMA5hihKgODYCfSi-xnX5q7kkDkDaLVB2YErpzF9ZG9Ty7uGNjKQZAtft9NtVIm4a9qi5VloBZOao7VNbwp8UuQs6ScnhEWqPqT61HM8vCoDQ-mZZK0IooFoJ6HyYq5W~GqDGwVlbfRoqHx1FSATylUAEWGwqoutFDtCpLiE2trGr4w~G9oyU-ae3-SnW0J6NR2QZpq8j81IViWckIu5eslFyjFiQTlGBfokqZrQ~9mLzBa~AQnDvwhIcLmAvLJ~m1WYznYTXIpIBDEL9Sgr0DF7k5cuLZSdt8Eup6WRa7ZN-G35rw0qQRZ8eBmgsAF64vS7VmZ4NW4mugYhEnDZg__"
            alt="lamonpay-logo"
          />
        </div>

        {/* Heading */}
        <p className="heading">
          Join 8 Million Businesses <span>Powering Growth with</span> Lemonpay!
        </p>
      </div>

      {/* Sign Up Form */}
      <div className="login-form">
        <h2>Welcome Sign Up System </h2>
        <p className="subtext">
          Your gateway to seamless transactions and easy payments.
        </p>

        <form>
          {/* Email Input */}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="guddu@lamonpay.com"
            required
          />

          {/* Password Input */}
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min 8 characters"
            />
            {showPassword ? (
              <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
            ) : (
              <FaEye
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>

          {/* confirm Password Input */}
          <label htmlFor="password">Confirm Password</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={cnfpassword}
              onChange={(e) => setcnfpassword(e.target.value)}
              placeholder="Min 8 characters"
            />
            {showPassword ? (
              <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
            ) : (
              <FaEye
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>

          {/* Remember Me and Sign Up */}
          <div className="options">
            <div className="remember-me">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <div
              className="signup"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign In
            </div>
          </div>

          {/* Sign In Button */}
          <button type="submit" className="signin" onClick={handleSignUp}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
