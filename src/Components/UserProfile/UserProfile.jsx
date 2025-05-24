import React from 'react';
import { Tooltip } from 'react-tooltip';

const UserProfile = ({user}) => {
    return (
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
          {/* user image */}
          <img data-tooltip-id='user-profile' className='w-full h-full object-cover' src={user?.photoURL} />

          <Tooltip
            id='user-profile'
            place="bottom-start"
            className="z-50"
            delayHide={100}
          >
            <h3 className='text-sm font-normal'>{user?.displayName}</h3>
          </Tooltip>
        </div>
      </div>
    );
};

export default UserProfile;