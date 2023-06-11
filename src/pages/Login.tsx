// tela de login
import { useState } from "react";

import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleNavigation () {
    // Lógica de autenticação e validação do login

    // Navegar para "/NewOrder" após o login
    navigate("/NewOrder");
  };

  return (
    <div className="flex-1">
      <Header />
      <div className="flex justify-center items-center">
        <form className="flex flex-col w-2/4 items-center justify-center pt-5">
          <input
            type="text"
            placeholder="email"
            className="w-1/2 p-4 mb-4 bg-gray-900 rounded-md text-white"
            id="name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="senha"
            className="w-1/2 p-4 mb-4 bg-gray-900 rounded-md text-white "
            id="qtd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            className="w-1/2 p-4 mb-4 bg-gray-900 rounded-md text-white"
            onClick={handleNavigation}
          >
            Fazer Login
          </button>
        </form>
      </div>
    </div>
  );
}
