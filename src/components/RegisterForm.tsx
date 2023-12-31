"use client";
import TextField from "@mui/material/TextField";
import { Icon } from "@iconify/react";
import { addUser } from "@/actions/addUser";
import { useRouter } from "next/navigation";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
export default function RegisterForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const router = useRouter();
  return (
    <>
      <div className="w-full h-[580px] bg-white rounded-2xl flex flex-row">
        <div className="w-2/3 h-full flex flex-col justify-center ">
          <form
            action={addUser}
            className="flex flex-col justify-center items-center gap-10"
          >
            <div className="flex flex-col gap-5 justify-center">
              <div className="w-full text-3xl text-darkpurple text-center font-inria">
                Create Account
              </div>
            </div>
            <div className="w-full flex flex-col gap-5 justify-center items-center">
              <div className="w-1/2 flex flex-row gap-5 justify-center items-center ">
                <Icon
                  icon="mdi:user-outline"
                  color="#ed7b7b"
                  width="35"
                  height="30"
                />
                <TextField
                  id="name"
                  label="Name"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#504099" },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#974EC3",
                      },
                    },
                  }}
                />
              </div>
              <div className="w-1/2 flex flex-row gap-5 justify-center items-center">
                <Icon
                  icon="bi:telephone"
                  color="#ed7b7b"
                  width="35"
                  height="30"
                />
                <TextField
                  id="tel"
                  label="Telephone"
                  name="tel"
                  variant="outlined"
                  required
                  fullWidth
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#504099" },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#974EC3",
                      },
                    },
                  }}
                />
              </div>
              <div className="w-1/2 flex flex-row gap-5 justify-center items-center">
                <Icon
                  icon="ic:outline-email"
                  color="#ed7b7b"
                  width="35"
                  height="30"
                />
                <TextField
                  id="email"
                  label="Email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#504099" },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#974EC3",
                      },
                    },
                  }}
                />
              </div>
              <div className="w-1/2 flex flex-row gap-5 justify-center items-center">
                <Icon
                  icon="mdi:password-outline"
                  color="#ed7b7b"
                  width="35"
                  height="30"
                />
                <FormControl
                  variant="outlined"
                  fullWidth
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": { color: "#504099" },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                      "& > fieldset": {
                        borderColor: "#974EC3",
                      },
                    },
                  }}
                >
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <OutlinedInput
                    id="password"
                    name="password"
                    required
                    type={showPassword ? "text" : "password"}
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
            <button
              type="submit"
              className="w-fit h-fit px-4 py-2 text-white bg-darkpurple font-sans font-medium text-lg rounded-2xl hover:bg-vividpurple font-inria"
            >
              SIGN UP
            </button>
          </form>
        </div>
        <div className="w-1/3 h-full bg-darkpurple flex flex-col justify-center items-center gap-5 rounded-r-2xl">
          <div className="flex flex-col gap-10 justify-center">
            <div className="w-full text-3xl text-white text-center font-inria">
              Already have an account?
            </div>
            <div className="w-full text-2xl text-white text-center font-inria">
              Then sign in now!
            </div>
          </div>
          <button
            className="w-fit h-fit px-4 py-2 text-white bg-darkpurple font-sans font-medium text-lg rounded-2xl border-2 border-white hover:bg-vividpurple font-inria"
            onClick={(e) => {
              e.stopPropagation();
              router.push("/login");
            }}
          >
            SIGN IN
          </button>
        </div>
      </div>
    </>
  );
}
