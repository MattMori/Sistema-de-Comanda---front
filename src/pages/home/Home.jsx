import { useState } from "react";
import InputMask from "react-input-mask";
import { SistemaService } from '../../api/sistemaService';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import "./index.scss";

const Home = () => {
  const [comanda, setComanda] = useState({
    cpf: "",
    numeroDaComanda: ''
  });

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const cleanedValue = name === 'cpf' ? value.replace(/[^\d]/g, '') : value;
    setComanda({
      ...comanda,
      [name]: cleanedValue
      
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

      // Exibe notificação de sucesso
      Toast.fire({
        icon: 'success',
        title: 'Comanda associada com sucesso!',
      });

    } catch (error) {
      console.error("Erro ao cadastrar a comanda:", error);

      // Exibe notificação de erro
      Toast.fire({
        icon: 'error',
        title: 'Erro ao associar a comanda',
        text: 'Cliente não encontrado com o CPF fornecido, verifique o CPF e tente novamente.'
      });
    }
  };

  return (
    <div className="home">
      <div className="home-container">
        <h1>Bem-vindo ao BarSystem</h1>
        <p>Cadastre as comandas aqui</p>
        <div className="cadastro-container">
          <form onSubmit={handleSubmit}>
            <label>
              CPF:
              <br />
              <InputMask
                mask="999.999.999-99"
                maskChar=""
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
              />
            </label>
            <br />

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
