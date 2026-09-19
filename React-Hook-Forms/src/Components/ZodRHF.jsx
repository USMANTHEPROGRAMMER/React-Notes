import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import "../App.css";

const ZodRHF = () => {
  const userSchema = z
    .object({
      name: z.string().min(3, "Name must be at least 3 characters"),
      password: z.string().min(8, "Password must be at least 8 characters"),
      confirmPass: z.string(),
      email: z.email("Email is Required"),
    })
    .refine((data) => data.password === data.confirmPass, {
      message: "Passwords do not match!",
      path: ["confirmPass"],
    });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({resolver: zodResolver(userSchema)});

  // { resolver: zodResolver(userSchema) }

  function onSubmit(data) {
    console.log(data);
  }

  // const values = getValues();
  // console.log(values);

    // const result = userSchema.safeParse(values);
    // console.log(result);

  return (
    <div className="ZodRHF">
      <h2>User Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Enter the Name..."
          type="text"
          {...register("name")}
        />
        <input
          type="email"
          placeholder="Enter the Email..."
          {...register("email")}
        />
        <input
          type="password"
          placeholder="Enter the Password..."
          {...register("password")}
        />
        <input
          type="password"
          placeholder="Confirm Password!!"
          {...register("confirmPass")}
        />
        <div className="Err-div">
          {errors.name && <p>Name is required</p>}
          {errors.email && <p>Email is Required</p>}
          {errors.password && <p>Password is required</p>}
          {errors.confirmPass && <p>Passwords do not match</p>}
        </div>
        <button type="submit">Submit the Form!</button>
      </form>
    </div>
  );
};

export default ZodRHF;
