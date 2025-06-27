import React, { use, useEffect, useState } from 'react';
import { ImSun } from 'react-icons/im';
import { LuSunMoon } from 'react-icons/lu';
import { ThemeContext } from '../../Contexts/Theme/ThemeProvider';

const ToggleButton = () => {
   const {theme, setTheme} = use(ThemeContext)
    
    return (
      <label className="swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input
         type="checkbox"
         onChange={e => {
            if(e.target.checked) {
                setTheme("dark")
            } else{
                setTheme("light")
            }
        }}
        checked={theme === "light" ? false : true}
        />

        {/* sun icon */}
        <ImSun  className='swap-on' size={30}/>

        {/* moon icon */}
        <LuSunMoon  className='swap-off' size={30}/>
      </label>
    );
};

export default ToggleButton;