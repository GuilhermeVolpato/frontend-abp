import { useState, useEffect } from "react";
import { getItems} from "../actions/lista";

export default function Painel() {
  // Estado local para armazenar a lista de itens
  const [items, setItems] = useState([]);

  // Estado local para controlar o carregamento
  const [loading, setLoading] = useState(false);

  // UseEffect para carregar a lista de itens quando o componente for montado
  useEffect(() => {
    // Define o estado de carregamento como true antes de buscar a lista de itens
    setLoading(true);

    // Chama a função para buscar a lista de itens
    getItems()
      .then((lista) => {
        // Atualiza o estado dos itens com a lista obtida
        setItems(lista);
        // Define o estado de carregamento como false após a conclusão da busca
        setLoading(false);
      })
      .catch((error) => {
        console.log("Não foi possível carregar a lista de itens", error);
        setLoading(false);
      });
  }, []);

  // Função assíncrona para finalizar um produto
  async function finalizarProduto(itemId) {
    if (window.confirm("Deseja finalizar o produto?")) {
      // Aqui você pode chamar uma função para atualizar o status do produto como "finalizado"
      // e fazer outras operações necessárias

      // Por exemplo, você pode fazer uma chamada à API para atualizar o status do produto no servidor
      // await atualizarStatusProduto(itemId, "finalizado");

      // Após atualizar o status, você pode realizar outras ações, como atualizar a lista de itens
      const updatedItems = items.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            status: "finalizado",
          };
        }
        return item;
      });

      // Atualiza o estado dos itens com os itens atualizados
      setItems(updatedItems);
    }
  }

  // Filtra os itens que estão aguardando
  const aguardandoItems = items.filter((item) => !item.status);

  // Filtra os itens que estão finalizados
  const finalizadoItems = items.filter((item) => item.status === "finalizado");

  return (
    <div className="p-6">
      <h2 className="mb-5 text-3xl font-semibold text-gray-800">
        Painel de Pedidos
      </h2>

      {!!loading && <p className="text-lg font-bold text-gray-400">Carregando items...</p>}

      <div className="flex">
        <div className="mr-8">
          {aguardandoItems.length > 0 && (
            <>
              <h3 className="mb-3 text-xl font-semibold text-gray-800">Pedidos Aguardando</h3>
              <ul className="mx-5 my-4 list-disc text-red-700">
                {aguardandoItems.map((item) => (
                  <li key={item.id} className="py-px">
                    <span>
                      <strong className={item.status === "finalizado" ? "text-red-700" : ""}>
                        {item.name}
                      </strong>{" "}
                      - {item.qtd}
                    </span>
                    {!item.status && (
                      <button
                        className="ml-2 text-sm text-gray-500 hover:text-green-700"
                        onClick={() => finalizarProduto(item.id)}>
                        Finalizar
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}

          {!loading && items.length === 0 && (
            <p className="font-semibold text-gray-600">Nenhum item adicionado até o momento</p>
          )}
        </div>

        <div>
          {finalizadoItems.length > 0 && (
            <>
              <h3 className="mb-3 text-xl font-semibold text-gray-800">Pedidos Finalizados</h3>
              <ul className="mx-5 my-4 list-disc">
                {finalizadoItems.map((item) => (
                  <li key={item.id} className="py-px">
                    <span className="text-green-700">
                      <strong>{item.name}</strong> - {item.qtd}
                    </span>
                    <span className="ml-2 text-green-700">Pedido Finalizado</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
