import validator from "validator";
import * as z from "zod";

export const NewPasswordSchema = z
    .object({
    password: z.string().min(6, {
        message: "Please enter a new password containing at least 6 characters",
    }),
    passwordConfirmation: z.string().min(6, {
        message: "Please confirm your password using at least 6 characters.",
    }),
})
    .refine((data) => data.password === data.passwordConfirmation, {
    message: "Password mismatch.",
    path: ["passwordConfirmation"],
});
export const ResetSchema = z.object({
    telNo: z.string().refine((data) => validator.isMobilePhone(data), {
        message: "Invalid Phone number"
    }),
});


export const LoginSchema = z.object({
    telNo: z.string().refine((data) => validator.isMobilePhone(data), {
        message: "Invalid Phone number"
    }),
    password: z.string().min(1, {
        message: "Please enter the password.The field should not be empty.",
    }),
    code: z.optional(z.string()),
});


export const RegisterSchema = z
    .object({
    name: z.string().min(2, {
        message: "The name should not consist of less than 2 letters.",
    }),
    telNo: z.string().refine((data) => validator.isMobilePhone(data), {
        message: "Invalid Phone number"
    }),
    password: z.string().min(6, {
        message: "Please enter a password consisting of at least 6 characters.",
    }),
    passwordConfirmation: z.string().min(6, {
        message: "Please confirm your password.",
    }),
})
    .refine((data) => data.password === data.passwordConfirmation, {
    message: "Password mismatch.",
    path: ["passwordConfirmation"],
});