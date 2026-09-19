import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "../App.css";

const Registrationform = () => {
  const registerSchema = z
    .object({
      name: z.string().trim().min(3, "Name must be at least 3 characters"),
      email: z.email("Please enter a valid email"),
      password: z.string().min(8, "Password must be at least 8 characters"),
      confirmPass: z.string().min(1, "Please Confirm Password"),
    })
    .refine((data) => data.password === data.confirmPass, {
      message: "Passwords do not match!",
      path: ["confirmPass"],
    });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  function onSubmit(data) {
    console.log("Form Submitted" + data);
    console.log(data);
    reset();
  }

  return (
    <div className="Registrationform">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <label htmlFor="name">Name:</label>

          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            {...register("name")}
          />

          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <label htmlFor="email">Email:</label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />

          {errors.email && <p>{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div style={{display: "flex", gap: "10px", flexDirection: "column"}}> 
          <label htmlFor="password">Password:</label>

          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
          />

          {errors.password && <p>{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div style={{display: "flex", gap: "10px", flexDirection: "column"}}>
          <label htmlFor="confirmPassword">Confirm Password:</label>

          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            {...register("confirmPass")}
          />

          {errors.confirmPass && <p>{errors.confirmPass.message}</p>}
        </div>

        {/* Submit */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </button>
      </form>
    </div>
  );
};

export default Registrationform;
