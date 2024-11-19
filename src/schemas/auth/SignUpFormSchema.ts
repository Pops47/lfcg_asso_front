import z from "zod";

export const signUpFormSchema = z
  .object({
    email: z
      .string({ required_error: "Veuillez entrer un email" })
      .email({ message: "Email invalide" }),
    password: z
      .string({ required_error: "Veuillez entrer un mot de passe" })
      .min(8, { message: "Le mot de passe doit faire au moins 8 caractères" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/, {
        message:
          "Le mot de passe doit contenir au moins une majuscule, une minuscule, un nombre et un caractère spécial (@$!%*?&)",
      }),
    confirmPassword: z.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Les mots de passe ne correspondent pas",
        path: ["confirmPassword"],
      });
    }
  });
