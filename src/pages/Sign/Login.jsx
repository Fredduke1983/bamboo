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
import { useDispatch } from "react-redux";
import { signInUser } from "../../redux/Slices/UserSlice";
import { loginUser } from "../../fetches/users/loginUser";

export default function Login() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const res = await loginUser(data);
      dispatch(signInUser(res.user));
      toast.info(`User ${res.user.name} loggedIn`);
    } catch (error) {
      console.log("error loginUser:>> ", error);
    }
  };

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
