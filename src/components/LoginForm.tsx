"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { Icon } from "@iconify/react";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Image from "next/image";
export const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

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
            <div className="w-full text-3xl text-white text-center font-inria">
              Don’t have an account?
            </div>
            <div className="w-full text-2xl text-white text-center font-inria">
              Then join us here!
            </div>
          </div>
          <button
            className="px-4  py-1.5 border-2 border-white text-white text-sm rounded-xl font-inria"
            onClick={(e) => {
              e.stopPropagation();
              router.push("/register");
            }}
          >
            SIGN UP
          </button>
        </div>
        <div className="w-2/3 h-full flex flex-col justify-center ">
          {error && (
            <div className="flex flex-col justify-center items-center mb-6">
              <Alert severity="error" className="w-5/12 text-center font-inria">
                {error}
              </Alert>
            </div>
          )}
          <form
            onSubmit={onSubmit}
            className="flex flex-col justify-center items-center gap-10"
          >
            <div className="flex flex-col gap-5 justify-center items-center">
              <div className="w-full text-3xl text-darkpurple text-center font-inria">
                Welcome back to
              </div>
              <Image
                src={"/img/logo.png"}
                className="w-2/5"
                alt="logo"
                width={0}
                height={0}
                sizes="100vh"
              />
            </div>
            <div className="w-full flex flex-col gap-5 justify-center items-center">
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
                  value={formValues.email}
                  onChange={handleChange}
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
                    value={formValues.password}
                    onChange={handleChange}
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
            <button className="px-4 py-1.5 bg-darkpurple text-white text-sm rounded-xl font-inria">
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
