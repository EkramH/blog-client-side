import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Google Login
  const [signInWithGoogle, gUser, gLoading, GError] = useSignInWithGoogle(auth);

  // Requre Authentication
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (gUser) {
      navigate(from, { replace: true });
    }
  }, [from, gUser, navigate]);

  // Getting Login data
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="h-screen">
      <div className="my-20 flex justify-center items-center">
        <div className="card w-96 shadow-xl bg-beauBlue">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold text-blueYonder">
              Register
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required!",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-blackCoral">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required!",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide valid email!",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-blackCoral">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required!",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be six character or longer!",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                className="btn border-none font-bold mt-6 w-full max-w-xs bg-gradient-to-r from-[#3773c9]"
                type="submit"
                value="Login"
              />
              <p className="mt-5 text-center">
                Already have an account?{" "}
                <Link
                  className="text-primary underline decoration-solid"
                  to="/login"
                >
                  Login.
                </Link>
              </p>
            </form>

            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline font-bold"
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
