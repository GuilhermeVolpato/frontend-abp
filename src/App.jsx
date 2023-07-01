import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ListaComprasProvider } from "./context/ListaComprasContext";
import RootLayout from "./layouts/RootLayout";
import Home from "./routes/Home";
import Painel from "./routes/Painel";
import Cardapio from "./routes/Cardapio";
import Pedidos from "./routes/Pedidos";

// Criação de uma instância do QueryClient para gerenciar as consultas
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

// Criação do roteador utilizando o createBrowserRouter do react-router-dom
const router = createBrowserRouter([
  {
    element: <RootLayout />, // Componente do layout raiz que envolve todas as rotas
    children: [
      {
        path: "/", // Rota da home
        element: <Home />, // Componente da home
      },
      {
        path: "/Painel", // Rota do painel de pedidos
        element: <Painel />, // Componente do painel de pedidos
      },
      {
        path: "/Cardapio", // Rota do cardápio
        element: <Cardapio />, // Componente do cardápio
      },
      {
        path: "/produto/:id", // Rota de pedidos com parâmetro de ID
        element: <Pedidos />, // Componente de pedidos
      },
    ],
  },
]);

export default function App() {
  return (
    <ListaComprasProvider> {/* Provedor do contexto ListaComprasContext */}
      <QueryClientProvider client={queryClient}> {/* Provedor do QueryClient */}
        <RouterProvider router={router} /> {/* Provedor do roteador */}
      </QueryClientProvider>
    </ListaComprasProvider>
  );
}
