# AWS Node - Desafio 01

Projeto Compasscar - Sistema de Locação de Carros

## 🎯 Objetivo 

Desenvolvimento de um sistema que atenda às
suas necessidades operacionais. Inicialmente, vamos começar com um MVP (Produto Mínimo Viável) de um CRUD de carros, onde será necessário cadastrar, buscar, atualizar e deletar."

### ⚙️ Pré-requisitos
passo a passo que precisa para instalar o projeto e como instalá-lo.

Passo 1
 - É necessário trazer os arquivos do projeto para o computador. Use o comando git clone ou download ZIP do projeto.

 ```
git clone
 ```
Exemplo de como usar o git clone:

 ```
git clone https://github.com/marcoshgss/AWS_NODE_SET2024_Desafio01
 ```
Use o comando e insira a URL do repositório do projeto.

Passo 2
- Ou faça o download ZIP do projeto. Isso está localizado na página inicial do repositório.

### 🔨 Guia de execução do projeto (rodar o projeto na máquina)

Após ter os arquivos do projeto, é necessário executar ele na máquina.
Abra o terminal e execute essa linha de comando.

 ```
npm start
 ```

Depois, abra o programa Postman ou qualquer outro da sua preferência, e efetuei os testes abrindo uma guia e colocando essa URL:

Abra uma guia e coloque essa URL:

 ```
http://localhost:3000/
 ```

### 👨‍💻 Guia de teste 
Para efetuar os testes do CRUD e inserir os valores por exemplo, é necessário ir na configuração do corpo da requisição:

 - Precisa clicar em "Body" que fica abaixo do campo de URL.

 - Depois selecione "raw".

 - Em seguida, no menu suspenso a direita do campo, selecione a opção "JSON".

Isso irá ter a possibilidade de adicionar o JSON. No campo de texto que aparece, insira o corpo da requisição em formato JSON. Por exemplo:

 ```
{
    "brand": "Fiat",
    "model": "Cronos",
    "year": 2018,
    "items": ["Ar condicionado", "Direção hidráulica"]
}

 ```
