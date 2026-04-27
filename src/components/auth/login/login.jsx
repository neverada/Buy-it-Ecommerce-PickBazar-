import React from "react";
import logo from "../../../assets/pickbazar-logo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router";
import { auth } from "../../../firebase/firebaseConfig";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  
  const { getValues } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("/"); // Redirect to home on success
    } catch (error) {
      alert("Invalid email or password");
    }
  };
  const handleForgot = async () => {
    const email = getValues("email"); // Gets email typed in the field
    if (!email) return alert("Please enter your email first");
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Reset link sent to your email!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img src={logo} alt="Your Company" className="mx-auto h-10 w-auto" />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-[var(--primary-color)]">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          action="#"
          method="POST"
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label
              for="email"
              className="block text-sm/6 font-medium text-[var(--primary-color)]"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                name="email"
                {...register("email")}
                autocomplete="email"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-[var(--primary-color)] outline-1 -outline-offset-1 outline-[var(--primary-color)] placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--primary-color)] sm:text-sm/6"
              />
              <p className="text-red-500 text-sm">{errors?.email?.message}</p>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block text-sm/6 font-medium text-[var(--primary-color)]"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  onClick={handleForgot}
                  className="font-semibold text-[var(--primary-color)] "
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                name="password"
                {...register("password")}
                autocomplete="current-password"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-[var(--primary-color)] outline-1 -outline-offset-1 outline-[var(--primary-color)] placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--primary-color)] sm:text-sm/6"
              />

               <p className="text-red-500 text-sm">{errors?.password?.message}</p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[var(--primary-color)] px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-[var(--light-color)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-400">
          Not a member?
          <a
            href="/signup"
            className="font-semibold text-[var(--primary-color)] "
          >
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
