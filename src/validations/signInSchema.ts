import { z, ZodType } from "zod";

export const signInSchema: ZodType<{ email: string; password: string; rememberMe: boolean | null }> = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Please enter your password"),
  rememberMe: z.boolean().nullable(),
});
