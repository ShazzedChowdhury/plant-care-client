import React from 'react';
import notFounImg from '../../assets/404-page.png'
import { Link } from 'react-router';
const PageNotFound = () => {
    return (
      <section className="max-w-screen-xl mx-auto px-5 grid justify-center items-center min-h-[100vh]">
        <div className="max-w-full text-center">
          <div className="w-full h-40">
            <img className="object-cover object-center w-full h-full" src={notFounImg} alt="" />
          </div>
          <h1 className='text-xl font-bold text-neutral mb-5'>Page Not Found!</h1>
          <Link className="btn btn-primary text-white" to="/">
            Back to homepage
          </Link>
        </div>
      </section>
    );
};

export default PageNotFound;