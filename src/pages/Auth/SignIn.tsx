import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import z from "zod";

const signInFormSchema = z.object({
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
});

export default function SignInPage() {
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    shouldFocusError: false,
  });
  const { control, handleSubmit } = form;

  const onSubmit = (data: z.infer<typeof signInFormSchema>) => {
    console.log("🚀 ~ SignInPage ~ data:", data);
  };

  return (
    <div className="min-h-screen flex bg-gray-100 w-full">
      {/* Left side with image */}
      <div className="hidden md:block w-1/2 h-screen">
        <img
          src="https://images.unsplash.com/photo-1513477967668-2aaf11838bd6?w=800&h=600&q=80&fm=auto&fit=fillD"
          alt="Image"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Right side with form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 p-10">
        <div className="max-w-md w-full space-y-8">
          <h2 className="text-4xl font-bold mb-6 text-center md:text-left">
            Se connecter
          </h2>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Mot de passe</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                    <Link to="/" className="flex justify-end">
                      <small className="text-sm font-medium leading-none underline">
                        Mot de passe oublié ?
                      </small>
                    </Link>
                  </FormItem>
                )}
              />
              <div className="flex flex-col gap-4">
                <Button type="submit" className="bg-teal-500 hover:bg-teal-600">
                  Se connecter
                </Button>
                <Link to="/signup">
                  <small className="text-sm font-medium leading-none">
                    Pas encore de compte ?{" "}
                    <span className="underline">S'inscrire</span>
                  </small>
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
