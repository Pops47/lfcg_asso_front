import SignInSignUpLeftImage from "@/components/custom/SignInSignUpLeftImage";
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
import { useApi } from "@/hooks/useApi";
import { signUpFormSchema } from "@/schemas/auth/SignUpFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import z from "zod";

export default function SignUpPage() {
  const api = useApi();

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    shouldFocusError: false,
  });
  const { control, handleSubmit } = form;

  const onSubmit = async (data: z.infer<typeof signUpFormSchema>) => {
    console.log(data);
    console.log(import.meta.env.VITE_BACK_URL);
    const result = await api.post("/auth/signup", data);
    console.log("🚀 ~ onSubmit ~ result :", result);
  };

  return (
    <div className="min-h-screen flex bg-gray-100 w-full">
      <SignInSignUpLeftImage />
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 p-10">
        <div className="max-w-md w-full space-y-8">
          <h2 className="text-4xl font-bold mb-6 text-center md:text-left">
            S'inscrire
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
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Mot de passe</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">
                      Confirmation du mot de passe
                    </FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col gap-4 pt-4">
                <Button type="submit" className="bg-teal-500 hover:bg-teal-600">
                  S'inscrire
                </Button>
                <Link to="/signin">
                  <small className="text-sm font-medium leading-none">
                    Déjà un compte ?{" "}
                    <span className="underline">Se connecter</span>
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
