'use client'
import TextField from '@mui/material/TextField';
import { Icon } from '@iconify/react';
export default function RegisterForm(){  
    return (
        <>
          <div className="w-full h-[580px] bg-white rounded-2xl flex flex-row">
          <div className="w-2/3 h-full flex flex-col justify-center ">
            <form className="flex flex-col justify-center items-center gap-10">
              <div className="flex flex-col gap-5 justify-center">
                <div className="w-full text-3xl text-darkpurple text-center">Create Account</div>
      
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex flex-row gap-5 justify-center items-center'>
                  <Icon icon="mdi:user-outline" color="#ed7b7b" width="35" height="30"/>
                  <TextField id="name" label="Name" name="name" variant="outlined" required />
                </div>
                <div className='flex flex-row gap-5 justify-center items-center'>
                  <Icon icon="bi:telephone" color="#ed7b7b" width="35" height="30"/>
                  <TextField id="tel" label="Telephone" name="tel" variant="outlined"  required />
                </div>
                <div className='flex flex-row gap-5 justify-center items-center'>
                  <Icon icon="ic:outline-email" color="#ed7b7b" width="35" height="30"/>
                  <TextField id="email" label="Email" name="email" variant="outlined" required />
                </div>
                <div className='flex flex-row gap-5 justify-center items-center'>
                  <Icon icon="mdi:password-outline" color="#ed7b7b" width="35" height="30"/>
                  <TextField id="email" label="Password" name="password" variant="outlined"  required />
                </div>
              </div>
              <button className="px-4 py-1.5 bg-darkpurple text-white text-sm rounded-xl">SIGN UP</button>
            </form>
          </div>
          <div className="w-1/3 h-full bg-darkpurple flex flex-col justify-center items-center gap-5 rounded-r-2xl">
            <div className="flex flex-col gap-10 justify-center">
              <div className="w-full text-3xl text-white text-center">Already have an account?</div>
              <div className="w-full text-2xl text-white text-center">Then sign in now!</div>
            </div>
            <button className="px-4  py-1.5 border-2 border-white text-white text-sm rounded-xl">SIGN IN</button>    
          </div>
        
        </div>
        </>
    
    
      );

};