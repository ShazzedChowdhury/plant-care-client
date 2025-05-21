import React, { use, useState } from 'react';
import { CgArrowLongLeft } from 'react-icons/cg';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/Firebase/AuthProvider';
import Swal from 'sweetalert2';

const LogInPage = () => {
    const { signInUser, signInWithGoogle } = use(AuthContext);
    const [ show, setShow ] = useState(false)
    const navigate = useNavigate();

    const handleSignInForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        //authenticate with firebase
        signInUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            
            //sweet alert
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Logged in successfully.",
              showConfirmButton: false,
              timer: 1500,
            });

            navigate('/')
        }).catch(error => {
            if(error || error.message === 'Firebase: Error (auth/invalid-credential).'){
                Swal.fire({
                  position: "center",
                  icon: "error",
                  title: "Invalid credencials",
                  showConfirmButton: false,
                  timer: 1500,
                });
            }
        })
    }

    //Google sing in method
    const handleSignInwithGoogle =() => {
        signInWithGoogle()
        .then(result => {
          const loggedUser = result.user;
          //sweet alert
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Logged in successfully.",
            showConfirmButton: false,
            timer: 1500,
          });

          navigate('/')
        }).catch(error => {
            const message = error.message
            Swal.fire({
              position: "center",
              icon: "error",
              title: {message},
              showConfirmButton: false,
              timer: 1500,
            });
        })
    }
    return (
      <section className="min-h-screen grid items-center px-5">
        <div className="card bg-base-100 w-full max-w-sm shadow-lg mx-auto">
          <div className="card-body">
            <div className="flex justify-start">
              <span
                title="Go back"
                onClick={() => navigate("/")}
                className="btn p-0 border-none bg-transparent shadow-none"
              >
                <CgArrowLongLeft className="text-primary" size={30} />
              </span>
            </div>
            <h1 className="text-4xl font-semibold md-4 text-center">
              Sign Up <span className="text-accent">Now!</span>
            </h1>
            <form onSubmit={handleSignInForm} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input w-full"
                  placeholder="Password"
                  required
                />
                <span
                 onClick={() => setShow(prev => !prev)}
                 className="btn btn-xs bg-transparent shadow-none border-none absolute top-2 right-2 text-lg z-10">
                  {show ? <VscEyeClosed /> : <VscEye />}
                </span>
              </div>
              <button type="submit" className="btn btn-primary text-white mt-4">
                Sign In
              </button>
            </form>
            {/* Google */}
            <button
             onClick={handleSignInwithGoogle}
             className="btn bg-white text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <p className="text-sm font-normal text-[#444444]">
              Don't have any account?{" "}
              <Link
                to="/auth/register-form"
                className="text-blue-500 font-semibold underline"
              >
                Register
              </Link>{" "}
              now.
            </p>
          </div>
        </div>
      </section>
    );
};

export default LogInPage;