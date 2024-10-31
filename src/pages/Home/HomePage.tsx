import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HomePage() {
  console.log(import.meta.env.VITE_BACK_URL);
  return (
    <div className="min-h-screen flex bg-gray-100 w-full">
      <main className="w-full relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&q=80&fm=auto&fit=fill')`,
          }}
          role="img"
          aria-label="Image de fond représentant un événement"
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
            LA plateforme de gestion des évenements qui facilite la
            communication avec les bénévoles et favorise l'engagement !
          </p>
          <p>{import.meta.env.VITE_BACK_URL}</p>
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
