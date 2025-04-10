import { useState } from "react";

const FormPage = () => {
  const [signInPage, setSignIn] = useState(true);
  const toggleSigIn = () => {
    setSignIn(!signInPage);
  };
  return (
    <form className=" w-3/12 absolute p-12 bg-black/70 my-36 mx-auto right-0 left-0 text-white">
      <h1 className="font-bold  text-3xl p-3 ">
        {signInPage ? "Sign In" : "Sign Up"}
      </h1>
      {!signInPage && (
        <input
          type="text"
          placeholder="Full Name"
          className="p-2 my-4 w-full rounded-sm bg-gray-700"
        />
      )}
      <input
        type="text"
        placeholder="Email or mobile number"
        className="p-2 my-4  w-full rounded-sm bg-gray-700"
      />

      <input
        type="password"
        placeholder="Password"
        className="p-2 my-4 w-full  rounded-sm bg-gray-700"
      />
      <button className=" p-2 my-3 bg-red-700 w-full rounded-sm">
        {/* Sign In{" "} */}
        {signInPage ? "Sign In " : "Sign Up "}
      </button>
      <div className="p-4 my-3">
        <p className="text-gray-500">
          New to Netflix?{" "}
          <span
            className="text-white hover:underline cursor-pointer"
            onClick={toggleSigIn}
          >
            Sign up now.
          </span>
        </p>
      </div>
    </form>
  );
};

export default FormPage;
