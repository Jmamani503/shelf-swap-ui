import styles from "./Login.module.css";

import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../../services/auth.service";
import { createUser } from "../../../redux/states/AuthSlice";
import { LoginRequest } from "../../../models/LoginRequest.interface";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginRequest>();
  const {
    loginRequest,
    loginRequestResponse,
    loginReqeustLoading,
    loginRequestError,
  } = AuthService();
  const login: SubmitHandler<LoginRequest> = (data) => {
    console.log(data)
    loginRequest(data);
  };
  useEffect(() => {
    if (loginRequestResponse) {
      dispatch(createUser(loginRequestResponse));
      navigate("/home", { replace: true });
    }
  }, [loginRequestResponse, dispatch]);

  return (
    <div className={styles.container}>
      <div>
        <h2>Welcome back to Shelf Swap !</h2>
        <h2>Dive into your next read</h2>
      </div>
      <div className={styles.auth_card}>
        <h3 className={styles.auth_card_title}>Login</h3>
        <form className={styles.auth_form_container} onSubmit={handleSubmit(login)}>
          <div className={styles.auth_form}>
            <div>
              <input {...register("email")} type="email" placeholder="Email" />
            </div>
            <div>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
              />
            </div>
            <Link className={styles.forgot_password} to="/auth/forgot-password">
              Forgot Password ?
            </Link>
          </div>
          <button className={styles.auth_form_button} type="submit">Login</button>
        </form>
        <span className={styles.redirect_text}>
          Dont have an account ?  
          <Link className={styles.accent_text} to="/auth/register">
            Register now
          </Link>
        </span>
      </div>
    </div>
  );
}
export default Login;
