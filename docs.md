# DIA 03

- Instalar e Configurar Acesso ao Banco de Dados

- Dependências:

  > yarn add mysql2 sequelize sequelize-cli

- Inicializar o projeto.

  > yarn sequelize init

- Alterar arquivo de configuração para pasta dentro de src.
- Organizar pastas e diretórios criados automaticamente pelo sequelize.
- Criar arquivo de configuração do sequelize com o novo caminho das pastas.
- Atualizar o arquivo models/index.js com a configuração correta.
- Criar primeira migration

  > yarn sequelize migration:create --name=create-table-users

- Executar migration

  > yarn sequelize db:migrate

- Reverter migration

  > yarn sequelize db:migrate:undo

- Criar Seed e Executar
