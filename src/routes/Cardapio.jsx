import { Link } from "react-router-dom";
import React from 'react';

export default function Cardapio() {
    // Lista de produtos com id, nome e imagem
  const produtos = [
    { id: 1, nome: "X Salada", imagem: "https://media-cdn.tripadvisor.com/media/photo-s/0d/b4/fe/0e/x-salada.jpg" },
    { id: 2, nome: "X Frango", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSndICvkp73gcQP88xq31j8vqRhegTGbV09wjCIKwHrDA&s" },
    { id: 3, nome: "Hamburguer", imagem: "https://i0.wp.com/anamariabraga.globo.com/wp-content/uploads/2016/11/x-salada-classico.jpg?fit=1200%2C675&ssl=1" },
    { id: 4, nome: "Pizza", imagem: "https://pastapizza.com.br/wp-content/uploads/2017/07/Pizza-Pizzaria-Forno-Forza-Express.jpg" },
    { id: 5, nome: "Sanduíche de Frango", imagem: "https://assets.unileversolutions.com/recipes-v2/106678.jpg" },
    { id: 6, nome: "Hamburguer Vegano", imagem: "https://www.acasaencantada.com.br/wp-content/uploads/2021/10/Hamburguer-vegano-de-grao-de-bico-1200x800.webp" },
    { id: 7, nome: "Wrap de Peru", imagem: "https://assets.unileversolutions.com/recipes-v2/106682.jpg" },
    { id: 8, nome: "Cachorro-Quente", imagem: "https://cozinhasimples.com.br/wp-content/uploads/cachorro-quente-cozinha-simples.jpg" },
    { id: 9, nome: "Sanduíche de Peito de Peru", imagem: "https://assets.unileversolutions.com/recipes-v2/35628.jpg" },
    { id: 10, nome: "Cheeseburger", imagem: "https://s2.glbimg.com/jJirZVMNK5ZsZ9UDLKQBqPu3iXk=/620x455/e.glbimg.com/og/ed/f/original/2020/10/20/hamburgueria_bob_beef_-_dia_das_criancas_-_foto_pfz_studio__norma_lima.jpg" },
    { id: 11, nome: "Sanduíche de Carne de Porco", imagem: "https://minervafoods.com/wp-content/uploads/2022/12/shutterstock_1169918173-3.jpg" },
    { id: 12, nome: "Hamburguer com Bacon", imagem: "https://www.comidaereceitas.com.br/wp-content/uploads/2020/08/hamburguer_bacon.jpg" },
    { id: 13, nome: "Sanduíche de Salame", imagem: "https://www.sadia.com.br/assets/images/_/recipes/628dc1f6b76397e1742bda4a2c0029f9c0f6f2e9.jpg?1682692455680" },
    { id: 14, nome: "Hot Dog", imagem: "https://www.estadao.com.br/resizer/lw4ksQ7vRzkUgJAjSdVRO0rZlEo=/720x503/filters:format(jpg):quality(80):focal(2870x1725:2880x1735)/cloudfront-us-east-1.images.arcpublishing.com/estadao/BDQY6KP3BFBERM5DKBHXUUELZ4.jpg" },
    { id: 15, nome: "Wrap de Frango", imagem: "https://www.perdigao.com.br/assets/_images/8402c5c5f29ca29d758ca7657d3c4ac29a587edf.webp" },
  ];
  return (
    <div>
    <h2 className="mb-5 text-3xl font-semibold text-gray-700">Cardápio</h2>

    <div className="grid grid-cols-3 gap-4">
    {produtos.map((produto) => (
      <div key={produto.id} className="flex flex-col items-center">
        <img src={produto.imagem} alt={produto.nome} style={{ width: '150px' }} />
        <Link
          to={`/produto/${produto.id}`}
          className="text-lg font-bold hover:text-green-500">
          {produto.nome}
        </Link>
      </div>
    ))}
  </div>
    
  </div>
);
}