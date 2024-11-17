import { passwordRegex } from "@/utils/regex";
import { z } from "zod";

export const customerSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name must not exceed 50 characters"),
    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name must not exceed 50 characters"),
    phone: z
      .string()
      .regex(
        /^(?:(?:00|\+)?45)?(?=2|3[01]|4[012]|4911|5[0-3]|6[01]|[78]1|9[123])\d{8}$/,
        "Please enter a valid phone number"
      ),
    email: z.string().email("Please enter a valid email"),
    password: z
      .string()
      .regex(
        passwordRegex,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (!, @, #, $, %, ^, &, *, -, +, =)"
      ),
    confirmPassword: z.string(),
    tcAgreed: z.boolean().refine((value) => value === true, {
      message: "You must agree to the Terms and Conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type UserSchema = z.infer<typeof customerSchema>;

export const userGeneralSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must not exceed 50 characters"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must not exceed 50 characters"),
});

export const userPasswordSchema = z
  .object({
    newPassword: z.string().refine((value) => {
      if (value.length < 8) {
        return false;
      }
      const hasLowercase = /[a-z]/.test(value);
      const hasUppercase = /[A-Z]/.test(value);
      const hasNumber = /\d/.test(value);

      return hasLowercase && hasUppercase && hasNumber;
    }, "Please enter a valid password"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
