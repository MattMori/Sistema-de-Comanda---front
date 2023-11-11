# BarSystem

BarSystem é um sistema de gerenciamento de comandas e bebidas para bares e restaurantes. Este projeto foi desenvolvido como parte de um desafio para demonstrar habilidades de desenvolvimento web.

## Tecnologias Utilizadas

   - Frontend:
        React.js para a construção da interface do usuário.
        Redux para gerenciamento de estado.
        Axios para fazer requisições HTTP para o backend.
        SCSS para estilização.

   - Backend:
        Node.js com Express para criar o servidor e definir rotas da API.
        MongoDB como banco de dados para armazenar informações de clientes, comandas e bebidas.
        Mongoose para modelagem de dados.

- Link do front hospedado: https://sistema-comanda-frontend.vercel.app/
- Link do repositorio do BackEnd: https://github.com/MattMori/Sistema-de-Comanda---back


# funcionalidades e Capturas de tela:

 - Tela de cadastro de comanda:
As comandas podem ser criadas e associadas a um cliente. Cada comanda possui um número único.

![tela de Cadastro de comanda](public/Capturas%20de%20Tela/Tela%20-%20Comanda.png)

 - Tela de cadastro de clientes:
 Os clientes podem ser cadastrados no sistema com informações como nome, CPF, data de nascimento, telefone e e-mail.

![ tela de Cadastro de clientes](public//Capturas%20de%20Tela/Tela%20-%20Cadastro.png)

 - Tela do Bar:
Os atendentes podem lançar bebidas na comanda de um cliente, associando a bebida à comanda pelo número da comanda e código da bebida.

![tela do bar](public//Capturas%20de%20Tela/Tela%20-%20Bar.png)

 - Tela do caixa:
É possível consultar as informações de uma comanda, incluindo as bebidas lançadas e o valor total da comanda.

![tela do caixa](public/Capturas%20de%20Tela/Tela%20-%20Caixa%20de%20Saida.png)

 - Tela de cadastro de bebidas:
As bebidas disponíveis no bar podem ser cadastradas com informações como código, nome, valor, ingredientes, etc.

![tela de Cadastro de bebida](public/Capturas%20de%20Tela/Tela%20-%20Cadastrar%20bebida.png)
