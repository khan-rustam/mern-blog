/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left Side */}
        <div className=" flex-1">
          <Link to={"/"} className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Vista's
            </span>
            Blog
          </Link>
          <p className="text-sm font-semibold mt-5">
            Embark on your journey with us! 🚀 Sign up for a seamless experience
            of knowledge sharing, vibrant discussions, and endless
            possibilities. Let's make your mark in the MERN-blog community
            together!🌟.
          </p>
        </div>

        {/* Right Sight */}
        <div className=" flex-1">
          <form className=" flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="text"
                placeholder="example@gmail.com"
                id="username"
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput type="text" placeholder="Password" id="username" />
            </div>
            <Button gradientDuoTone={"purpleToPink"} outlinen type="submit">
              Sign Up
            </Button>
          </form>
          <div className=" flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to={"/sign-in"} className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
