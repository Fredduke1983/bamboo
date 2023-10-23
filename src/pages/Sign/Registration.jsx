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
import { registrationUser } from "../../fetches/users/registrationUser";
import { useDispatch } from "react-redux";
import { addNewUser } from "../../redux/Slices/UserSlice";

export default function Registration() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const res = await registrationUser(data);
      dispatch(addNewUser(data));
      toast.info(res.data.msg);
    } catch (error) {
      toast.error("Невірно введені дані або такий користувач вже існує");
    }
  };

  return (
    <SignFormWrapper>
      <ToastContainer />
      <SignTitle>Registration</SignTitle>
      <SignForm onSubmit={handleSubmit(onSubmit)}>
        <SignInputWrapper>
          <SignInput
            placeholder="name"
            {...register("name", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </SignInputWrapper>
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

        <SignSubmit type="submit">SignUP</SignSubmit>
      </SignForm>
    </SignFormWrapper>
  );
}
