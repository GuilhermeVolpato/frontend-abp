import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { getItems, postItem, deleteItem } from "../actions/lista";

export default function Pedidos() {
    // Lista de produtos com id, nome e preço

  const produtos = [
    { id: 1, nome: "X Salada", preco: 10.0 },
    { id: 2, nome: "X Frango", preco: 13.0 },
    { id: 3, nome: "Hamburguer", preco: 17.49 },
    { id: 4, nome: "Pizza", preco: 85.49 },
    { id: 5, nome: "Sanduíche de Frango", preco: 10.0 },
    { id: 6, nome: "Hamburguer Vegano", preco: 10.0 },
    { id: 7, nome: "Wrap de Peru", preco: 10.0 },
    { id: 8, nome: "Cachorro-Quente", preco: 10.0 },
    { id: 9, nome: "Sanduíche de Peito de Peru", preco: 10.0 },
    { id: 10, nome: "Cheeseburger", preco: 10.0 },
    { id: 11, nome: "Sanduíche de Carne de Porco",  preco: 10.0},
    { id: 12, nome: "Hamburguer com Bacon",  preco: 10.0},
    { id: 13, nome: "Sanduíche de Salame", preco: 10.0},
    { id: 14, nome: "Hot Dog", preco: 10.0 },
    { id: 15, nome: "Wrap de Frango", preco: 10.0 },
  ];

  const { id } = useParams();

  // Encontra o produto com base no id
  const produto = produtos.find((produto) => produto.id === Number(id));

  // Estado para o produto selecionado

  // Atualiza o produto selecionado quando o id muda
  useEffect(() => {
    const produto = produtos.find((produto) => produto.id === Number(id));
  }, [id]);

  // Consulta de lista de itens
  const lista = useQuery({ queryKey: ["lista"], queryFn: getItems });

  // Mensagem de erro
  const [errorMessage, setErrorMessage] = useState("");

  // Adicionar item à lista
  function addItem(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("newItemName") !== "" && +formData.get("newItemQtd") > 0) {
      const newItem = {
        name: formData.get("newItemName"),
        qtd: +formData.get("newItemQtd"),
      };

      mutationPost.mutate(newItem);

      form.reset();
      setErrorMessage("");
    } else {
      setErrorMessage("Preencha todos os campos!");
    }
  }

  // Cliente de consulta de cache
  const queryClient = useQueryClient();

  // Mutação para adicionar item
  const mutationPost = useMutation({
    mutationFn: postItem,
    onSuccess: () => {
      // Invalida e refaz a consulta
      queryClient.invalidateQueries({ queryKey: ["lista"] });
    },
  });

  // Mutação para deletar item
  const mutationDelete = useMutation({
    mutationFn: deleteItem,
    onSuccess: () => {
      // Invalida e refaz a consulta
      queryClient.invalidateQueries({ queryKey: ["lista"] });
    },
  });

  // Calcula o total dos preços
  const somaPrecos = lista.data?.reduce((total, item) => {
    return total + produto.preco * item.qtd;
  }, 0);
  
  return (
    <div className="p-6">
      
      <h2 className="mb-5 text-3xl font-semibold text-gray-800">
        Pedidos <em className="text-gray-600"></em>
      </h2>
      {!!lista.isLoading && <p className="text-lg font-bold text-gray-400">Carregando items...</p>}
      <ul className="mx-5 my-4 list-disc">
      {lista.data?.map((item) => (
  <li key={item.id} className="py-px">
            <a
              href={`#delete-item-${item.id}`}
              data-loading={mutationDelete.isLoading && mutationDelete.variables === item.id ? true : undefined}
              className="hover:text-green-700 data-[loading]:pointer-events-none data-[loading]:opacity-50"
              onClick={event => {
                event.preventDefault();
                if (confirm("Você deseja excluir este item?")) {
                  mutationDelete.mutate(item.id);
                }
              }}>
              <strong>{produto.nome}</strong> - {item.qtd} -R$ {produto.preco} 
            </a>
          </li>
        ))}
      </ul>
      {!lista.isLoading && lista.data?.length === 0 && (
        <p className="font-semibold text-gray-600">Nenhum item adicionado até o momento</p>
      )}
      <form onSubmit={addItem} method="get" className="mt-6 w-full max-w-md rounded bg-gray-100 p-3.5">
        <fieldset disabled={mutationPost.isLoading}>
          <ul className="space-y-3">

      </ul>
      <h2 className="mb-4 text-2xl font-extrabold text-gray-800">{produto.nome}</h2>
      <input
              id="newItemName"
              name="newItemName"
              type="text"
              defaultValue={produto.nome}
            style= {{display:'none'}}
            />
      <p className="mb-4 text-lg font-bold text-gray-600">R$ {produto.preco}</p>
          <div className="mb-4">
            <label htmlFor="newItemQtd" className="block text-gray-600">
              Quantidade
            </label>
            <input
              id="newItemQtd"
              name="newItemQtd"
              type="number"
              defaultValue={1}
              min="1"
              className="mt-1 block w-full rounded border border-gray-300 p-1.5 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
            />
            {!!errorMessage && <div className="mt-1 font-semibold text-red-500">{errorMessage}</div>}
          </div>
          <button
            disabled={mutationPost.isLoading || mutationDelete.isLoading}
            type="submit"
            className="rounded bg-teal-500 px-4 py-2 text-white hover:bg-teal-600 disabled:pointer-events-none disabled:opacity-25">
            Adicionar Pedidos
          </button>
        </fieldset>
        <p className="mb-4 text-lg font-bold text-gray-600">
        Total: R$ {somaPrecos?.toFixed(2)}
      </p>
      </form>
    </div>
  );
};