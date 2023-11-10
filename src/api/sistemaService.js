import axios from "axios";

const BASE_URL = "https://sistema-de-comanda-back.vercel.app/";

export class SistemaService {

    //Clientes

    // Cria um novo cliente ou edita um existente
    static criarOuEditarCliente(cliente) {
        return axios.post(`${BASE_URL}cliente/criarOuEditar`, cliente);
    }

    // Obtém um cliente pelo CPF
    static obterClientePorCPF(cpf) {
        return axios.get(`${BASE_URL}cliente/cliente/${cpf}`);
    }

    // Obtém um cliente pela comanda
    static obterClientePorComanda(numeroDaComanda) {
        return axios.get(`${BASE_URL}cliente/clientePorComanda/${numeroDaComanda}`);
    }

    // Obtém todos os clientes
    static obterTodosClientes() {
        return axios.get(`${BASE_URL}cliente/obter/clientes`);
    }

    // Deleta um cliente pelo ID
    static deletarClientePorID(id) {
        return axios.delete(`${BASE_URL}cliente/deletar/${id}`);
    }

    //Bebidas

    // Cria uma nova bebida
    static criarBebida(bebida) {
        return axios.post(`${BASE_URL}bebida/criarBebida`, bebida);
    }

    // Lista todas as bebidas
    static listarBebidas() {
        return axios.get(`${BASE_URL}bebida/listarBebidas`);
    }

    // Obtém uma bebida pelo código
    static BebidaPeloCodigo(codigoDaBebida) {
        return axios.get(`${BASE_URL}bebida/bebida/${codigoDaBebida}`);
    }

    // Deleta uma bebida pelo código
    static deletarBebida(codigoDaBebida) {
        return axios.delete(`${BASE_URL}bebida/deletarBebida/${codigoDaBebida}`);
    }

    //Comanda

    // Cria uma nova comanda
    static criarComanda(comanda) {
        return axios.post(`${BASE_URL}comanda/criarComanda`, comanda)
    }

    // Adiciona uma bebida a uma comanda
    static adicionarBebida(numeroDaComanda, codigoDaBebida) {
        const dados = {
            codigoDaBebida: codigoDaBebida,
            numeroDaComanda: numeroDaComanda
        };

        return axios.post(`${BASE_URL}comanda/comanda/${numeroDaComanda}/adicionarBebida`, dados);
    }

    // Lista as bebidas de uma comanda
    static bebidasComanda(numeroDaComanda) {
        return axios.get(`${BASE_URL}comanda/comanda/${numeroDaComanda}/listarBebidas`)
    }

    // Obtém o total de uma comanda
    static totalDaComanda(numeroDaComanda) {
        return axios.get(`${BASE_URL}comanda/comanda/${numeroDaComanda}/total`)
    }

    // Remove uma bebida de uma comanda
    static RemoverBebida(numeroDaComanda, id) {
        return axios.delete(`${BASE_URL}comanda/comanda/${numeroDaComanda}/${id}`)
    }

    // Remove uma comanda pelo CPF do cliente
    static RemoverComanda(cpf) {
        return axios.delete(`${BASE_URL}comanda/cliente${cpf}/removerNumeroComanda`)
    }

}
