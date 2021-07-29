# Projeto de encerramento de módulo 4: CRUD - API

Esta API REST foi elaborada para atendender uma ACADEMIA e executa a leitura, inclusão, exclusão
e alteração das informações do banco de dados TREINO.


## Appendix

O Banco de dados é composto por 5 colunas 
ID, MUSCULO, EXERCICIO, SERIES e REPETICOES

  
## Contribuindo

As constribuições são sempre bem vindas!

  
## Demo

![image](https://user-images.githubusercontent.com/78883930/127559955-bd4f30e9-bb81-4677-8a0e-53781b4e3ebd.png)


## Execução

Para implantar este projeto, execute:

  npm run deploy
  
## API Reference

#### Get all items


  GET /api/items


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

  
## Autor 

- [@kellenThaisaLima](https://www.github.com/kellenThaisaLima)

  
## Instalar Pacotes



```bash
  npm install my-project
  cd my-project
```
    
## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

  
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

  
## Running Tests

To run tests, run the following command

```bash
  npm run test
```

  
