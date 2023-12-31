import { useState } from "react";
import { SistemaService } from "../../api/sistemaService";

import "./index.scss";
import Swal from "sweetalert2";

const CadastroBebida = () => {
    const [bebida, setBebida] = useState({
        nomeDaBebida: "",
        codigoDaBebida: "",
        valorDaBebida: "",
        Ingredientes: "",
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
        setBebida({
            ...bebida,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const precoParaEnviar = bebida.valorDaBebida.replace(/,/g, '.');
            const response = await SistemaService.criarBebida({
                ...bebida,
                valorDaBebida: precoParaEnviar
            });
            console.log("Resposta do servidor:", response.data);
            Toast.fire({
                icon: 'success',
                title: 'bebida criada com sucesso!',
            });
            setBebida({
                nomeDaBebida: "",
                codigoDaBebida: "",
                valorDaBebida: "",
                Ingredientes: "",
            });
        } catch (error) {
            console.error("Erro ao cadastrar a bebida:", error);
            Toast.fire({
                icon: 'error',
                title: 'Erro ao cadastrar a bebida',
                text: 'Por favor verifique se os dados foram inseridos corretamente e tente novamente'
            });
        }
    };

    return (
        <div className="bebida-container">
            <div>
                <h1>Cadastro de bebidas</h1>
                <p>insira os dados da bebida que você quer cadastrar</p>
            </div>
            <div className="cadastro-container">

                <form onSubmit={handleSubmit}>
                    <label>
                        Nome da Bebida:
                        <br />
                        <input
                            type="text"
                            name="nomeDaBebida"
                            placeholder="Digite o Nome da bebida aqui"
                            value={bebida.nomeDaBebida}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <br />
                    <label>
                        Codigo da bebida:
                        <br />
                        <input
                            type="text"
                            name="codigoDaBebida"
                            placeholder="Digite o codigo da bebida aqui"
                            value={bebida.codigoDaBebida}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Preço da bebida:
                        <br />
                        <input
                            type="text"
                            name="valorDaBebida"
                            placeholder="Digite o preço da bebida aqui"
                            value={bebida.valorDaBebida}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Ingredientes:
                        <br />

                        <textarea
                            className="Ingredientes"
                            name="Ingredientes"
                            placeholder="Digite os Ingredientes da bebida aqui"
                            value={bebida.Ingredientes}
                            onChange={handleChange}
                            rows="4" cols="35"
                            required
                        />
                    </label>
                    <br />

                    <button type="submit">Cadastrar Bebida</button>
                </form>
            </div>
        </div>
    );
};

export default CadastroBebida;
