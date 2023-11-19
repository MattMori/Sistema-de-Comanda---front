import { useState } from "react";
import { SistemaService } from '../../api/sistemaService';
import "./index.scss";
import Swal from "sweetalert2";
import InputMask from "react-input-mask";

const CadastroClientes = () => {

    const [cliente, setCliente] = useState({
        nomeDoCliente: "",
        dataDeNascimento: "",
        telefone: "",
        email: "",
        cpf: "",
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
        const cleanedValue = name === 'cpf' ? value.replace(/[^\d]/g, '') : value;
        setCliente({
            ...cliente,
            [name]: cleanedValue
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await SistemaService.criarOuEditarCliente(cliente);
            console.log("Resposta do servidor:", response.data);
            Toast.fire({
                icon: 'success',
                title: 'Cliente cadastrado com sucesso!',
            });
            setCliente({
                nomeDoCliente: "",
                dataDeNascimento: "",
                telefone: "",
                email: "",
                cpf: "",
            })
        } catch (error) {
            console.error("Erro ao cadastrar o cliente:", error);
            Toast.fire({
                icon: 'error',
                title: 'Erro ao cadastrar o cliente',
                text: 'Por favor verifique os dados e tente novamente.'
            });
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
                        <InputMask
                            mask="999.999.999-99"
                            maskChar=""
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
                        <InputMask
                            mask="(99) 99999-9999"
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
