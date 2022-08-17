import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Futter from "../components/futter";
import Input from "../components/Input";
import Nav from "../components/Nav";
import { useAuth } from "../contexts/AuthContext";
import image from "../image/login.png";
export default function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { login, currentUser } = useAuth();
  const navigate = useNavigate();
  console.log(currentUser);
  async function handleLogin(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (e) {
      setError("Something wrong");
      setLoading(false);
    }
  }
  return (
    <>
      <Nav />
      <div className="flex h-[100vh] w-[100%] mx-auto justify-center sm:flex-row flex-col sm:mt-0 mt-[7rem]">
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
              Login to Parabot
            </h1>
          </div>
          <div>
            <form
              className="lg:ml-40 md:ml-10 sm:-ml-20 "
              onSubmit={handleLogin}
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                inputname="Email"
                placeholder="Enter your email"
              />
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                inputname="Password"
                placeholder="Enter your password"
              />
              <div className=" mt-4">
                <Button
                  disabled={loading}
                  className="bg-[#1CC0A9] py-2 px-[8.7rem] lg:px-[8.7rem] md:px-[7.3rem] sm:px-[6.3rem] text-center text-white mt-2 rounded-md block"
                >
                  Login
                </Button>
                <span className="pt-4 ">{error && error}</span>
              </div>
            </form>
            <div className="flex justify-center align-middle mt-[2rem]">
              <span className="block">Or</span>
              <div className="mt-8 flex justify-center align-middle -ml-[4rem] space-x-2">
                <FcGoogle className="mt-1" />
                <a href="/" className="">
                  sign up google
                </a>
              </div>
            </div>
            <div className="flex justify-center sm:mt-10 mt-4 sm:pb-0 pb-6">
              <span className="text-sm">
                No account?{" "}
                <Link to="/signup" className="underline">
                  Create a account
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Futter />
    </>
  );
}
