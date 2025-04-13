import {  useRef, useState } from "react";
import validateFormData from "../utils/validateFormData";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";

const FormPage = () => {
  const [signInPage, setSignIn] = useState(true);
  const toggleSigIn = () => {
    setSignIn(!signInPage);
  };
  const [error, setError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleValidationData = () => {
    const isValid = validateFormData(
      email.current.value,
      password.current.value
    );
    setError(isValid?.errors?.password);
    if (isValid) return;

    if (!signInPage) {
      console.log("dhdhhdh");
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("sucee");
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
          //const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(auth.currentUser,{
              displayName: "ragini",
              photoURL: "https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABaaidpi17hiywztid8SBKdX2wcQXylPdsQPM7RyT8Brb7mrVvrsHk8rbr_vc8fVK-eqXiZBBngzv91F0F5VgOByLyS5y_IfrBVJ2.png?r=eb5"
          }).then(() =>{
          }

          ).catch((error) =>{
            setError(error)
          })
         
        })
        .catch((error) => {
         // const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage)
        });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" w-3/12 absolute p-12 bg-black/70 my-36 mx-auto right-0 left-0 text-white"
    >
      <h1 className="font-bold  text-3xl p-3 ">
        {signInPage ? "Sign In" : "Sign Up"}
      </h1>
      {!signInPage && (
        <input
          ref={name}
          type="text"
          placeholder="Full Name"
          className="p-2 my-4 w-full rounded-sm bg-gray-700"
        />
      )}
      <input
        ref={email}
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
      <button
        type="submit"
        onClick={() => handleValidationData(email)}
        className=" p-2 my-3 bg-red-700 w-full rounded-sm"
      >
        {signInPage ? "Sign In " : "Sign Up "}
      </button>
      <div className="p-4 my-4">
        {error && <p className="text-red-500 my-1">{"🚫 " + error}</p>}
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
