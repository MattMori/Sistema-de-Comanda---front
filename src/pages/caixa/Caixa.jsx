import { useState } from "react";
import { SistemaService } from '../../api/sistemaService';
import Swal from 'sweetalert2';
import "./index.scss";

const CaixaSaida = () => {
  const [numeroDaComanda, setNumeroDaComanda] = useState("");
  const [ValorEntrada, setValorEntrada] = useState(""); // Adicionado estado para ValorEntrada
  const [comandaInfo, setComandaInfo] = useState({
    bebidas: [],
    totalDaComanda: 0,
  });

  const [clienteInfo, setClienteInfo] = useState({
    cpf: "",
    nomeDoCliente: "",
    telefone: "",
    contagemDeEntrada: "", // Adicionado contagemDeEntrada
  });

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "numeroDaComanda") {
      setNumeroDaComanda(value);
    } else if (name === "ValorEntrada") {
      setValorEntrada(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bebidasComanda = await SistemaService.bebidasComanda(numeroDaComanda);
      const totalDaComanda = await SistemaService.totalDaComanda(numeroDaComanda);
      const infoCliente = await SistemaService.obterClientePorComanda(numeroDaComanda);
      const totalDaComandaNumerico = parseFloat(totalDaComanda.data.resposta.valorTotal) + parseFloat(ValorEntrada); // Adicionado ValorEntrada ao totalDaComanda
      setComandaInfo({
        bebidas: bebidasComanda.data.resposta,
        totalDaComanda: totalDaComandaNumerico,
      });

      setClienteInfo({
        cpf: infoCliente.data.resposta.cpf,
        nomeDoCliente: infoCliente.data.resposta.nomeDoCliente,
        telefone: infoCliente.data.resposta.telefone,
        contagemDeEntrada: infoCliente.data.resposta.contagemDeEntrada,
      });
      Toast.fire({
        icon: 'success',
        title: 'Comanda encontrada com sucesso!',
        });

    } catch (error) {
      console.error("Erro ao buscar informações da comanda:", error);
      Toast.fire({
        icon: 'error',
        title: 'Erro ao Buscar a comanda',
        text: 'Por favor verifique o numero da comanda e tente novamente.'
      });
      setComandaInfo({
        bebidas: [],
        totalDaComanda: 0,
      });
      setClienteInfo({
        cpf: "",
        nomeDoCliente: "",
        telefone: "",
        contagemDeEntrada: "",
      });
    }
  };

  const handlePagar = async () => {
    try {
      const PagarComanda = await SistemaService.PagarComanda(clienteInfo.cpf);

      Toast.fire({
        icon: 'success',
        title: 'Pagamento realizado com sucesso!',
      });

      setComandaInfo({
        bebidas: [],
        totalDaComanda: 0,
      });
      setClienteInfo({
        cpf: "",
        nomeDoCliente: "",
        telefone: "",
        contagemDeEntrada: "",
      });
      setNumeroDaComanda("");
      setValorEntrada("");
    } catch (error) {
      console.error("Erro ao realizar o pagamento:", error);
      Toast.fire({
        icon: 'error',
        title: 'Erro ao realizar o pagamento',
        text: 'Por favor, tente novamente.'
      });
    }
  };

  const formatarCPF = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  return (
    <div className="caixa-container">
      <div className="consulta-container">
        <h1>Caixa - BarSystem</h1>
        <p>Consulte as informações <br /> da comanda aqui</p>
        <form onSubmit={handleSubmit}>
          <label>
            Número da Comanda:
            <input
              type="text"
              name="numeroDaComanda"
              placeholder="Digite o número da comanda"
              value={numeroDaComanda}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Valor da entrada:
            <br />
            <input
              type="text"
              name="ValorEntrada"
              placeholder="Digite o valor da entrada"
              value={ValorEntrada}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="submit">Consultar</button>
        </form>
        <button type="button" onClick={handlePagar}>Pagar</button>
      </div>
      <div className="dados">
        <div className="comanda-info">
          <h2>Informações da Comanda</h2>
          <h3>Informações do Cliente:</h3>
          <p>CPF: {formatarCPF(clienteInfo.cpf)}</p>
          <p>Nome: {clienteInfo.nomeDoCliente}</p>
          <p>Telefone: {clienteInfo.telefone}</p>
          <p>Contagem de Entrada: {clienteInfo.contagemDeEntrada}</p>
        </div>
        <div className="comanda-info">
          <h3>Bebidas na Comanda:</h3>
          <ul>
            {comandaInfo.bebidas?.map((bebida, index) => (
              <li key={index}>{bebida.nomeDaBebida} - R$ {bebida.valorDaBebida}</li>
            ))}
            <label>Valor da Entrada - R$ {ValorEntrada}</label>
          </ul>
          <p>Valor Total: R$ {comandaInfo.totalDaComanda.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CaixaSaida;
