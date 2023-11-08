import { useState } from "react";
import { SistemaService } from '../../api/sistemaService';
import "./index.scss";

const Bar = () => {
    const [codigoDaBebida, setCodigoDaBebida] = useState("");
    const [numeroDaComanda, setNumeroDaComanda] = useState("");
    const [bebida, setBebida] = useState({
        nomeDaBebida: "",
        valorDaBebida: 0
    });

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            await fetchBebida(); // Chama a função para buscar a bebida quando o usuário aperta "Enter"
        }
    };

    const fetchBebida = async () => {
        try {
            const response = await SistemaService.BebidaPeloCodigo(codigoDaBebida);
            console.log("Resposta da API (BebidaPeloCodigo):", response);
            setBebida(response.data.resposta);
        } catch (error) {
            console.error("Erro ao buscar bebida pelo código:", error);
            setBebida({
                nomeDaBebida: "",
                valorDaBebida: 0
            });
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const AdicionarBebida = await SistemaService.adicionarBebida(numeroDaComanda, codigoDaBebida);
            console.log("Resposta do servidor (Adicionar Bebida):", AdicionarBebida.data);
        } catch (error) {
            console.error("Erro ao Adicionar bebida:", error);
        }
    };

    return (
        <div className="Bar-container">
            <div className="bar-bebida-container">
                <h1>Bar - BarSystem</h1><br />
                <p> Lançamento de Bebidas na Comanda</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        Código da Bebida:
                        <br />
                        <input
                            className="outros"
                            type="Number"
                            name="codigoDaBebida"
                            placeholder="Digite o Código da bebida aqui"
                            value={codigoDaBebida}
                            onChange={(e) => setCodigoDaBebida(e.target.value)}
                            onKeyDown={handleKeyDown} // Adiciona o evento onKeyDown para capturar a tecla "Enter"
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Número da Comanda:
                        <br />
                        <input
                            className="outros"
                            type="text"
                            name="numeroDaComanda"
                            placeholder="Digite o Número da comanda aqui"
                            value={numeroDaComanda}
                            onChange={(e) => setNumeroDaComanda(e.target.value)}
                            required
                        />
                    </label><br />

                    <button type="submit">Adicionar Bebida</button>
                </form>
            </div>
            <div className="bebida-dados-container">
                <h2>Informações sobre a bebida:</h2>
                <label>
                    Nome da Bebida: {bebida && bebida.nomeDaBebida ? bebida.nomeDaBebida : "Nome não disponível"}
                </label>
                <br />
                <label>
                    Valor da Bebida: {bebida && bebida.valorDaBebida ? bebida.valorDaBebida : "Valor não disponível"}
                </label>
            </div>
        </div>
    );
};

export default Bar;
