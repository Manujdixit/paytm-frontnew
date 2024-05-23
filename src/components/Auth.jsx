import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

//trpc
const Auth = ({ type }) => {
  const navigate = useNavigate();
  const [postInputs, setpostInputs] = useState({
    name: "",
    username: "",
    password: "",
  });

  async function sendRequest() {
    try {
      console.log(postInputs);
      const response = await axios.post(
        type === "signup"
          ? `http://localhost:4001/api/v1/user/signup`
          : `http://localhost:4001/api/v1/user/signin`,
        postInputs
      );
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="px-10 h-screen flex justify-center flex-col items-center">
        <div className="flex justify-center flex-col  xl:max-w-screen-sm">
          <div className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-2 font-libre">
            {type === "signin" ? (
              <div>Welcome back!</div>
            ) : (
              <div>Secure Payments Made Easy</div>
            )}
          </div>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 mb-5">
            {type === "signin" ? (
              <div>
                Access your account securely and manage your payments with ease.
              </div>
            ) : (
              <div>
                Experience seamless and secure transactions with our
                user-friendly payment platform, designed to make your life
                easier.
              </div>
            )}
          </p>
          <div className="mb-4 space-y-4">
            {type === "signup" ? (
              <LabelledInput
                label="Name"
                onChange={(e) => {
                  // setpostInputs((c) => ({
                  //   ...c,
                  //   name: e.target.value,
                  // }));
                  setpostInputs({
                    ...postInputs,
                    name: e.target.value,
                  });
                }}
              />
            ) : null}

            <LabelledInput
              label="Email"
              onChange={(e) => {
                // setpostInputs((c) => ({
                //   ...c,
                //   name: e.target.value,
                // }));
                setpostInputs({
                  ...postInputs,
                  username: e.target.value,
                });
              }}
            />
            <LabelledInput
              label="Password"
              type={"password"}
              onChange={(e) => {
                // setpostInputs((c) => ({
                //   ...c,
                //   name: e.target.value,
                // }));
                setpostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <Button onClick={sendRequest} color="primary" className="min-w-96">
              {type === "signup" ? "Sign up" : "Signin"}
            </Button>
          </div>
          <div className="text-slate-400  mt-2">
            {type === "signup"
              ? "Already have an account? "
              : "Don't have an account? "}
            <Link
              to={type === "signup" ? "/signin" : "/signup"}
              className="underline"
            >
              {type === "signup" ? "Sign in" : "Sign up"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;

function LabelledInput({ type, label, onChange }) {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input
        className="max-w-96"
        type={type || "text"}
        label={label}
        onChange={onChange}
        required
      />
    </div>
  );
}
