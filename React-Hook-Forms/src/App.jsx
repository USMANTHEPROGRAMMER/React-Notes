import React from "react";
import { useForm } from "react-hook-form";
import ZodRHF from "./Components/ZodRHF";
import Registrationform from "./Components/Registrationform";

const App = () => {
  React.useEffect(() => {
    // setFocus("name"); ==> main isko isliye comment out krrha kyun ke main doosre page pe seFocus use krrha hoon or wo then conflict horha hai.
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    reset,
    getValues,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      name: "Usman Ghani Sharique",
      email: "usman@gmail.com",
      password: "12345678",
    },
  });

  setValue("name", "Usman Ghani Sharique");

  const values = getValues();
  // console.log(values);

  function onSubmit(data) {
    // console.log(data);
    reset();
  }

  const password = watch("name");

  // console.log(password);

  return (
    <>
      <div className="App">
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Name"
            type="text"
            {...register("name", {
              required: "Name is required",
            })}
          />
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
            })}
          />
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 10 characters long",
              },
            })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
      <ZodRHF />
      <Registrationform />
    </>
  );
};
export default App;
