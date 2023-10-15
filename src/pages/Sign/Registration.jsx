import { useForm } from "react-hook-form";
import {
  RegistrationForm,
  RegistrationFormWrapper,
  RegistrationInput,
  RegistrationInputWrapper,
  RegistrationSubmit,
  RegistrationTitle,
} from "./Registration.styled";
import { registrationUser } from "../../fetches/users/registrationUser";

export default function Registration() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const res = await registrationUser(data);
    if (!isNaN(res.data.statusCode)) {
      console.log(res.data.errorMsg);
    } else {
      console.log(res.data);
    }
  };

  return (
    <RegistrationFormWrapper>
      <RegistrationTitle>REGISTRATION</RegistrationTitle>
      <RegistrationForm onSubmit={handleSubmit(onSubmit)}>
        <RegistrationInputWrapper>
          <RegistrationInput
            placeholder="name"
            {...register("name", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </RegistrationInputWrapper>
        <RegistrationInputWrapper>
          <RegistrationInput
            placeholder="e-mail"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </RegistrationInputWrapper>
        <RegistrationInputWrapper>
          <RegistrationInput
            placeholder="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </RegistrationInputWrapper>

        <RegistrationSubmit type="submit">Submit</RegistrationSubmit>
      </RegistrationForm>
    </RegistrationFormWrapper>
  );
}
