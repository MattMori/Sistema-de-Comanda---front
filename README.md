# BarSystem

BarSystem é um sistema de gerenciamento de comandas e bebidas para bares e restaurantes. Este projeto foi desenvolvido como parte de um desafio para demonstrar habilidades de desenvolvimento web.

## Funcionalidades

   - Cadastro de Cliente: Os clientes podem ser cadastrados no sistema com informações como nome, CPF, data de nascimento, telefone e e-mail.
   - Cadastro de Comanda: As comandas podem ser criadas e associadas a um cliente. Cada comanda possui um número único.
   - Cadastro de Bebida: As bebidas disponíveis no bar podem ser cadastradas com informações como código, nome, valor, ingredientes, etc.
   - Lançamento de Bebidas na Comanda: Os atendentes podem lançar bebidas na comanda de um cliente, associando a bebida à comanda pelo número da comanda e código da bebida.
   - Consulta de Comanda: É possível consultar as informações de uma comanda, incluindo as bebidas lançadas e o valor total da comanda.

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


# Capturas de tela:

-Tela de cadastro de comanda

![Alt text](public/Capturas%20de%20Tela/Tela%20-%20Comanda.png)

-Tela de cadastro de clientes

![Alt text](public//Capturas%20de%20Tela/Tela%20-%20Cadastro.png)

-Tela do Bar

![Alt text](public//Capturas%20de%20Tela/Tela%20-%20Bar.png)

-Tela do caixa de saida

![Alt text](public/Capturas%20de%20Tela/Tela%20-%20Caixa%20de%20Saida.png)

-Tela de cadastro de bebidas

![Alt text](public/Capturas%20de%20Tela/Tela%20-%20Cadastrar%20bebida.png)
