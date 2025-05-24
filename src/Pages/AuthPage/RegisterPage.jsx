import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/Firebase/AuthProvider";
import Swal from "sweetalert2";
import { CgArrowLongLeft } from "react-icons/cg";

const RegisterPage = () => {
    const { createUser, updateUserInfo, setUser } = use(AuthContext);
    const [ errorMessage, setErrorMessage ] = useState('')
    const navigate = useNavigate();


    const handleSignUpFrom = (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(e.target)
        const formData = new FormData(form);
        const { userName, email, photoUrl, password } = Object.fromEntries(formData.entries());
       

        //password validation
        if(password.length < 6){
            return setErrorMessage('Password must be atleast 6 character long.')
        }
        else if(!/[A-Z]/.test(password)){
            return setErrorMessage('Password must contain at least one uppercase.')
        }
        else if(!/[a-z]/.test(password)){
            return setErrorMessage('Password must contain at least one lowercase.')
        }


        setErrorMessage('')
        //create user account in firebase
        createUser(email,  password)
        .then(result => {
            if(result.user){
                const user = result.user;
                //update user profile
                updateUserInfo({ displayName: userName, photoURL: photoUrl })
                .then(() => {
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Your account successfully created.",
                      showConfirmButton: false,
                      timer: 1500,
                    })
                    //navigate to homepage
                    navigate('/')
                }).catch(() => {

                });
            }
        })
        .catch(error => {
            if (
              error.message === "Firebase: Error (auth/email-already-in-use)."
            ){

                setErrorMessage("An account with this email already exists.");
            }
        })

    }
  return (
    <section className="min-h-screen grid items-center px-5">
      <div className="card bg-base-100 w-full max-w-sm shadow-lg mx-auto">
        <div className="card-body">
          <div className="flex justify-start">
            <span
             title="Go back"
             onClick={() => navigate('/')}
             className="btn p-0 border-none bg-transparent shadow-none"
            >
              <CgArrowLongLeft className="text-primary" size={30} />
            </span>
          </div>
          <h1 className="text-4xl font-semibold md-4 text-center">
            Sign Up <span className="text-accent">Now!</span>
          </h1>
          <form onSubmit={handleSignUpFrom} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="userName"
              className="input w-full"
              placeholder="Name"
              required
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
              required
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photoUrl"
              className="input w-full"
              placeholder="Photo URL"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Password"
              required
            />
            <p className="text-sm text-red-500 font-normal">{errorMessage}</p>
            <button type="submit" className="btn btn-primary text-white mt-4">
              Sign Up
            </button>
          </form>
          <p className="text-sm font-normal text-neutral">
            Already have an account ?{" "}
            <Link
              to="/auth/log-in-form"
              className="text-blue-500 font-semibold underline"
            >
              Log in
            </Link>{" "}
            here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
