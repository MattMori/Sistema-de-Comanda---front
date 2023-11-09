import { useState } from "react";
import { SistemaService } from '../../api/sistemaService';
import "./index.scss";

const CadastroClientes = () => {

    const [cliente, setCliente] = useState({
        nomeDoCliente: "",
        dataDeNascimento: "",
        telefone: "",
        email: "",
        cpf: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCliente({
            ...cliente,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await SistemaService.criarOuEditarCliente(cliente);
            console.log("Resposta do servidor:", response.data);
            alert("Cliente cadastrado com sucesso")
            setCliente({
                nomeDoCliente: "",
                dataDeNascimento: "",
                telefone: "",
                email: "",
                cpf: "",
            })
        } catch (error) {
            console.error("Erro ao cadastrar o cliente:", error);
        }

    };


    return (
        <div className="clientes-container">
            <div>
                <h1>Cadastro de Clientes</h1>
                <p>insira os dados para realizar o cadastro do clientes</p>
            </div>
            <div className="cadastro-container">
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome Completo:
                        <br />
                        <input
                            type="text"
                            name="nomeDoCliente"
                            placeholder="Digite o Nome do cliente aqui"
                            value={cliente.nomeDoCliente}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Data de Nascimento:
                        <br />
                        <input
                            className="dataNascimento"
                            type="date"
                            name="dataDeNascimento"
                            value={cliente.dataDeNascimento}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <br />
                        <input
                            type="email"
                            name="email"
                            placeholder="Digite o Email do cliente aqui"
                            value={cliente.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        CPF:
                        <br />
                        <input
                            type="text"
                            name="cpf"
                            placeholder="Digite o CPF do cliente aqui"
                            value={cliente.cpf}
                            onChange={handleChange}
                            required
                        />

                    </label>
                    <br />
                    <label>
                        Telefone:
                        <br />
                        <input
                            type="tel"
                            name="telefone"
                            placeholder="Digite o telefone do Cliente aqui"
                            value={cliente.telefone}
                            onChange={handleChange}
                            required
                        />
                    </label><br />

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default CadastroClientes;
