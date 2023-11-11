'use client'
import TextField from '@mui/material/TextField';
import { Icon } from '@iconify/react';
import {addUser} from '@/actions/addUser';
import { useRouter } from "next/navigation";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const rootStyles = {
  backgroundColor: '#ffd60a',
  border: '3px solid #001d3d',
};

const inputLabelStyles = {
  color: '#003566',
  textTransform: 'capitalize',
};

const rootInputStyles = {
  '&:hover fieldset': {
    border: '2px solid blue!important',
    borderRadius: 0,
  },
  '&:focus-within fieldset, &:focus-visible fieldset': {
    border: '4px solid red!important',
  },
};

const inputStyles = {
  color: 'red',
  paddingLeft: '15px',
  fontSize: '20px',
};

const helperTextStyles = {
  color: 'red',
};
export default function RegisterForm(){  
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const router = useRouter()
      return (
        <>
          <div className="w-full h-[580px] bg-white rounded-2xl flex flex-row">
          <div className="w-2/3 h-full flex flex-col justify-center ">
            <form action = {addUser} className="flex flex-col justify-center items-center gap-10">
            <div className="flex flex-col gap-5 justify-center">
                <div className="w-full text-3xl text-darkpurple text-center">Create Account</div>
      
              </div>
              <div className='w-full flex flex-col gap-5 justify-center items-center'>
                <div className='w-1/2 flex flex-row gap-5 justify-center items-center '>
                  <Icon icon="mdi:user-outline" color="#ed7b7b" width="35" height="30"/>
                  <TextField id="name" label="Name" name="name" variant="outlined" required  fullWidth     
                  sx={{
                  "& .MuiInputLabel-root.Mui-focused": {color: '#504099'},
                  "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                  borderColor: "#974EC3"},
                  },
      }}
        />
                </div>
                <div className='w-1/2 flex flex-row gap-5 justify-center items-center'>
                  <Icon icon="bi:telephone" color="#ed7b7b" width="35" height="30"/>
                  <TextField id="tel" label="Telephone" name="tel" variant="outlined"  required fullWidth
                        sx={{
                          "& .MuiInputLabel-root.Mui-focused": {color: '#504099'},
                          "& .MuiOutlinedInput-root.Mui-focused": {
                          "& > fieldset": {
                          borderColor: "#974EC3"},
                          },
              }}/>
                </div>
                <div className='w-1/2 flex flex-row gap-5 justify-center items-center'>
                  <Icon icon="ic:outline-email" color="#ed7b7b" width="35" height="30"/>
                  <TextField id="email" label="Email" name="email" variant="outlined" required fullWidth
                        sx={{
                          "& .MuiInputLabel-root.Mui-focused": {color: '#504099'},
                          "& .MuiOutlinedInput-root.Mui-focused": {
                          "& > fieldset": {
                          borderColor: "#974EC3"},
                          },
              }}/>
                </div>
                <div className='w-1/2 flex flex-row gap-5 justify-center items-center'>
                  <Icon icon="mdi:password-outline" color="#ed7b7b" width="35" height="30"/>
                  <FormControl variant="outlined" fullWidth     
                          sx={{
                            "& .MuiInputLabel-root.Mui-focused": {color: '#504099'},
                            "& .MuiOutlinedInput-root.Mui-focused": {
                            "& > fieldset": {
                            borderColor: "#974EC3"},
                            },
                          }}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                          id="password"
                          name="password"
                          required
                          type={showPassword ? 'text' : 'password'}
                      
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                  </FormControl>
                </div>
              </div>
              <button type="submit" className="px-4 py-1.5 bg-darkpurple text-white text-sm rounded-xl">SIGN UP</button>
            </form>
          </div>
          <div className="w-1/3 h-full bg-darkpurple flex flex-col justify-center items-center gap-5 rounded-r-2xl">
            <div className="flex flex-col gap-10 justify-center">
              <div className="w-full text-3xl text-white text-center">Already have an account?</div>
              <div className="w-full text-2xl text-white text-center">Then sign in now!</div>
            </div>
            <button className="px-4  py-1.5 border-2 border-white text-white text-sm rounded-xl" onClick={ (e) =>{ e.stopPropagation(); router.push('/login')}}>SIGN IN</button>    
          </div>

          </div>
     </>
      );

};