import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  SignForm,
  SignFormWrapper,
  SignInput,
  SignInputWrapper,
  SignSubmit,
  SignTitle,
} from "./Sign.styled";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../../redux/reducers";
import { useEffect } from "react";
import { selectUserIsLoggedIn } from "../../redux/selectors";
import { useNavigate } from "react-router";

export default function Login() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  const onSubmit = async (data) => {
    const response = await dispatch(loginUserThunk(data));
    if (!response.payload) {
      toast.error(
        `Не існує такого користувача або введено невірні логін/пароль`
      );
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  return (
    <SignFormWrapper>
      <ToastContainer />
      <SignTitle>Login</SignTitle>
      <SignForm onSubmit={handleSubmit(onSubmit)}>
        <SignInputWrapper>
          <SignInput
            placeholder="e-mail"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </SignInputWrapper>
        <SignInputWrapper>
          <SignInput
            type="password"
            placeholder="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </SignInputWrapper>

        <SignSubmit type="submit">Login</SignSubmit>
      </SignForm>
    </SignFormWrapper>
  );
}
