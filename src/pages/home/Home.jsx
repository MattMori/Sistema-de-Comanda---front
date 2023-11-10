import { useState } from "react";
import { SistemaService } from '../../api/sistemaService';
import "./index.scss";

const Home = () => {

  const [comanda, setComanda] = useState({
    cpf: "",
    numeroDaComanda: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComanda({
      ...comanda,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await SistemaService.criarComanda(comanda);
      console.log("Resposta do servidor:", response.data);
      setComanda({
        cpf: "",
        numeroDaComanda: ''
      });
      alert('Comanda Associada com Sucesso')
    } catch (error) {
      console.error("Erro ao cadastrar o cliente:", error);
    }

  };

  return (
    <div className="home">
    <div className="home-container">
      <h1>Bem-vindo ao BarSystem</h1><br />
      <p> Cadastre as comandas aqui</p>
      <div className="cadastro-container">
        <form onSubmit={handleSubmit}>
          <label>
            CPF:
            <br />

            <input
              type="text"
              name="cpf"
              placeholder="Digite o CPF do cliente aqui"
              value={comanda.cpf}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Numero Da Comanda:
            <br />
            <input
              type="text"
              name="numeroDaComanda"
              placeholder="Digite o Numero da comanda aqui"
              value={comanda.numeroDaComanda}
              onChange={handleChange}
              required
            />{" "}
          </label><br />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Home;
