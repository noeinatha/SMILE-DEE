"use client";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Icon } from '@iconify/react';
import { makeStyles } from '@mui/material';
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import Alert from '@mui/material/Alert';
// const useStyles = makeStyles({
//   root: {
//     width: 220,
//     // input label when focused
//     "& label.Mui-focused": {
//       color: "#504099",
//     },
//     // focused color for input with variant='outlined'
//     "& .MuiOutlinedInput-root": {
//       "&.Mui-focused fieldset": {
//         borderColor: "#504099",
//       },
//     },
//     "&:hover .MuiInputLabel-root": {
//       color: "#504099",
//     },
//     "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
//       borderColor: "#504099",
//     },
//     ".MuiOutlinedInput-root .Mui-focused fieldset": {
//       borderColor: "#504099",
//     },
//   },
// });


export const LoginForm = () => {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl")|| "/";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setFormValues({ email: "", password: "" });

      const res = await signIn("credentials", {
        redirect: false,
        email: formValues.email,
        password: formValues.password,
        callbackUrl,
      });


      console.log(res);
      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setError("Invalid email or password,Please try again");
      }
    } catch (error: any) {
      setError(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <>
      <div className="w-full h-[580px] bg-white rounded-2xl flex flex-row">
      <div className="w-1/3 h-full bg-darkpurple flex flex-col justify-center items-center gap-5 rounded-l-2xl">
        <div className="flex flex-col gap-10 justify-center">
          <div className="w-full text-3xl text-white text-center">Don’t have an account?</div>
          <div className="w-full text-2xl text-white text-center">Then join us here!</div>
        </div>
        <button className="px-4  py-1.5 border-2 border-white text-white text-sm rounded-xl">SIGN UP</button>    
      </div>
      <div className="w-2/3 h-full flex flex-col justify-center ">
        {error && (
          <div className='flex flex-col justify-center items-center mb-6'>
            <Alert severity="error" className='w-5/12 text-center'>{error}</Alert>
          </div>
        )}
        <form onSubmit = {onSubmit} className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col gap-5 justify-center">
            <div className="w-full text-3xl text-darkpurple text-center">Welcome back to</div>
            <div className="w-full text-4xl font-semibold text-center">SMILE-DEE</div>
  
          </div>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-row gap-5 justify-center items-center'>
              <Icon icon="ic:outline-email" color="#ed7b7b" width="35" height="30"/>
              <TextField id="email" label="Email" name="email" variant="outlined" required value={formValues.email}
              onChange={handleChange}/>
            </div>
            <div className='flex flex-row gap-5 justify-center items-center'>
              <Icon icon="mdi:password-outline" color="#ed7b7b" width="35" height="30"/>
              <TextField id="email" label="Password" name="password" variant="outlined"  required value={formValues.password}
              onChange={handleChange}/>
            </div>
          </div>
          <button className="px-4 py-1.5 bg-darkpurple text-white text-sm rounded-xl">SIGN IN</button>
        </form>

      </div>
    
    </div>
    </>


  );
};
