import axios from "axios";

const BASE_URL = "http://localhost:3500/";

export class SistemaService {

    //Clientes
    static criarOuEditarCliente(cliente) {
        return axios.post(`${BASE_URL}cliente/criarOuEditar`, cliente);
    }

    static obterClientePorCPF(cpf) {
        return axios.get(`${BASE_URL}cliente/cliente/${cpf}`);
    }

    static obterClientePorComanda(numeroDaComanda) {
        return axios.get(`${BASE_URL}cliente/clientePorComanda/${numeroDaComanda}`);
    }

    static obterTodosClientes() {
        return axios.get(`${BASE_URL}cliente/obter/clientes`);
    }

    static deletarClientePorID(id) {
        return axios.delete(`${BASE_URL}cliente/deletar/${id}`);
    }

    //Bebidas
    static criarBebida(bebida) {
        return axios.post(`${BASE_URL}bebida/criarBebida`, bebida);
    }

    static listarBebidas() {
        return axios.get(`${BASE_URL}bebida/listarBebidas`);
    }

    static BebidaPeloCodigo(codigoDaBebida) {
        return axios.get(`${BASE_URL}bebida/bebida/${codigoDaBebida}`);
    }

    static deletarBebida(codigoDaBebida) {
        return axios.delete(`${BASE_URL}bebida/deletarBebida/${codigoDaBebida}`);
    }

    //Comanda
    static criarComanda(comanda) {
        return axios.post(`${BASE_URL}comanda/criarComanda`, comanda)
    }

    static adicionarBebida(numeroDaComanda, codigoDaBebida) {
        const dados = {
            codigoDaBebida: codigoDaBebida,
            numeroDaComanda: numeroDaComanda
        };

        return axios.post(`${BASE_URL}comanda/comanda/${numeroDaComanda}/adicionarBebida`, dados);
    }

    static bebidasComanda(numeroDaComanda) {
        return axios.get(`${BASE_URL}comanda/comanda/${numeroDaComanda}/listarBebidas`)
    }

    static totalDaComanda(numeroDaComanda) {
        return axios.get(`${BASE_URL}comanda/comanda/${numeroDaComanda}/total`)
    }

    static RemoverBebida(numeroDaComanda, id) {
        return axios.delete(`${BASE_URL}comanda/comanda/${numeroDaComanda}/${id}`)
    }

    static RemoverComanda(cpf) {
        return axios.delete(`${BASE_URL}comanda/cliente${cpf}/removerNumeroComanda`)
    }

}
