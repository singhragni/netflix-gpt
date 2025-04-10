import { useRef, useState } from "react";
import validateFormData from "../utils/validateFormData";

const FormPage = () => {
  const [signInPage, setSignIn] = useState(true);
  const toggleSigIn = () => {
    setSignIn(!signInPage);
  };
const [error, setError] = useState(null)
 const email = useRef(null);
 const password = useRef(null);

  const handleValidationData = () =>{

  
    const isValid = validateFormData(email.current.value,password.current.value);
    console.log("fffff")
    console.log(isValid)
    console.log(isValid?.errors?.password );
    setError(isValid?.errors?.password || null)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className=" w-3/12 absolute p-12 bg-black/70 my-36 mx-auto right-0 left-0 text-white">
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
        ref= {email}
        type="email"
        placeholder="Email or mobile number"
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
        className="p-2 my-4  w-full rounded-sm bg-gray-700"
      />

      <input
        ref={password}
        type="password"
        placeholder="Password"
        className="p-2 my-4 w-full  rounded-sm bg-gray-700"
      />
      <button type = "submit" onClick={()=>handleValidationData(email)} className=" p-2 my-3 bg-red-700 w-full rounded-sm">
        {signInPage ? "Sign In " : "Sign Up "}
      </button>
      <div className="p-4 my-4">
      {error && <p className="text-red-500 my-1">{"🚫 " +error}</p>}
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
