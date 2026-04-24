# Tripleten web_project_around_express

Projeto 15 da Tripleten WEB
data: 16/04/2026

1 - Node.js
O Node.js é o ambiente de execução que permite rodar código JavaScript no lado do servidor. Escolhido por sua alta escalabilidade e pelo enorme ecossistema de pacotes (NPM).

2 - Express.js
O Express é o framework web para Node.js. Ele simplifica a criação de rotas, o gerenciamento de requisições HTTP (GET, POST, etc.) e o uso de middlewares, tornando o código mais organizado e fácil de manter.

3 - fs - readFile()
Módulo nativo do Node.js usado para interagir com o sistema de arquivos do computador. Utilizamos a versão com Promises para realizar leituras de arquivos JSON de forma assíncrona, evitando que o servidor trave enquanto lê os dados.

4 - Path
Módulo utilitário do Node.js para manipular caminhos de arquivos e diretórios. Ele garante que a aplicação funcione corretamente tanto em Windows quanto em Linux/Mac, resolvendo problemas de barras invertidas e diretórios relativos.

5 - Postman
Ferramenta de interface gráfica utilizada para testar as rotas da API. Com ele, simulamos as requisições do Front-end antes mesmo de termos a interface pronta, garantindo que o Backend está enviando os dados e status codes (200, 404, 500) corretos.

6 - Testes da API
Abaixo, os resultados dos testes realizados no 'Postman':

Listagem de cards (GET /cards)
![Retorno da lista de cards](./assets/postman_cards.png)

Listagem de Usuários (GET /users)
![Retorno da lista de usuários](./assets/postman_users.png)

Busca por ID (GET /users/:id)
![Busca por ID com sucesso](./assets/postman_users_id.png)

Busca por ID não existente (GET /users/:id)
![Busca por ID não encontrado](./assets/postman_users_id_erro.png)
