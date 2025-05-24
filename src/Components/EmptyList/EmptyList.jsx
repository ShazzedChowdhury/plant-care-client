import React from 'react';
import { Link } from 'react-router';

const EmptyList = () => {
    return (
      <section className="max-w-screen-xl mx-auto px-5 py-20">
        <div className='bg-gray-100 py-20 rounded-lg space-y-5 text-center'>
          <h1 className='text-lg md:text-3xl font-bold text-neutral'>
            Add your first plant to get started!
          </h1>
          <Link className="btn btn-primary text-white" to="/add-plant-form">
            Add Plant
          </Link>
        </div>
      </section>
    );
};

export default EmptyList;