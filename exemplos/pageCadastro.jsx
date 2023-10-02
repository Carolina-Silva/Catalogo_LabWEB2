import React, { useState } from "react";

function CadastroPontoColeta() {
  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    latitude: "",
    longitude: "",
    // Outros campos do formulário
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação dos dados de entrada aqui
    // Criação do objeto JSON baseado em formData

    // Salvar o objeto JSON localmente ou enviar para o servidor

    // Limpar o formulário após o salvamento
    setFormData({
      nome: "",
      endereco: "",
      latitude: "",
      longitude: "",
      // Limpar outros campos do formulário
    });
  };

  return (
    <div>
      <h2>Cadastro de Ponto de Coleta</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
          />
        </div>
        {/* Adicione outros campos do formulário aqui */}
        <div>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
}

export default CadastroPontoColeta;
