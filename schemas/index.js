import * as z from "zod";

export const NewPasswordSchema = z
    .object({
    password: z.string().min(6, {
        message: "Пожалуйста, введите новый пароль, содержащий не менее 6 символов",
    }),
    passwordConfirmation: z.string().min(6, {
        message: "Пожалуйста, подтвердите свой пароль, используя не менее 6 символов.",
    }),
})
    .refine((data) => data.password === data.passwordConfirmation, {
    message: "Пароли не совпадают.",
    path: ["passwordConfirmation"],
});
export const ResetSchema = z.object({
    email: z.string().email({
        message: "Пожалуйста, введите действительный адрес электронной почты.",
    }),
});


export const LoginSchema = z.object({
    email: z.string().email({
        message: "Пожалуйста, введите действительный адрес электронной почты. Поле не должно быть пустым.",
    }),
    password: z.string().min(1, {
        message: "Пожалуйста, введите пароль. Поле не должно быть пустым.",
    }),
    code: z.optional(z.string()),
});


export const RegisterSchema = z
    .object({
    name: z.string().min(2, {
        message: "Имя не должно состоять менее чем из 2 букв.",
    }),
    email: z.string().email({
        message: "Пожалуйста, введите действительный адрес электронной почты.",
    }),
    password: z.string().min(6, {
        message: "Пожалуйста, введите пароль, состоящий не менее чем из 6 символов.",
    }),
    passwordConfirmation: z.string().min(6, {
        message: "Пожалуйста, подтвердите свой пароль.",
    }),
})
    .refine((data) => data.password === data.passwordConfirmation, {
    message: "Пароли не совпадают.",
    path: ["passwordConfirmation"],
});