import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getItems } from "../actions/lista";

export default function Home() {
  // Consulta de lista de itens
  const lista = useQuery({ queryKey: ["lista"], queryFn: getItems });

  return (
    <div className="p-6">
      <h2 className="mb-5 text-3xl font-semibold text-gray-700">
        Seja bem-vindo ao QuickDemand!
      </h2>

      {/* Descrição da primeira rota */}
      <p className="my-3.5 text-sm md:text-base">
      A demonstração deste projeto em React usando o Vite oferece um gostinho do que uma lanchonete moderna pode fornecer, combinando uma interface dinâmica e intuitiva com funcionalidades personalizadas para uma experiência gastronômica vivida.
      </p>
      <div className="my-5 flex space-x-8">
        {/* Link para a segunda rota */}
        <Link
          to="/Painel"
          className="inline-flex rounded-md bg-gray-100 p-4 text-base font-semibold hover:bg-gray-200 md:text-lg"
        >
          Abrir Painel de Pedidos ({lista.data?.length || 0})
        </Link>

        {/* Link para a terceira rota */}
        <Link
          to="/Cardapio"
          className="inline-flex rounded-md bg-gray-100 p-4 text-base font-semibold hover:bg-gray-200 md:text-lg"
        >
          Abrir Cardápio
        </Link>
      </div>
    </div>
  );
}
