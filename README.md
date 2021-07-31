# Projeto de encerramento de módulo 4: CRUD - API

Esta API REST foi elaborada para atendender uma ACADEMIA e executa a leitura, inclusão, exclusão
e alteração das informações do banco de dados TREINO.


## Appendix

O Banco de dados é composto por 5 colunas 
ID, MUSCULO, EXERCICIO, SERIES e REPETICOES

  
## Demo

![image](https://user-images.githubusercontent.com/78883930/127559955-bd4f30e9-bb81-4677-8a0e-53781b4e3ebd.png)


## Desenvolvimento

Para iniciar o projeto, execute:

```http
  npm init
```
## Instalar os pacotes

Express:

```http
  npm i express --save
```
Cors:

```http
  npm i cors --save
```
Nodemon:

```http
  npm i nodemon --save-dev 
```
Jest:

```http
  npm i jest --save-dev
```

Supertest:

```http
  npm install supertest --save-dev
```
Sqlite3:

```http
  npm i sqlite3 || npm i sqlite3@5.0.0
```

## Criar a estrutura do projeto

- Criar arquivo
- Criar a pasta **SRC**
- Dentro de src criar as seguintes pastas:
    1. controllers
    2. dao
    3. data
    4. tests

![image](https://user-images.githubusercontent.com/78883930/127718439-73bd0116-f09f-4c22-ad53-5cea289532dc.png)
  
## Rotas API

GET
http://localhost:3030/treino/ver

POST
http://localhost:3030/treino/incluir

DELETE
http://localhost:3030/treino/delete/${id}

PUT
http://localhost:3030/treino/edit/${id}

#### Ver todos os treinos


  GET /api/treino

![image](https://user-images.githubusercontent.com/78883930/127721637-d656ca80-333d-4f1c-a0bd-55cee22a8874.png)


#### Incluir treinos


  POST /api/treino


![image](https://user-images.githubusercontent.com/78883930/127721658-2e51bfac-1989-40b8-ba77-2f01afc73e0b.png)



#### Deletar um treino

```http
  DELETE /treino/delete/${id}
```
![image](https://user-images.githubusercontent.com/78883930/127721679-2f848dd3-9765-44da-ac66-a11f9c5c5200.png)



#### Alterar um treino

```http
  PUT /treino/edit/${id}
```

![image](https://user-images.githubusercontent.com/78883930/127721702-3a19d316-bc72-46c3-9448-914b3f7beb54.png)

  
## Para rodar localmente

Clone o projeto

```bash
  git clone https://https://github.com/kellenThaisaLima/projeto-modulo-4
```

Vá para o diretório do projeto

```bash
  cd projeto-modulo-4
```

Verifique se as dependências foram instaladas

```bash
  ver seção de "Instalar pacotes"
```

Inicie o servidor

```bash
  npm run start
```
  
## Autor 

- [@kellenThaisaLima](https://www.github.com/kellenThaisaLima)
    
## Lições aprendidas

Criação de rotas de API REST com padrão CRUD com tecnologia NODE.js, 
a debugar erros, 
a fazer testes unitários e utilizá-los para otimização do código, 
trabalhar em equipe melhora o resultado de todos.
  
## Contribuindo

As constribuições são sempre bem vindas!



  


  
