import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HomePage() {
  console.log("VITE_API_BASE_URL", import.meta.env.VITE_API_BASE_URL);
  return (
    <div className="min-h-screen flex bg-gray-100 w-full">
      <main className="w-full relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-[url('/src/assets/images/lfcg-asso_img_homepage.webp')]"
          role="img"
          aria-label="Image de fond colorée représentant les mains superposées de plusieurs personnes, comme celles d'une équipe de sport faisant son cri de ralliement"
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <section className="relative z-10 p-8 md:p-12 text-white h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 md:mb-8">
            ManagEvent
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 leading-tight">
            Simplifiez vous l'asso !
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-12 max-w-xl">
            Gérez tous vos évenements et facilitez l'engagement de vos bénévoles
            en toute simplicité !
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/signin">
              <Button className="bg-teal-500 hover:bg-teal-600 font-bold py-6 px-6 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                Se connecter
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-purple-500 hover:bg-purple-600 font-bold py-6 px-10 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                S'inscrire
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
