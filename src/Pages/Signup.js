import { React, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Cheakbox from "../components/Cheakbox";
import Futter from "../components/futter";
import Input from "../components/Input";
import Nav from "../components/Nav";
import { useAuth } from "../contexts/AuthContext";
import image from "../image/Litontt.PNG";
export default function Signup() {
  const [userName, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [cheak, setCheak] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { signup } = useAuth();
  const Navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("password is not match");
    }
    try {
      setError("");
      setLoading(true);
      signup(email, password, userName);
      setLoading(false);
      Navigate("/login");
    } catch (e) {
      setLoading(false);
      setError("something rong");
      alert(error);
    }
  };
  return (
    <>
      <Nav />
      <div className="flex h-[100vh] w-[100%] mx-auto justify-center sm:flex-row flex-col sm:mt-0 mt-40">
        <div className="lg:w-6/12 md:6/12 sm:4/12  mt-20 ">
          <img
            src={image}
            alt=""
            className="md:w-[80%] sm:w-[70%] w-[60%] md:ml-[5rem] sm:ml-[3rem] ml-[6rem]"
          />
        </div>
        <div className="lg:w-7/12 md:w-5/12 sm:w-4/12 mx-auto pt-20 ">
          <div className="lg:ml-40 md:ml-10 sm:-ml-20">
            <h1 className="md:text-3xl text-2xl sm:text-2xl mb-2">
              Sign up to Parabot
            </h1>
            <span className="mb-10">
              Already a account{" "}
              <NavLink className="underline text-[#1CC0A9]" to="/login">
                Log in
              </NavLink>
            </span>
          </div>
          <div>
            <form
              className="lg:ml-40 md:ml-10 sm:-ml-20 "
              onSubmit={handleClick}
            >
              <Input
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                inputname="Username"
                placeholder="Enter your username"
              />
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                inputname="Email"
                placeholder="Enter your email"
              />
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                inputname="Password"
                placeholder="Password"
              />
              <Input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                inputname="Confirm Password"
                placeholder="Confirm password"
              />
              <Cheakbox
                value={cheak}
                onChange={(e) => setCheak(e.target.value)}
              />
              <Button
                disabled={loading}
                className="bg-[#1CC0A9] py-2 px-10 text-center text-white mt-2 rounded-md"
              >
                Create an account
              </Button>
              {error && <p className="pt-4">{error}</p>}
            </form>
          </div>
        </div>
      </div>
      <Futter />
    </>
  );
}
