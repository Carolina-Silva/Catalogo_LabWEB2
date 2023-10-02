import React from "react";

const PointCard = ({ point }) => {
  return (
    <div className="card">
      <h2>{point.nome}</h2>
      <p><strong>Endereço:</strong> {point.endereco}</p>
      <p><strong>Horário de Funcionamento:</strong> {point.horarioFuncionamento}</p>
      {/* Adicione mais campos conforme necessário */}
    </div>
  );
};

export default PointCard;


// ------------------------------------------------------

// import React from "react";
// import PointCard from "./PointCard"; // Importe o componente PointCard
// import jsonData from "./seuarquivo.json"; // Substitua "seuarquivo.json" pelo caminho real do seu arquivo JSON

// function App() {
//   return (
//     <div className="App">
//       <h1>Pontos de Coleta</h1>
//       <div className="card-container">
//         {jsonData.map((point, index) => (
//           <PointCard key={index} point={point} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


// -------------------------------------------------------------
// <p><strong>Materiais Aceitos:</strong></p>
// <ul>
//   {point.materiaisAceitos.map((material, index) => (
//     <li key={index}>{material}</li>
//   ))}
// </ul>
// ------------------------------------------------------------
// <p><strong>Categorias:</strong></p>
// <div className="tag-container">
//   {point.categorias.map((categoria, index) => (
//     <span key={index} className="tag">{categoria}</span>
//   ))}
// </div>

// ----------------------------------------------------------------
// <p><strong>Links:</strong></p>
// <div className="link-container">
//   {point.links.map((link, index) => (
//     <a key={index} href={link} target="_blank" rel="noopener noreferrer">
//       Link {index + 1}
//     </a>
//   ))}
// </div>

// -------------------------------------
// <p><strong>Equipamentos:</strong> {point.equipamentos.join(", ")}</p>
