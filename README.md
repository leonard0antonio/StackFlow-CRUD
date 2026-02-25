# 🚀 StackFlow-CRUD

## 1. 📝 Introdução

* **Nome do projeto:** StackFlow-CRUD
* **Contexto:** Este projeto foi desenvolvido como um exercício prático fundamental para consolidar conhecimentos em desenvolvimento **Full Stack**. Representa a transição do estudo teórico para a aplicação real de operações de banco de dados numa interface interativa.
* **Objetivo:** O desafio principal foi construir uma aplicação funcional que permitisse o gerenciamento completo de utilizadores (Criar, Ler, Atualizar e Eliminar), integrando um front-end moderno em React com um back-end robusto em Node.js e um banco de dados relacional MySQL.
* **Destaque:** Este projeto é um marco no aprendizado de como estruturar uma API RESTful e ligá-la a uma interface de utilizador que responde em tempo real, servindo de base sólida para sistemas mais complexos.

## 2. ✨ Principais Funcionalidades

O sistema oferece uma gestão simplificada de cadastros através das seguintes operações:

* **🆕 Cadastro de Utilizadores:** Formulário intuitivo para inserir nome, e-mail, telefone e data de nascimento.
* **📋 Listagem em Tempo Real (Grid):** Uma tabela dinâmica que exibe todos os dados diretamente do banco de dados MySQL.
* **✏️ Edição de Dados:** Ao clicar no ícone de edição, os dados são carregados no formulário para uma atualização rápida.
* **🗑️ Exclusão de Registos:** Remoção de utilizadores com apenas um clique, enviando uma requisição de *delete* para a API.
* **🔔 Feedback Visual:** Utilização de notificações (*toasts*) para informar o sucesso ou erro de cada operação.

## 3. 🛠️ Tecnologias Utilizadas

Para a construção deste ecossistema, foram empregadas as seguintes ferramentas:

* **⚛️ React (Front-end):** Biblioteca para construção da interface baseada em componentes reutilizáveis.
* **🟢 Node.js & Express (Back-end):** Ambiente de execução e framework para criação da API REST e gestão de rotas.
* **🐬 MySQL (Banco de Dados):** Sistema relacional para persistência segura dos dados.
* **💅 Styled-Components:** Estilização dinâmica e isolada utilizando CSS-in-JS.
* **📡 Axios:** Biblioteca para realizar chamadas à API de forma simplificada.
* **🛡️ Cors:** Middleware para permitir a comunicação entre diferentes domínios (Front e API).
* **🔄 Nodemon:** Ferramenta que reinicia o servidor automaticamente durante o desenvolvimento.

## 4. 🖼️ Visual do Projeto


![Demo da aplicação](demo01.gif)


## 5. 🧠 Lições Aprendidas

O desenvolvimento do StackFlow-CRUD proporcionou competências valiosas:

* **🔗 Comunicação Front-Back:** Domínio do protocolo HTTP e dos métodos GET, POST, PUT e DELETE.
* **📊 Gestão de Estado:** Manipulação de *hooks* no React para refletir mudanças do banco de dados sem recarregar a página.
* **🏗️ Arquitetura de Código:** Organização profissional em pastas separadas (`api` e `frontend`), facilitando a manutenção e escalabilidade.
* **🔐 Conectividade:** Configuração de drivers de conexão e políticas de segurança de acesso.

## 6. 🏁 Conclusão

Concluir o **StackFlow-CRUD** foi uma experiência gratificante. Superar os desafios de configurar o banco de dados e garantir a sincronia perfeita entre o servidor e a interface foi o ponto alto do projeto. Esta aplicação não é apenas um CRUD funcional, mas um laboratório essencial para o domínio do ecossistema JavaScript moderno.

---

### ⚙️ Como Executar

1. **Clone o repositório:** `git clone <url-do-repositorio>`
2. **Configurar a API:**
* Vá até a pasta `api`, instale as dependências com `npm install`.
* Configure o seu MySQL no ficheiro `db.js`.
* Inicie com `npm start`.


3. **Configurar o Frontend:**
* Vá até a pasta `frontend`, instale as dependências.
* Inicie a aplicação com `npm start`.
