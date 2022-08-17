/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { MdAccountCircle, MdLogout } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
export default function Nav() {
  const { currentUser, logout } = useAuth();

  return (
    <div className="sm:mx-2 md:px-20  px-5 sm:px-10 py-8 flex  justify-between text-center bg-white z-10">
      <div className="font-semibold text-xl sm:text-2xl">
        <Link to="/">
          {" "}
          <span>Parabot</span>
        </Link>
      </div>
      <div className="space-x-2 sm:space-x-20 ">
        <a className="hover:underline" href="#">
          Home{" "}
        </a>
        <a className="hover:underline" href="#">
          Product{" "}
        </a>
        <a className="hover:underline" href="#">
          Collection{" "}
        </a>
      </div>

      <div>
        {currentUser ? (
          <>
            <div className="space-x-8 flex text-center ">
              <RiLockPasswordLine size={23} className="cursor-pointer" />

              <span>{currentUser?.providerData[0].displayName}</span>
              <MdLogout size={23} className="cursor-pointer" onClick={logout} />
            </div>
          </>
        ) : (
          <>
            <div className="space-x-8 flex text-center ">
              <RiLockPasswordLine size={23} className="cursor-pointer" />
              <Link to="/login">
                {" "}
                <MdAccountCircle size={23} className="cursor-pointer" />
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
